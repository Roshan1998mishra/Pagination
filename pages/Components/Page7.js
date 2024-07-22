import React, { useState } from 'react'

const Page7 = () => {

    const [count , setCount] = useState('home');
    const [page , setPage] = useState(1);

    const data = {
        home : {
            1 : 'home - 1st page',
            2: 'home- 2nd Page'
        },
       about : {
        1:'about - 1st page',
        2: 'about - 2nd Page'
       }
    }

    // button functionality
    const code = (roshan) => {
        setPage(roshan)
    }

    // a functionality 
    const pageload = (mishra) => {
        setCount(mishra)
            setPage(1);
    }

  return (
    <>
    <h1 className='text-center' style={{fontSize: '25px'}}>Pagination example 7th</h1>
    <div>
        <ul>
            <li><a href='#' onClick={()=> pageload('home')}>Home</a></li>
            <li><a href='#' onClick={()=> pageload('about')}>About</a></li>
        </ul>
    </div>
    <div id='content'>
        {data [count] [page]}
    </div>

    <div>
        <button type='button' onClick={()=> code(1)}>1</button>
        <button type='button' onClick={() => code (2)}>2</button>
    </div>
    </>
  )
}

export default Page7
