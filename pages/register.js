import Head from 'next/head'
import Link  from 'next/link'
const Register =()=>{
    return(
        <div>
            <Head>
                <title>Register Page</title>
            </Head>

            <form className="mx-auto my-4" style={{maxWidth:"600px"}}>

            <div className="form-group">
                    <label htmlfor="exampleInputEmail1">Fullname</label>
                    <input type="text" className="form-control" id="fullname" aria-describedby="fullnameHelp" placeholder="Enter Fullname"/>
                </div>
                <div className="form-group">
                    <label htmlfor="exampleInputEmail1">Address</label>
                    <input type="text" className="form-control" id="address" aria-describedby="addressHelp" placeholder="Enter Address"/>
                </div>
                <div className="form-group">
                    <label htmlfor="exampleInputEmail1">Contact</label>
                    <input type="text" className="form-control" id="contact" aria-describedby="contactHelp" placeholder="Enter Contact"/>
                </div>
                <div className="form-group">
                    <label htmlfor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlfor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
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