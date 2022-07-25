import axios from "axios"
import {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import Slider from "./Layouts/Slider"

const Home = () => {

  const [products , setProduct] = useState([])
  const [categories , setCategory] = useState([])
  
  useEffect(()=>{
    productList()
    CategoryList()
  },[])

  const productList = async() => {
    axios.get('/product').then((res)=>{
      setProduct(res.data.data)
    }).catch((error) =>{
      console.log(error)
    })
  }


  const CategoryList = () =>{
    axios.get('/category').then((res)=>{
      setCategory(res.data.data)
    }).catch((error)=>{
      console.log(error);
    })
  }

  


  return (
    
    <section>
      <Slider></Slider>
      <section className=" layout_padding ">
        <div className="container">
          <h2 className="text-center">Our Categories</h2>
          <p className="text-center">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>

          <div className="row">
            {
              categories.map((category, index) => 
              <div className="col-md-2 my-2">
                <div className="card">
                  <img height={80} className="card-img-top" src={category.image} alt="Card image cap" />
                  <p className="my-2 text-center"><a className="text-dark" href="">{category.name}</a></p>

                </div>
              </div>
              )
            }
            
          </div>
        </div>
      </section>

      <section className="fruit_section">
        <div className="container">
          <h2 className="custom_heading">Just For You</h2>
          <p className="custom_heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          <div className="row">
            
           {
             products.map((product, index) => 
             <div className="col-sm-12 col-md-3 col-lg-3 product">
             <Link to={`/product/${product._id}`}>
              <div class="card" style={{ width: "17rem" }}>
                <img height={200} class="card-img-top" src={product.image} alt="Card image cap" />
                <div class="card-body">
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
           }

          </div>
        </div>
      </section>

      {/* contact */}
      <section className="contact_section layout_padding">
        <div className="container">
          <h2 className="font-weight-bold">
            Contact Us
          </h2>
          <div className="row">
            <div className="col-md-8 mr-auto">
              <form action="">
                <div className="contact_form-container">
                  <div>
                    <div>
                      <input type="text" placeholder="Name" />
                    </div>
                    <div>
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div>
                      <input type="email" placeholder="Email" />
                    </div>

                    <div className="mt-5">
                      <input type="text" placeholder="Message" />
                    </div>
                    <div className="mt-5">
                      <button type="submit">
                        send
                      </button>
                    </div>
                  </div>

                </div>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="info_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>
                Fruits
              </h5>
              <ul>
                <li>
                  randomised
                </li>
                <li>
                  words which
                </li>
                <li>
                  don't look even
                </li>
                <li>
                  slightly
                </li>
                <li>
                  believable. If you
                </li>
                <li>
                  are going to use
                </li>
                <li>
                  a passage of
                </li>
                <li>
                  Lorem Ipsum,
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>
                Services
              </h5>
              <ul>
                <li>
                  randomised
                </li>
                <li>
                  words which
                </li>
                <li>
                  don't look even
                </li>
                <li>
                  slightly
                </li>
                <li>
                  believable. If you
                </li>
                <li>
                  are going to use
                </li>
                <li>
                  a passage of
                </li>
                <li>
                  Lorem Ipsum,
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>
                List
              </h5>
              <ul>
                <li>
                  randomised
                </li>
                <li>
                  words which
                </li>
                <li>
                  don't look even
                </li>
                <li>
                  slightly
                </li>
                <li>
                  believable. If you
                </li>
                <li>
                  are going to use
                </li>
                <li>
                  a passage of
                </li>
                <li>
                  Lorem Ipsum,
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="social_container">
                <h5>
                  Follow Us
                </h5>
                <div className="social-box">
                  <a href="">
                    <img src="images/fb.png" alt="" />
                  </a>

                  <a href="">
                    <img src="images/twitter.png" alt="" />
                  </a>
                  <a href="">
                    <img src="images/linkedin.png" alt="" />
                  </a>
                  <a href="">
                    <img src="images/instagram.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="subscribe_container">
                <h5>
                  Subscribe Now
                </h5>
                <div className="form_container">
                  <form action="">
                    <input type="email" />
                    <button type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </section>
  )
}
export default Home