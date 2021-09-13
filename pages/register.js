import Head from 'next/head'
import Link  from 'next/link'
import {useState, useContext, useEffect} from 'react'
import valid from '../utils/valid'

import {postData} from '../utils/fetchData'


const Register =()=>{
    const initialState ={
        name:"",
        email:"",
        password:""
    }
     const [UserData, setUserData] = useState(initialState)

     const { name, email, password} = UserData

     const handleChange = e =>{
         const {name, value} = e.target
         setUserData({...UserData, [name]:value})
     }
     const handleSubmit = async e => {
        e.preventDefault()
        const errMsg = valid(name, email, password)
       if(errMsg) console.log(errMsg)
    
        // const res = await postData('auth/register', UserData)
        
       
      }
    
     
    return(
        <div>
            <Head>
                <title>Register Page</title>
            </Head>

            <form className="mx-auto my-4" style={{maxWidth:"600px"}} onSubmit={handleSubmit}>

            <div className="form-group">
                    <label htmlfor="name">Fullname</label>
                    <input type="text" className="form-control" id="name"  name="name" 
                    aria-describedby="fullnameHelp" placeholder="Enter Fullname" value={name} onChange={handleChange}/>
                </div>
               
                <div className="form-group">
                    <label htmlfor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" 
                    aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlfor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" 
                    placeholder="Enter password" value={password} onChange={handleChange}/>
                </div>
                
                <button type="submit" className="btn btn-dark w-100">Submit</button>

                <Link href="login">
                <button type="submit" className="btn btn-primary w-100 ">Back</button>
                </Link>
                
            </form>
        </div>
       
        
    )
}
export default Register