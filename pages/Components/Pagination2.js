import React, { useState } from 'react'


const Pagination2 = () => {
    
    const data = {
        home:{
            1: 'home - 1st Page',
            2: 'home - 2nd Page'
        },

        about: {
            1: 'about - 1st-page',
            2: 'about - Hello React.js'
        }
    }

    const [mainMenu , setMainMenu]= useState('home');
    const [page,setPage] = useState(1);

    // button functionality
    const pageload = (page) => {
        setPage(page);
    };

    // a tag functionality
    const navigate = (menu) => {
      setMainMenu(menu);
      setPage(1);
    };

    
return (
    <>
    <h1 className='text-center' style={{fontSize: '26px'}}>Pagination Implementation 2</h1>
    <ul>
        <li><a href='#' onClick={()=> navigate ('home')}>Home</a></li>
        <li><a href='#' onClick={()=> navigate('about')}>About</a></li>
    </ul>

    <div id='content'>
         { data [mainMenu][page]  || 'no data'}
   </div>


   <div>
    <button onClick={()=> pageload(1)}>1</button>
    <button onClick={()=> pageload(2)}>2</button>
   </div>
    </>
      )
}

export default Pagination2
