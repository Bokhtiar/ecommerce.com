import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const CategoryProduct = () => {
    const {id} = useParams()
    const [categories, setCategory] = useState([''])
    const [products, setProduct] = useState([''])

    const AllCategory =()=>{
        axios.get('/category').then((res)=>{
            setCategory(res.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    const CategoryWaysProduct = () => {
        axios.get(`/category/product/${id}`).then((res)=>{
            setProduct(res.data.data)
        }).catch((error) => {
            console.log(error)
        })  
    } 

    /* product list show for if category not select defoult some product show */
    const AllProduct  = () =>{
        axios.get('/product').then((res) =>{
            setProduct(res.data.data)
        }).then((error)=>{
            console.log(error);
        })
    }

    /* category click after the query from product table then show the response data */
    const cat = (id)=>{
        axios.get(`/category/product/${id}`).then((res)=>{
            setProduct(res.data.data)
        }).catch((error) => {
            console.log(error)
        }) 
    }



    useEffect(()=>{
        AllCategory()
        CategoryWaysProduct()
        AllProduct()
    },[])

    return (
        <div className="my-5 container">
            <section className="row">
                <div className="col-md-2 col-lg-2 col-sm-4">
                    <h3>Categories</h3> <hr />
                    <ul style={{ "listStyle": "none" }}>
                        {
                            categories.map((category, index)=>
                                <li><a onClick={()=>cat(category._id)} > <img src={category.image} height={20} width={20} alt="" /> {category.name}</a></li>
                            )
                        }
                        
                    </ul>
                </div>
                <div className="col-md-10 col-lg-10 col-sm-8">
                    <h2>Products</h2> <hr />
                    <div className="row">
                        {
                        products.length >1 ?
                        products.map((product, index) => 
                        <div className="col-sm-12 col-md-4 col-lg-4 product">
                        <Link to={`/product/${product._id}`}>
                         <div className="card" style={{ width: "17rem" }}>
                           <img height={200} className="card-img-top" src={product.image} alt="Card image cap" />
                           <div className="card-body">
                             <div className="row text-dark">
                               <div className="col-md-8 col-lg-8 col-sm-8 font-weight-bold">{product.name}</div>
                               <div className="col-md-4 col-lg-4 col-sm-4"> <strong>৳</strong> {product.price}</div>
                             </div>
                             
                           </div>
                         </div>
                         <div className="stoke">
                           Stock
                         </div>
                        </Link>
                       </div>
                        )
                        :
                        "Select Your Product Category"
                    }
                      
                    </div>
                </div>
            </section>
        </div>
    )
}
export default CategoryProduct