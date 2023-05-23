import React, {useState, useEffect} from "react";
import '../App.css'

const Header =()=>{
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
      if (window.location.pathname === '/home') {
        setActiveIndex(1);
      } else if (window.location.pathname === '/models') {
        setActiveIndex(2);
      }
    }, []);
  
    const handleClick = (index) => {
      setActiveIndex(index);
    };
  
    return(
        <header>
        <div class="logos"><h1>KEN-STAR</h1></div>
        <div class="links">
            <ul>
                <li><a href="/" className={`routing ${activeIndex===0 ? 'activated' : ''}`} onClick={(e)=>handleClick(0, e)}>Home</a></li>
                <li><a href="/" className={`routing ${activeIndex===1 ? 'activated' : ''}`} onClick={(e)=>handleClick(1, e)}>Models</a></li>
                <li><a href="/" className={`routing ${activeIndex===2 ? 'activated' : ''}`} onClick={(e)=>handleClick(2, e)}>Spare parts</a></li>
                <li><a href="/" className={`routing ${activeIndex===3 ? 'activated' : ''}`} onClick={(e)=>handleClick(3, e)}>Shipping</a></li>
                <li><a href="/" className={`routing ${activeIndex===4 ? 'activated' : ''}`} onClick={(e)=>handleClick(4, e)}>About</a></li>
            </ul>
            <form action="">
                <input type="text" placeholder="search" required />
                <button type="submit" class="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    </header>
    )

}
export default Header;
