import React, { useState } from 'react';

const Pagination = () => {

  const mydata = {
    home: {
      1: 'home - 1st Page',
      2: 'home - 2nd Page',
      3: 'home- 3rd page'
    },
    about: {
      1: 'about - 1st Page',
      2: 'about - 2nd Page',
      3: 'about - 3rd page'
    },
    service: {
      1: 'service - 1st Page',
      2: 'service - 2nd Page',
      3: 'service - 3rd Page'
    }
  };

  const [mainMenu, setMainMenu] = useState('home');
  const [page, setPage] = useState(1);

  // button functionality
  const loadPage = (page) => {
    setPage(page);
  };
  


  // <a> functionality
  const navigate = (menu) => {
    setMainMenu(menu);
    setPage(1);
  };
  

  return (
    <>
      <h2 className="text-center" style={{ fontSize: '24px' }}>Pagination</h2>
      <ul>
        <li><a href="#" onClick={() => navigate('home')}>Home</a></li>
        <li><a href="#" onClick={() => navigate('about')}>About</a></li>
        <li><a href="#" onClick={() => navigate('service')}>Service</a></li>

      </ul>

      <div id="content">
        {mydata[mainMenu][page] || 'No data available'}
      </div>


      <div>
        <button type='button' onClick={() => loadPage(1)}>1</button>
        <button type='button' onClick={() => loadPage(2)}>2</button>
        <button type='button' onClick={() => loadPage(3)}>3</button>
      </div>
    </>
  );
};

export default Pagination;
