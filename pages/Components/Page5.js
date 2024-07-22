import React, { useState } from 'react'

const Page5 = () => {

    const file = {
        home : {
            1: 'home - 1st page ',
            2: 'home - 2nd page'
        },
        
        contact : {
            1: 'contact - 1st page',
            2 : 'contact - 2nd page'
        }
    }

    const [count , setCount] = useState('home');
    const [page , setPage] = useState(1);

    // button functionality 
    const check =(parameter) => {
        setPage(parameter);
    }
    
    //  a ke liye functionality
    const menu = (parameter2) => {
        setCount(parameter2);
        setPage(1);
    }

  return (
    <>
      <h1 className='text-center' style={{fontSize: '24px', fontFamily: 'sans-serif'}}>Pagination 5th Example:</h1>
    <ul>
        <li><a href='#' onClick= {()=> menu('home')}>Home</a></li>
        <li><a href='#' onClick={()=> menu('contact')}>Contact</a></li>
    </ul>

      <div>
        {file [count][page]} 
      </div>

      <div>
        <button onClick={()=> check (1)}>1</button>
        <button onClick={()=> check(2)}>2</button>
      </div>

    </>
  )
}

export default Page5;