import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import router, {useRouter} from 'next/router';
import { useContext } from 'react'
import Link from 'next/link';
import { DataContext } from '../../store/GlobalState'

function MeetupItem(props) {
  const router = useRouter();
  
  function showDetailsHandler(){
    router.push('/' + props.id)
  }
  function showProduct (){
    router.push('/create/' + props.id)
  }
  const { state, dispatch } = useContext(DataContext)
    const { cart, auth } = state

    const userLink = () => {
        return(
            <>
               
                    <a className="btn btn-info"
                    style={{marginRight: '5px', flex: 1}} onClick={showDetailsHandler}>View</a>
                
                
            </>
        )
    }

    const adminLink = () => {
        return(
            <>
               
                    <a className="btn btn-info"
                    style={{marginRight: '5px', flex: 1}} onClick={showProduct}>Edit</a>
               
                <button className="btn btn-danger"
                style={{marginLeft: '5px', flex: 1}}
                data-toggle="modal" data-target="#exampleModal"
                onClick={() => dispatch({
                    type: 'ADD_MODAL',
                    payload: [{ 
                        data: '', id: props._id, 
                        title: props.title, type: 'DELETE_PRODUCT' 
                    }]
                })} >
                    Delete
                </button>
            </>
        )
    }
  return (
    <div className="card" style={{ width: '25rem', margin:"15px" , display:"flex"}}>
 
    <img className="card-img-top" src={props.image} alt={props.title} />
    <div className="card-body">
        <h5 className="card-title text-capitalize" title={props.title}>
            {props.title}
        </h5>

        <div className="row justify-content-between mx-0">
            <h6 className="text-danger">{props.price}</h6>
           
        </div>

        <p className="card-text" title={props.description}>
            {props.description}
        </p>
            
        <div className="row justify-content-between mx-0">
            {!auth.user || auth.user.role !== "admin" ? userLink() : adminLink()}
        </div>
    </div>
</div>
    // <li className={classes.item}   >
    //   <Card  >
    //     <div className={classes.image}>
    //       <img src={props.image} alt={props.title} />
    //     </div>
    //     <div className={classes.content}>
    //       <h3>{props.title}</h3>
    //       <address>{props.price}</address>
    //     </div>
    //     <div className={classes.actions}>
    //       <button onClick={showDetailsHandler}>Show Details</button>
    //     </div>
    //   </Card>
    // </li>
  );
}

export default MeetupItem;