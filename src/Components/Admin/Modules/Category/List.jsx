import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {

    const [categories , setCategories] = useState([])
    
    
    const categoryList = async() => {
        await axios.get('/category')
        .then(function (response) {
            console.log(response.data.data);
            setCategories(response.data.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    useEffect(()=>{
         categoryList()
    },[])
    
    return (
        <section>



            <div class="card">
            <div class="card-body">
              <h5 class="card-title">Category List <Link className="btn btn-sm btn-success" to="/admin/category/create">Add Category</Link> </h5>

              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Category Image</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
            
            {
              categories.map((cat, index) => 
                <tr>
                  <td>{index+1}</td>
                  <td>{cat.name}</td>
                  <td> <img style={{height:"60px", width:"60px"}} src={cat.image} alt="" /> </td>
                  <td>active</td>
                  <td>
                    <a href="">Edit</a>
                  </td>
                </tr>
              )
            }

                </tbody>
              </table>
            
            </div>
            </div>
        </section>
    )
}
export default CategoryList