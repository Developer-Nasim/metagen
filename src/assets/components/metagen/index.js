import React from "react"
import "./style.css" 
import MetGen from "../../img/squad.png"
import Goods from "../../img/goods.png"
import MetagenTxt from "../../img/txts/f9.png"
import MetawearTxt from "../../img/txts/f10.png"
import TheTitle from "../titles"

export default function MetagenMetawear() {
    return(
        <div className="metagen_metawear">
            <div className="metagen"> 
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <TheTitle  
                                content="Born to lead a world of its own making, the METAGN is the next-gen of hyper-powered beings. It consists of 9.999 gen-builders, pioneers and transtetters, creating new waves on the Metaverse."
                                classes="centeredTitle"
                                txtImg={MetagenTxt}
                            /> 
                        </div>
                    </div>
                </div>
                <img src={MetGen} alt="" />
            </div>
            <div className="metawear"> 
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <TheTitle 
                                heding="Customise from head to toe."
                                content="Enter the upper echelons of fashion and lifestyle with limited release collectibles for Metagen. With collectibles, update the look of your Metagen and stay fresh. Your Metagen NFTs look evolves with you."
                                classes="centeredTitle"
                                txtImg={MetawearTxt}
                            /> 
                        </div>
                    </div>
                    
                    <img src={Goods} className="full-width" alt="" />
                </div>
            </div>
        </div>
    )
}

