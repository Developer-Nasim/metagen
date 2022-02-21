import React from "react"
import "./style.css" 
 
 
export default function TheTitle({heding,content,classes,txtImg}) {
    return(
        <div className={"the_title "+classes}>
            {txtImg ? <img src={txtImg} alt="" /> : ""}
            {heding ? <h4>{heding}</h4> : ""}
            {content ? <p>{content}</p> : ""} 
        </div>
    )
}

