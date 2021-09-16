import Head from 'next/head'
import { useContext } from 'react'
import {DataContext} from '../store/GlobalState'
import Link from 'next/link'

const Users = () => {
    const {state, dispatch} = useContext(DataContext)
    const {users, auth} = state

    if(!auth.user) return null;
    return(
        <div className="table-responsive">
            <Head>
                <title>Users</title>
            </Head>

            <h2 style={{marginTop:"20px", textAlign:"center"}}> User Details</h2>

            <table className="table w-100">
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                      
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((user, index)=> (
                            <tr key={user._id} style={{cursor: 'pointer'}}>
                                <th>{index + 1}</th>
                                <th>{user._id}</th>
                                
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                                <th>
                                    {
                                        user.role === 'admin'
                                        ? user.root ? <i className="fas fa-check text-success"> Admin</i>
                                                    : <i className="fas fa-check text-success"></i>

                                        :<i className="fas fa-times text-danger"></i>
                                    }
                                </th>
                               
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Users