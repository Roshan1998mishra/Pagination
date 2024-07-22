import React, { useState } from 'react'

const Page6 = () => {

    const data = {
        home: {
            1 : 'HTML',
            2: 'CSS'
        },
        service : {
            1 : 'JavaScript',
            2: 'Bootstrap'
        }
    }

    const [menu , setMenu] = useState('home');
    const [loader , setLoader] = useState('1');

    // button functionality
    const reload = (roshan) => {
          setLoader(roshan);
        }

     //  a functionality
    const app = (mishra) => {
        setMenu(mishra)
        setLoader(1);
}

  return (
    <>
    <h1 className='text-center' style={{fontSize:'25px'}}>Pagination 6th example</h1>
    <ul>
        <li><a href='#' onClick={()=> app('home')}>Home</a></li>
        <li><a href='#' onClick={()=> app('service')}>Service</a></li>
    </ul>

    <div id='content'>
        {data [menu][loader]} 
    </div>
    
    <div>
        <button onClick = {() => reload(1) }>1</button>
        <button onClick = {() => reload(2) }>2</button>
    </div>
</>

)
}
export default Page6
