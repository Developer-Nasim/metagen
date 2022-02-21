import React from "react"
import "./style.css"  
import MetaTechTxt from "../../img/txts/f6.png"



const TechBlk = ({topTitle,bottomTitle,classes}) => {
    return (
        <div className={"tech-blk "+classes}>
            <div> 
                <p>{topTitle}</p>
                <span></span>
                <p>{bottomTitle}</p>
            </div>
        </div>
    )
}


export default function Metatech() {
    return(
        <div className="metatech">
            <div className="container">
                <div className="row"> 
                    <div className="col-lg-12">
                        <div className="metatech-wrp">
                            <img src={MetaTechTxt} alt="" className="metaTech" />
                            <h3>Trailblazing technologies.</h3>
                            <p>METAGEN engineering team has built the first 3D NFT rendering cloud-engine that allows refreshing an NFT character’s attributes & customization on-the-go, while propagating changes on the blockchain.</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="allBlks">
                            <TechBlk topTitle={"3D NFT Sources"} bottomTitle={"Cloud Vault"} classes={"doted_border"}/> 
                            <TechBlk topTitle={"3D rendering engine"} bottomTitle={"Cloud APIs"} classes={"gradient_border"}/> 
                            <TechBlk topTitle={"Metadata Propagation"} bottomTitle={"Cloud APIs"} classes={"doted_border"}/> 
                            <TechBlk topTitle={"METATECH PLATFORM"} bottomTitle={"THIRD-PARTIES"} classes={"gradient_border"}/> 
                            <p>3D NFT auto-rendering & blockchain propagation framework. by METAGEN.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

