import React from "react"
import "./style.css"
import Fimg from "../../img/footer_metagen.png"
import FLogos from "../../img/brands.png"
import Discord  from "../../img/ic1.png"
import Instagram  from "../../img/ic2.png"
import Twiiter  from "../../img/ic3.png"

 
export default function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <div className="footer-wrp">
                            <img src={Fimg} className="f-img" alt="" />
                            <h3><span>JOIN THE metagen</span> <small>where it all begins</small></h3> 
                            <ul className="social">
                                <li><a href="#"><img src={Discord} alt="" /></a></li>
                                <li><a href="#"><img src={Twiiter} alt="" /></a></li>
                                <li><a href="#"><img src={Instagram} alt="" /></a></li>
                            </ul>
                            <p>METAGEN LTD — 2022 <br /> Made with love between Paris & London.</p>
                            <img src={FLogos} className="flogo" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

