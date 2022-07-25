import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem('token');
  console.log("token",token)
  return (
    <section>
      <div class="hero_area sub_pages">
        <header class="header_section">
          <div class="container">
            <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
              <Link class="navbar-brand" to="/">
                <img src="images/logo.png" alt="" /><span>
                  BT-SHOP
                </span>
              </Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul class="navbar-nav  ">
                    <li class="nav-item active">
                      <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/product">Category</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/product">Product</Link>
                    </li>
                    {/* <li class="nav-item">
                  <Link class="nav-link" to="/user/carts"> Cart</Link>
                </li> */}
                    <li class="nav-item">
                      <a class="nav-link" href="contact.html">Contact us</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Profile
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      {
                        token  ?
                        ( <div>
                          <Link class="dropdown-item" to="#">dashboard</Link>
                          <Link class="dropdown-item" to="/logout">Logout</Link>
                        </div> )
                        
                        : (
                          <div>
                          <Link class="dropdown-item" to="/login">Login</Link>
                          <Link class="dropdown-item" to="#">Register</Link>
                          </div>
                        )
                      }
{/*                           
                          <a class="dropdown-item" href="#">Login</a>
                          <a class="dropdown-item" href="#">Register</a> */}
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>

    </section>
  )
}
export default Navbar