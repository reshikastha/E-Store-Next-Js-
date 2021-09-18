// import classes from './MeetupDetail.module.css';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import router, {useRouter} from 'next/router';
function MeetupDetail(props){
    function showDetailsHandler(){
        router.push('/')
      }
    return(

        <li className={classes.detail}   >
        <Card  >
          <div >
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>Product Title :{props.title}</h3>
            <address>Product Price :{props.price}</address>
            <p>{props.description}</p>
          </div>
         <button className="btn btn-primary" style={{marginLeft: '25px',marginBottom:"10px", flex: 1}} onClick={showDetailsHandler}>Back</button>
        </Card>
      </li>
    // <section className={classes.detail}>
    //         <img src={props.image}
    //          alt={props.title}/>

    //          <h1>{props.title}</h1>
    //          <address>Rs {props.price}</address>
    //          <p>{props.description}</p>
    //     </section>
    )
}
export default MeetupDetail;

   