import Head from 'next/head'
import { useState, useContext, useEffect } from 'react'
import {DataContext} from '../store/GlobalState'

import { getData } from '../utils/fetchData'
import ProductItem from '../components/product/ProductItem'

import {useRouter} from 'next/router'
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList'


const Home = (props) => {
  const [products, setProducts] = useState(props.products)

  const [isCheck, setIsCheck] = useState(false)
  const [page, setPage] = useState(1)
  const router = useRouter()

  const {state, dispatch} = useContext(DataContext)
  const {auth} = state

  useEffect(() => {
    setProducts(props.products)
  },[props.products])

  useEffect(() => {
    if(Object.keys(router.query).length === 0) setPage(1)
  },[router.query])

  // const handleCheck = (id) => {
  //   products.forEach(product => {
  //     if(product._id === id) product.checked = !product.checked
  //   })
  //   setProducts([...products])
  // }

  // const handleCheckALL = () => {
  //   products.forEach(product => product.checked = !isCheck)
  //   setProducts([...products])
  //   setIsCheck(!isCheck)
  // }

  // const handleDeleteAll = () => {
  //   let deleteArr = [];
  //   products.forEach(product => {
  //     if(product.checked){
  //         deleteArr.push({
  //           data: '', 
  //           id: product._id, 
  //           title: 'Delete all selected products?', 
  //           type: 'DELETE_PRODUCT'
  //         })
  //     }
  //   })

  //   dispatch({type: 'ADD_MODAL', payload: deleteArr})
  // }

  // const handleLoadmore = () => {
  //   setPage(page + 1)
  //   filterSearch({router, page: page + 1})
  // }
  const DUMMY_MEETUPS = [
    {
      id:'m1',
      title:'A First Meeting',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      price: '12163576',
      description:'This is a first meeting!'
    },
    {
      id:'m2',
      title:'A Second Meeting',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDfjM-pNLe7wU-1Rv5OvyoHxKfo2XA9gt8Lw&usqp=CAU',
      price: '234567',
      description:'This is a Second meeting!'
    }
  ]
  
  return(
    <div className="home_page">
      <Head>
        <title>Home Page</title>
      </Head>

       {/* <Filter state={state} /> */}

      {/* <div className="products" style={{display:'flex',flexDirection:"row",  margin:"10px 0"}}>
        {
          products.length === 0 
          ? <h2>No Products</h2>

          : products.map(product => (
            <ProductItem key={product._id} product={product} handleCheck={handleCheck} />
          ))
        }
      </div> */}
       <MeetupList meetups={props.meetups}/> 
      {/* {
        props.result < page * 6 ? ""
        : <button className="btn btn-outline-info d-block mx-auto mb-4"
        onClick={handleLoadmore}>
          Load more
        </button>
      } */}
    
    </div>
  )
}

export async function getStaticProps(){
  //fetch data from an API

  const client =await MongoClient.connect('mongodb+srv://e-Store:shrestha1@cluster0.0aafw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  const db =client.db();

  const meetupCollection = db.collection('meetups');
  const meetups =await meetupCollection.find().toArray();

  client.close();
  return{
    props:{
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        price:meetup.price,
        image:meetup.image,
        id:meetup._id.toString()
      }))
    },
    revalidate:1
  }
}
// export async function getServerSideProps({query}) {
//   const page = query.page || 1
//   const category = query.category || 'all'
//   const sort = query.sort || ''
//   const search = query.search || 'all'

//   const res = await getData(
//     `product?limit=${page * 6}&category=${category}&sort=${sort}&title=${search}`
//   )
//   // server side rendering
//   return {
//     props: {
//       products: res.products,
//       result: res.result
//     }, // will be passed to the page component as props
//   }
// }

export default Home