import React from "react"
import "./style.css"  
import CamouflageBg from "../../img/camouflage_bg.png"
import GenitorTxt from "../../img/txts/f7.png"
import GenitorAvater from "../../img/avater.png"
import TheTitle from "../titles/"
import { Parallax } from 'react-parallax';



const GenitorBlk = ({title,name,contents,img}) => {
    return (
        <div className={"genitor-blk "}>
            <img src={img} alt="" />
            <h4> <span>{ title}</span> { name}</h4> 
            <p>{contents}</p>
        </div>
    )
}


export default function Genitors() {
    return(
        <div className="genitors">
            <Parallax className="backg" bgImage={CamouflageBg} strength={800}>  </Parallax> 
            <div className="container">
                <div className="row"> 
                    <div className="col-lg-6"> 
                        <TheTitle 
                            heding="Meet the genitors."
                            content="Collectively, the Metagen team combines over 100 years of experience working with iconic art, luxury, and fashion brands."
                            classes="leftModeTitle"
                            txtImg={GenitorTxt}
                        />  
                    </div>
                    <div className="col-lg-12">
                        <div className="genitors-wrp">
                            <GenitorBlk title={"co-founder"} name={"jane doe"} contents={"Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and .."} img={GenitorAvater}/>   
                            <GenitorBlk title={"co-founder"} name={"jane doe"} contents={"Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and .."} img={GenitorAvater}/>   
                            <GenitorBlk title={"co-founder"} name={"jane doe"} contents={"Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and .."} img={GenitorAvater}/>   
                            <GenitorBlk title={"co-founder"} name={"jane doe"} contents={"Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and .."} img={GenitorAvater}/>   
                            <GenitorBlk title={"co-founder"} name={"jane doe"} contents={"Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and .."} img={GenitorAvater}/>   
                            <GenitorBlk title={"co-founder"} name={"jane doe"} contents={"Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and .."} img={GenitorAvater}/>   
                            <GenitorBlk title={"co-founder"} name={"jane doe"} contents={"Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and .."} img={GenitorAvater}/>   
                            <GenitorBlk title={"co-founder"} name={"jane doe"} contents={"Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and .."} img={GenitorAvater}/>   
                            <GenitorBlk title={"co-founder"} name={"jane doe"} contents={"Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and .."} img={GenitorAvater}/>   
                            <GenitorBlk title={"co-founder"} name={"jane doe"} contents={"Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and .."} img={GenitorAvater}/>   
                            <GenitorBlk title={"co-founder"} name={"jane doe"} contents={"Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and .."} img={GenitorAvater}/>   
                            <GenitorBlk title={"co-founder"} name={"jane doe"} contents={"Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and ..Spent years working for Rolls-royce, Gucci, LV and .."} img={GenitorAvater}/>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

