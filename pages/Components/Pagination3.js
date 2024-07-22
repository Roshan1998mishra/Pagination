import { useState } from "react";

const Pagination3 = () => {
    const myfile = {
        home: {
            1: 'Hello this is 1st Page Home',
            2: 'Hello this is 2nd Page Home'
        },
        about: {
            1: 'About Page 1',
            2: 'About Page 2'
        }
    }

    const [count, setCount] = useState('home');
    const [page, setPage] = useState(1);

    // button functionality
    const code = (pageNum) => {
        setPage(pageNum);
    }

    // a functionality 
    const loadpage = (section) => {
        setCount(section);  
        setPage(1);         
    };

return (
        <>
            <ul>
                <li><a href="#" onClick={() => loadpage('home')}>Home</a></li>
                <li><a href="#" onClick={() => loadpage('about')}>About</a></li>
            </ul>

            <div id="mycontent">
                {myfile[count][page]}
            </div>

            <div>
                <button onClick={() => code(1)}>1</button>
                <button onClick={() => code(2)}>2</button>
            </div>
        </>
    )
}

export default Pagination3;
