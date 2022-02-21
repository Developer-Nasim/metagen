import React from "react"
import "./style.css"  
import FaqTxt from "../../img/txts/f8.png"



const FaqItem = ({faqQue,faqAns}) => {
    const RandId = Math.floor(Math.random() * 1000)
    return (
        <div className="accordion-item"> 
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+RandId} aria-expanded="true" aria-controls={"collapse"+RandId}>
                {faqQue}
            </button> 
            <div id={"collapse"+RandId} className="accordion-collapse collapse" aria-labelledby={"heading"+RandId} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {faqAns}
                </div>
            </div>
        </div>
    )
}


export default function FAQ() {
    return(
        <div className="faq">
            <div className="container">
                <div className="row"> 
                    <div className="col-lg-12">
                        <img src={FaqTxt} className="faqTxt" alt="" />
                    </div>
                    <div className="col-lg-12">
                        <div className="faq-wrp">


                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item"> 
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is Metagen?
                                </button> 
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                        Metagen is a collection of 9,999 NFTs that are fully customizable on the Ethereum blockchain. Metagen is a collection of 9,999 NFTs that are fully customizable on the Ethereum blockchain.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item"> 
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What is Metagen?
                                </button> 
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Metagen is a collection of 9,999 NFTs that are fully customizable on the Ethereum blockchain. Metagen is a collection of 9,999 NFTs that are fully customizable on the Ethereum blockchain.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item"> 
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What is Metagen?
                                </button> 
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Metagen is a collection of 9,999 NFTs that are fully customizable on the Ethereum blockchain. Metagen is a collection of 9,999 NFTs that are fully customizable on the Ethereum blockchain.
                                </div>
                                </div>
                            </div>
                                {/* <FaqItem faqQue="What is Metagen?" faqAns="Metagen is a collection of 9,999 NFTs that are fully customizable on the Ethereum blockchain. Metagen is a collection of 9,999 NFTs that are fully customizable on the Ethereum blockchain."/>  */}
                        </div>
 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

