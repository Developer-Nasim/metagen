import React,{useState} from "react"
import "./style.css"
import CamouflageBg from "../../img/camouflage_bg.png"
import VideoImg from "../../img/videos.png"
import MorePople from "../../img/more-people.png"
import MorePopleMobile from "../../img/more-people-mobile.png"
import MetaPod from "../../img/txts/f2.png" 
import MetaDors from "../../img/txts/f3.png"
import UniverBackg from "../../img/universe.png"
import TheVideo from "../../img/METAPOD_SHORT.mp4"
import TheTitle from "../titles"
import { Parallax } from 'react-parallax';


export default function KidsHang() {

    const [ showPopup,setShowPopup ] = useState(false)

    return(
        <div className="kidsHang"> 
            <Parallax className="backg"  bgImage={CamouflageBg} strength={800}>  </Parallax>
            {/* <img src={CamouflageBg} className="backg" alt="" /> */}
            <div className="kidsHang-top"> 
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-8">
                            <TheTitle 
                                heding="where the cool kids hang."
                                content="Born to lead a world of its own making, the METAGN is the next-gen of hyper-powered beings. It consists of 9.999 gen-builders, pioneers and transtetters, creating new waves on the Metaverse."
                                classes="leftModeTitle"
                                txtImg={MetaPod}
                            />  
                        </div>  
                    </div>
                </div>
                <div className="middle_section">
                    { showPopup ? 
                        <video src={TheVideo} width="auto" height="300" controls="controls" autoPlay={true} />
                    : 
                    <> 
                        <Parallax className="videoBackg"  bgImage={VideoImg} strength={400}>  </Parallax> 
                        <button type="button" onClick={() => setShowPopup(vlu => !vlu)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                            <g id="Group_1" data-name="Group 1" transform="translate(-918 -5773)">
                                <g id="Rectangle" transform="translate(918 5773)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2">
                                <rect width="70" height="70" rx="4" stroke="none"/>
                                <rect x="1" y="1" width="68" height="68" rx="3" fill="none"/>
                                </g>
                                <path id="Triangle" d="M9,0l9,14H0Z" transform="translate(960 5799) rotate(90)" fill="#fff"/>
                            </g>
                            </svg>
                        </button>
                    </> 
                    }
                </div>
                <div className="container">
                    <div className="row">  
                        <div className="col-lg-8">
                            <TheTitle 
                                heding="Become a tastemaker."
                                content="Metagen is bringing the culture, attitude and ethos of the most iconic brands in art and fashion to the metaverse. Get priority access to these ultra limited collections and unlock fashion drops with your Metagen."
                                classes="leftModeTitle"
                                txtImg={MetaDors}
                            />   
                        </div> 
                    </div>
                </div>
                <div className="testmacker">
                    <img src={MorePople} className="d-none d-md-block" alt="" />
                    <img src={MorePopleMobile} className="d-block d-md-none" alt="" />
                </div>
            </div>
            <Parallax
                className="univerSection"
                bgImage={UniverBackg}
                strength={200}
                renderLayer={(percentage) => (
                    <img style={{position:"absolute",width:"480px",height:"500px",top:(percentage * 150)+"px",left:"50%",transform:"translateX(-50%)"}} src={UniverBackg} className="backg" alt="" />
                )}
            > 
                <div className="kidsHang-bottom"> 
                    <div className="container">
                        <div className="row"> 
                            <div className="col-lg-8">
                                <TheTitle 
                                    heding="Help build a new universe."
                                    content="The story of Metagen starts with you. NFTs empower communities with ownership and governance. Metagen is where your voice and creativity has a home - to help build the future, to write the stories of tomorrow, and venture into uncharted territory. The only limits is your imagination. What will we build together?"
                                    classes="leftModeTitle"
                                    txtImg={MetaPod}
                                />   
                            </div>  
                        </div>
                    </div>
                </div>
            </Parallax> 
       
        </div>
    )
}

