import {Outlet} from 'react-router-dom'

const  InnerContent=() =>{
  return <div className='inner-content'>
   
      <Outlet/>
      <h2>outlate footer</h2>
  </div>
} 

export default InnerContent;