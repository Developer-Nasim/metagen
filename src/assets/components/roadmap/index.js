import React from "react"
import "./style.css" 
import RoadMapDot from "../../img/roadmap_dot.png"
import RoadTxt from "../../img/txts/f5.png"



const RoadMapBlk = ({date,monthYear,title,contents}) => {
    return (
        <div className="roadmap-blk">
            <div className="roadmap-blk-left-wrp"> 
                <img src={RoadMapDot} alt="" />
                <h4>{date} <small>{monthYear}</small></h4>
            </div>
            <div className="roadmap-blk-right-wrp">  
                <h4>{title}</h4>
                <p>{contents}</p>
            </div>
        </div>
    )
}


export default function RoadMap() {
    return(
        <div className="roadmap">
            <div className="container">
                <div className="row"> 
                    <div className="col-lg-12">
                        <img src={RoadTxt} className="roadMapTxt" alt="" />
                    </div>
                    <div className="col-lg-12">
                        <div className="roadmap-wrp">
                            <RoadMapBlk date={23} monthYear={"march 2022"} title={"the genesis reveal"} contents={"Just like humans, Metagens come into the metaverse with only their bodies. In the first part of the reveal, your Metagen will have a few traits: their gender, facial expressions, hairstyle, and tattoos."}/> 
                            <RoadMapBlk date={23} monthYear={"march 2022"} title={"the genesis reveal"} contents={"Just like humans, Metagens come into the metaverse with only their bodies. In the first part of the reveal, your Metagen will have a few traits: their gender, facial expressions, hairstyle, and tattoos."}/> 
                            <RoadMapBlk date={23} monthYear={"march 2022"} title={"the genesis reveal"} contents={"Just like humans, Metagens come into the metaverse with only their bodies. In the first part of the reveal, your Metagen will have a few traits: their gender, facial expressions, hairstyle, and tattoos."}/> 
                            <RoadMapBlk date={23} monthYear={"march 2022"} title={"the genesis reveal"} contents={"Just like humans, Metagens come into the metaverse with only their bodies. In the first part of the reveal, your Metagen will have a few traits: their gender, facial expressions, hairstyle, and tattoos."}/> 
                            <RoadMapBlk date={23} monthYear={"march 2022"} title={"the genesis reveal"} contents={"Just like humans, Metagens come into the metaverse with only their bodies. In the first part of the reveal, your Metagen will have a few traits: their gender, facial expressions, hairstyle, and tattoos."}/> 
                            <RoadMapBlk date={23} monthYear={"march 2022"} title={"the genesis reveal"} contents={"Just like humans, Metagens come into the metaverse with only their bodies. In the first part of the reveal, your Metagen will have a few traits: their gender, facial expressions, hairstyle, and tattoos."}/> 
                            <p className="endNotes">And still, this is only the begining</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

