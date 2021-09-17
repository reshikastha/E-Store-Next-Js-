
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useState,useEffect } from 'react'
import { DataContext } from '../store/GlobalState'
import profile from '../public/profile.png'
import { patchData } from '../utils/fetchData'
import valid from '../utils/valid'
import {imageUpload} from '../utils/imageUpload'

const Profile = () => {
    const initialState ={
        avatar:'',
        name:"",
        password:""
    }

    const [data, setData] = useState(initialState)
    const {avatar,name,password} = data


    const {state, dispatch} = useContext(DataContext)
    const {auth} = state

    useEffect(() => {
      if(auth.user) setData({...data, name: auth.user.name, password:auth.user.password})
    }, [auth.user])

    const handleChange =(e) => {
        const {name,password, value} = e.target
        setData({...data,[name]:value,[password]:value})
    }
    const handleUpdate = e =>{
        e.preventDefault()
        if(password){
            const errMsg = valid(name, auth.user.email, password)
               console.log(errMsg);
            if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })
            updatePassword()
        }

        if(name !== auth.user.name || avatar) updateInfor()
    }
    const updatePassword = () => {
        dispatch({ type: 'NOTIFY', payload: {loading: true} })
        patchData('user/resetPassword', {password}, auth.token)
        .then(res => {
            if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
            return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
        })
    }
   
    const changeAvatar = (e) => {
        console.log(e.target.files[0])
        const file = e.target.files[0]
        if(!file)
            return dispatch({type: 'NOTIFY', payload: {error: 'File does not exist.'}})

        if(file.size > 1024 * 1024) //1mb
            return dispatch({type: 'NOTIFY', payload: {error: 'The largest image size is 1mb.'}})

        if(file.type !== "image/jpeg", file.type !== "image/png", file.type !=="image/jpg") //1mb
            return dispatch({type: 'NOTIFY', payload: {error: 'Image format is incorrect.'}})
        
        setData({...data, avatar: file})
    }

    const updateInfor = async () => {
        let media;
        dispatch({type: 'NOTIFY', payload: {loading: true}})

        if(avatar) media = await imageUpload([avatar])

        patchData('user', {
            name, avatar: avatar ? media[0].url : auth.user.avatar
        }, auth.token).then(res => {
            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

            dispatch({type: 'AUTH', payload: {
                token: auth.token,
                user: res.user
            }})
            return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
        })
    }

    if(!auth.user) return null;
    return( 
        <div className="profile_page">
            <Head>
                <title>Profile</title>
            </Head>

            <section className="row text-secondary my-3">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h3 className="text-center text-uppercase">
                     {auth.user.role === 'user' ? 'User Profile' :'Admin Profile'}
                    </h3>

                    <div className="avatar">
                        <img src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar}
                        alt="avatar"/>
                        <span>
                            <i className="fas fa-camera"></i>
                            <p>Change</p>
                            <input type="file" name="file" id="file_up"
                            accept="image/*" onChange={changeAvatar} />
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"className="form-control"
                        placeholder="Your name" value={name} onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" 
                        className="form-control" defaultValue={auth.user.email}  disabled={true}  onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"> Password</label>
                        <input type="password" name="password" className="form-control"
                        placeholder="Your new password"  value={password}  onChange={handleChange} />
                    </div>


                    <button className="btn btn-info" onClick={handleUpdate}>Update</button>
                </div>

                
            </section>
        </div>
    )
}

export default Profile