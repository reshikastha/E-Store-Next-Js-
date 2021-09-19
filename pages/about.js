const About =()=>{
    return(
        <div className="container-fluid">
        <div className="Aboutus">
                <div className="img">
                            {/* <div className="col-sm-12"> */}
                            <img src='./images/about.png' alt='car' className='img-fluid' style={{width:"100%", margin:"10px"}}/> 
                                   
                            {/* </div> */}
                </div>
              
                    <div className=" jumbotron car">
                        <div className="row">
                            {/* <h1>Save time </h1> */}
                            <div className="slide col-sm-6">
                                <h3>E-STORE</h3>
                              
                                <p> E-Store Online shopping is a form of electronic commerce which allows 
                                    consumers to directly buy goods or services from a seller over the Internet
                                     using a web browser or a mobile app. Consumers find a product of interest
                                      by visiting the website of the retailer directly or by searching among 
                                      alternative vendors using a shopping search engine, which displays the 
                                      same product's availability and pricing at different e-retailers.
                                    </p>
                                    </div>
                            <div className=" slide col-sm-6">

                                <h4>Save Money </h4>
                                <p> Get electronic product on best price.   
                                </p>
                                
                            </div>
                            </div>
                            
                        </div>
            </div>
            </div>
    )
}
export default About