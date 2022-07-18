import axios from "axios"
import {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import Slider from "./Layouts/Slider"

const Home = () => {

  const [products , setProduct] = useState([])
  
  useEffect(()=>{
    productList()
  },[])

  const productList = async() => {
    axios.get('/product').then((res)=>{
      setProduct(res.data.data)
    }).catch((error) =>{
      console.log(error)
    })
  }

  


  return (
    <section>
      <Slider></Slider>
      <section className="service_section layout_padding ">
        <div className="container">
          <h2 className="custom_heading">Our Services</h2>
          <p className="custom_heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          <div className=" layout_padding2">
            <div className="card-deck">
              <div className="card">
                <img className="card-img-top" src="images/card-item-1.png" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Orange</h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't look
                    even slightly believable.
                  </p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Grapes</h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't look
                    even slightly believable.
                  </p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Gauva</h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't look
                    even slightly believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <a href="" className="custom_dark-btn">
              Read More
            </a>
          </div>
        </div>
      </section>


      <section className="fruit_section">
        <div className="container">
          <h2 className="custom_heading">Fresh Fruits</h2>
          <p className="custom_heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          <div className="row">
            
           {
             products.map((product, index) => 
             <div className="col-sm-12 col-md-3 col-lg-3">
             <Link to={`/product/${product._id}`}>
              <div class="card" style={{ width: "14rem" }}>
                <img class="card-img-top" src={product.image} alt="Card image cap" />
                <div class="card-body">
                  <p class="card-text">{product.name} <br /> {product.price}Taka</p>
                </div>
              </div>
             </Link>
            </div>
             )
           }

          </div>
        </div>
      </section>

      <section className="tasty_section">
        <div className="container_fluid">
          <h2>
            Very tasty fruits
          </h2>
        </div>
      </section>


      <section className="client_section layout_padding">
        <div className="container">
          <h2 className="custom_heading">Testimonial</h2>
          <p className="custom_heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          <div>
            <div id="carouselExampleControls-2" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="client_container layout_padding2">
                    <div className="client_img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div className="client_detail">
                      <h3>
                        Johnhex
                      </h3>
                      <p className="custom_heading-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are <br />
                        going to use a passage of Lorem Ipsum, you need to be sure
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client_container layout_padding2">
                    <div className="client_img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div className="client_detail">
                      <h3>
                        Johnhex
                      </h3>
                      <p className="custom_heading-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are <br />
                        going to use a passage of Lorem Ipsum, you need to be sure
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client_container layout_padding2">
                    <div className="client_img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div className="client_detail">
                      <h3>
                        Johnhex
                      </h3>
                      <p className="custom_heading-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are <br />
                        going to use a passage of Lorem Ipsum, you need to be sure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom_carousel-control">
                <a className="carousel-control-prev" href="#carouselExampleControls-2" role="button" data-slide="prev">
                  <span className="" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls-2" role="button" data-slide="next">
                  <span className="" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

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