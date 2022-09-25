import React from "react";
import './Loading.css'
import LoadingGif from '../assets/Loading.gif'

function Loading(){
        return(
            <div>
               <div className="modal">
                <img src={LoadingGif} className="Loading" alt="" />
               </div>
            </div>
        )
}

export default Loading