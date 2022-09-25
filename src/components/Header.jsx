import React from "react";
import Search from "./Search";
import './Header.css';
import Logo from '../assets/LOGO.png'

function Header({city,handlecity,GetData}){
    return(
        <div>
            <div className='Header'>
            <div className="content"> 
                <img src={Logo} className="logo" alt="" />
                <Search City={city} onChangeFunction={handlecity}
                 FunctionGet={GetData} 
                />
            </div>
  
            </div>
        </div>
    )
}


export default Header;