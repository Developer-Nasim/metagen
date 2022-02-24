import React from "react"
import "./style.css" 
// import BigImg from "../../img/hero.png"
import BigImg from "../../img/nft.jpg"
import Logo from "../../img/logo.png"
import Discord  from "../../img/ic1.png"
import Instagram  from "../../img/ic2.png"
import Twiiter  from "../../img/ic3.png"
import { Parallax } from 'react-parallax';



export default function Header() {
    return(
        <div className="header-area"> 
            <div className="header">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-lg-12">
                            <div className="header-wrp">
                                <div className="header-logo">
                                    <a href="#"><img src={Logo} alt="" /></a>
                                </div>
                                <div className="header-social">
                                    <a href="#"><img src={Discord} alt="" /></a>
                                    <a href="#"><img src={Twiiter} alt="" /></a> 
                                    <a href="#"><img src={Instagram} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Parallax className="header_img"  bgImage={BigImg} strength={400}>  </Parallax>
            {/* <img src={BigImg} className="header_img" alt="" /> */}
        </div>
    )
}

