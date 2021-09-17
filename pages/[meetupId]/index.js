import { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails(props){
    return(
        <MeetupDetail
      
            image={props.meetupDataimage}

             title = {props.meetupData.title}
            address={props.meetupData.address}
             description={props.meetupData.description}
        />
    );
}

export async function getStaticPaths(){
    const client =await MongoClient.connect('mongodb+srv://e-Store:shrestha1@cluster0.0aafw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    const db =client.db();

    const meetupCollection = db.collection('meetups');

    const meetups = await meetupCollection.find({},{_id:1}).toArray();

    client.close();

    return{
        fallback:false,
        paths: meetups.map((meetup)=>({
            params:{meetupId:meetup._id.toString()},
        })),
        
    }   
}

export async function getStaticProps(context){ 
 //fetch data from an API
 const meetupId = context.params.meetupId;
 const client =await MongoClient.connect('mongodb+srv://e-Store:shrestha1@cluster0.0aafw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
 const db =client.db();

 const meetupCollection = db.collection('meetups');
    const selectedMeetup = await meetupCollection.findOne({
        _id: ObjectId(meetupId)
     });

    client.close()

  return{
    props:{
      meetupData:{
          id:selectedMeetup._id.toString(),
          title: selectedMeetup.title,
          address: selectedMeetup.address,
          image:selectedMeetup.image,
          description:selectedMeetup.description,
      } 
    }
  }
}

export default MeetupDetails;