
import Card from '../../components/ui/Card'


const ProductsManager = (props) => {


  return (
    <Card>
      <h3 style={{textAlign:"center",fontStyle:"bold", marginTop:"10px"}}>Update the product</h3>
      <form className="form"  style={{padding:"1rem"}}>
        <div className="control" style={{marginBottom:"0.5rem"}}>
          <label htmlFor='title' style={{display:"block",marginBottom:"0.5rem"}}>Product Title</label>
          <input type='text' required id='title' style={{display:"block",font:"inherit",borderRadius:"4px",border:"1px solid #ccc", padding:"0.25rem",width:"100%"}}>{props.title}</input>
        </div>
        <div className="control" style={{marginBottom:"0.5rem"}}>
          <label htmlFor='image' style={{display:"block",marginBottom:"0.5rem"}}>Product Image</label>
          <input type='url' required id='image'  style={{display:"block",font:"inherit",borderRadius:"4px",border:"1px solid #ccc", padding:"0.25rem",width:"100%"}}>{props.image}</input>
        </div>
        <div className="control" style={{marginBottom:"0.5rem"}}>
          <label htmlFor='price' style={{display:"block",marginBottom:"0.5rem"}}>Price</label>
          <input type='text' required id='address' style={{display:"block",font:"inherit",borderRadius:"4px",border:"1px solid #ccc", padding:"0.25rem",width:"100%"}}>{props.price}</input>
        </div>
        <div className="control" style={{marginBottom:"0.5rem"}}>
          <label htmlFor='description' style={{display:"block",marginBottom:"0.5rem"}}>Description</label>
          <textarea
            id='description'
            required
            rows='5'
           
            style={{display:"block",font:"inherit",borderRadius:"4px",border:"1px solid #ccc", padding:"0.25rem",width:"100%"}}>{props.description}</textarea>
        </div>
        <div className="actions" style={{marginTop:"1rem", textAlign:"right"}}>
          <button style={{cursor:"pointer",backgroundColor:"#77002e",color:"white",padding:"0.5rem 1.5 rem", border:"1px solid #77002e", borderRadius:"4px", fontWeight:"bold"}}>Update Product</button>
        </div>
      </form>
    </Card>
  )

}

export default ProductsManager






    // const initialState = {
    //     title: '',
    //     price: 0,
    //     inStock: 0,
    //     description: '',
    //     content: '',
    //     category: ''
    // }
    // const [product, setProduct] = useState(initialState)
    // const {title, price, inStock, description, content, category} = product

    // const [images, setImages] = useState([])

    // const {state, dispatch} = useContext(DataContext)
    // const {categories, auth} = state

    // const router = useRouter()
    // const {id} = router.query
    // const [onEdit, setOnEdit] = useState(false)

    // useEffect(() => {
    //     if(id){
    //         setOnEdit(true)
    //         getData(`product/${id}`).then(res => {
    //             setProduct(res.product)
    //             setImages(res.product.images)
    //         })
    //     }else{
    //         setOnEdit(false)
    //         setProduct(initialState)
    //         setImages([])
    //     }
    // },[id])

    // const handleChangeInput = e => {
    //     const {name, value} = e.target
    //     setProduct({...product, [name]:value})
    //     dispatch({type: 'NOTIFY', payload: {}})
    // }

    // const handleUploadInput = e => {
    //     dispatch({type: 'NOTIFY', payload: {}})
    //     let newImages = []
    //     let num = 0
    //     let err = ''
    //     const files = [...e.target.files]

    //     if(files.length === 0) 
    //     return dispatch({type: 'NOTIFY', payload: {error: 'Files does not exist.'}})

    //     files.forEach(file => {
    //         if(file.size > 1024 * 1024)
    //         return err = 'The largest image size is 1mb'

    //         if(file.type !== 'image/jpeg' && file.type !== 'image/png')
    //         return err = 'Image format is incorrect.'

    //         num += 1;
    //         if(num <= 5) newImages.push(file)
    //         return newImages;
    //     })

    //     if(err) dispatch({type: 'NOTIFY', payload: {error: err}})

    //     const imgCount = images.length
    //     if(imgCount + newImages.length > 5)
    //     return dispatch({type: 'NOTIFY', payload: {error: 'Select up to 5 images.'}})
    //     setImages([...images, ...newImages])
    // }

    // const deleteImage = index => {
    //     const newArr = [...images]
    //     newArr.splice(index, 1)
    //     setImages(newArr)
    // }

    // const handleSubmit = async(e) => {
    //     e.preventDefault()
    //     if(auth.user.role !== 'admin') 
    //     return dispatch({type: 'NOTIFY', payload: {error: 'Authentication is not valid.'}})

    //     if(!title || !price || !inStock || !description || !content || category === 'all' )
    //     return dispatch({type: 'NOTIFY', payload: {error: 'Please add all the fields.'}})

    
    //     dispatch({type: 'NOTIFY', payload: {loading: true}})
        


    //     // let res;
    //     // if(onEdit){
    //     //     res = await putData(`product/${id}`, {...product, images: [...imgOldURL, ...media]}, auth.token)
    //     //     if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
    //     // }else{
    //     //     res = await postData('product', {...product, images: [...imgOldURL, ...media]}, auth.token)
    //     //     if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
    //     // }

      
        
    // }

    // return(
    //     <div className="products_manager">
    //         <Head>
    //             <title>Products Manager</title>
    //         </Head>
    //         <form className="row" onSubmit={handleSubmit}>
    //             <div className="col-md-6">
                    
    //                 <input type="text" name="title" value={title}
    //                 placeholder="Title" className="d-block my-4 w-100 p-2"
    //                 onChange={handleChangeInput} />

    //                 <div className="row">
    //                     <div className="col-sm-6">
    //                         <label htmlFor="price">Price</label>
    //                         <input type="number" name="price" value={price}
    //                         placeholder="Price" className="d-block w-100 p-2"
    //                         onChange={handleChangeInput} />
    //                     </div>

    //                     <div className="col-sm-6">
    //                         <label htmlFor="price">In Stock</label>
    //                         <input type="number" name="inStock" value={inStock}
    //                         placeholder="inStock" className="d-block w-100 p-2"
    //                         onChange={handleChangeInput} />
    //                     </div>
    //                 </div>

    //                 <textarea name="description" id="description" cols="30" rows="4"
    //                 placeholder="Description" onChange={handleChangeInput}
    //                 className="d-block my-4 w-100 p-2" value={description} />

    //                 <textarea name="content" id="content" cols="30" rows="6"
    //                 placeholder="Content" onChange={handleChangeInput}
    //                 className="d-block my-4 w-100 p-2" value={content} />

    //                 <div className="input-group-prepend px-0 my-2">
    //                     <select name="category" id="category" value={category}
    //                     onChange={handleChangeInput} className="custom-select text-capitalize">
    //                         <option value="all">All Products</option>
    //                         {
    //                             categories.map(item => (
    //                                 <option key={item._id} value={item._id}>
    //                                     {item.name}
    //                                 </option>
    //                             ))
    //                         }
    //                     </select>
    //                 </div>

    //                 <button type="submit" className="btn btn-info mb-3 px-4 mx-0" >
    //                     Create
    //                 </button>
    //             </div>
                            
    //             <div className="col-md-6 my-4">
    //                 <div className="input-group mb-3">
    //                     <div className="input-group-prepend">
    //                         <span className="input-group-text">Upload</span>
    //                     </div>
    //                     <div className="custom-file border rounded">
    //                         <input type="file" className="custom-file-input"
    //                         onChange={handleUploadInput} multiple accept="image/*" />
    //                     </div>

    //                 </div> 

    //                 <div className="row img-up mx-0">
    //                     {
    //                         images.map((img, index) => (
    //                             <div key={index} className="file_img my-1">
    //                                 <img src={img.url ? img.url : URL.createObjectURL(img)}
    //                                  alt="" className="img-thumbnail rounded" />

    //                                  <span onClick={() => deleteImage(index)}>X</span>
    //                             </div>
    //                         ))
    //                     }
    //                 </div>
                        

    //             </div>

                

    //         </form>

            
    //     </div>
    // )
