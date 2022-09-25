import React from "react";
import './Search.css';
import ArrowRight from '../assets/ArrowRight.png'

function Search({FunctionGet,City,onChangeFunction}){
    return(
        <div>
            <label className='searchArea'>
                <input type="text" className='Search' placeholder="Digite o nome da cidade" value={City} onChange={onChangeFunction} />
                <button className='searchBTN disable' onClick={FunctionGet} > <img src={ArrowRight} alt="" /></button>
                </label>
        </div>
    )
}


export default Search;