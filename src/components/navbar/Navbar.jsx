import {useState,useEffect} from "react";
import './Navbar.css';
import { HiMenu} from 'react-icons/hi';

function Navbar(){
  const logo = "https://res.cloudinary.com/risidio/image/upload/v1633609248/RisidioMarketplace/Group_-1_fgpanq.svg";

  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick(){
    setMenuOpen(!menuOpen);
  };

  return (<>
    <div className="mobile-container">
      <div className="topnav">
        <img src={logo} className="active" alt="logo" />
        <text className="Marketplace" transform="translate(79 12)" fill="#fff" font-size="12" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="-78" y="0">Marketplace</tspan></text>
        <div id="myLinks" style={{ display: menuOpen ? "block" : "none" }}>
          <a href="#gallery"><b>Gallery</b></a>
          <a href="#collection"><b>Collections</b></a>
          <hr className="hr"/>
          <a href="#howitwork">How It Works</a>
          <a href="#about">About Risidio</a>
          <button className="register"><b>Register with Hiro Wallet</b></button>
        </div>
        <a href="javascript:void(0);"className="icon"  onClick={handleClick}>
          <HiMenu/>
        </a>
</div>
</div>
        <div className="navbar_container">
          <img className="nav_banner" src="https://res.cloudinary.com/risidio/image/upload/v1633609222/RisidioMarketplace/gradienta-m_-1_v4hs5p.svg" alt="" />
          <text className="Marketplace" transform="translate(79 12)" fill="#fff" font-size="12" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="-78" y="0">Marketplace</tspan></text>
      
        <div className="mainNavbar">
          <ul>
          <img src={logo} alt="risidio-logo" className="logo" />
            {/* <div className="nav-left"> */}
              <li className="nav-item"> Explore </li>
              <li className="nav-item"> Featured Collections </li>
            {/* </div> */}
            {/* <div className="nav-right"> */}
              <li className="nav-item right"> How It Works</li>
              <li className="nav-item"> About Risidio</li>
              <button className="nav-item-b"> My NFTs</button>
            {/* </div> */}
          </ul>
        </div>
      </div>
      </>
  );
};

export default Navbar;


