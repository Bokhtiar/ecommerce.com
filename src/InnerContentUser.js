import {Outlet} from 'react-router-dom'

const  InnerContentUser=() =>{
  return <div className='inner-content'>
    <h2>outlate user header</h2>
      <Outlet/>
      <h2>outlate user footer</h2>
  </div>;
} 

export default InnerContentUser;