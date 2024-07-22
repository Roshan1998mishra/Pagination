import React, { useState } from 'react'

const Page4 = () => {

    const data = {
           home : {
            1 : 'home- 1st page',
            2: 'home- 2nd page'
           },

           about : {
            1 :'about-1st page',
            2: 'about -2nd page'
           }
    }

    const [page , setPage] = useState('home');
    const [kick , setkick] = useState(1); 

    // button fn
    const code = (gold) => {
         setkick(gold);
    }


    // a functionality
    const pageload = (section) => {
         setPage(section);
         setkick(1); 
}
  return (
    <>

    <h1 className='text-center font ' style={{fontSize: '25px'}} >Pagination 4th example</h1>
    <ul>
        <li><a href='#' onClick={()=> pageload('home')}>Home</a></li>
        <li><a href='#' onClick={()=> pageload('about')}>About</a></li>
    </ul>

    <div id='content'>
         {data[page] [kick] };
    </div>

    <div>
        <button onClick={()=> code (1)}>1</button>
        <button onClick={()=> code (2)}>2</button>

    </div>

    </>
      )
}

export default Page4
