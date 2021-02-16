import React,{useContext} from 'react';
import Context from '../../context'

function UniqueBox(){
    return(
        <div className="unique-box-wrapper">
            <div className="unique-top-text">
                <a className="unique-top-text-a">Customize: Alex</a>
                <div className="unique-top-text-h2-button"><h2>CUSTOMIZE</h2></div>
                <div className="unique-top-text-h2-share"><h2>SHARE</h2></div>
            </div>
            <div className="unique-customize">
                <div className="unique-customize-left">
                    <div className="unique-customize-left-menu">
                        <div className="unique-customize-left-menu-prise">
                            $140.00
                        </div>
                        <div className="unique-customize-left-menu-btn">
                            <a className="a-btn">CUSTOMIZE</a>  
                        </div>
                        <div className="unique-customize-left-menu-qty">
                            <div>QTY</div>
                        </div>
                    </div>
                    <div className="unique-customize-left-menu-img">
                        <img src="https://manage.teakandtwine.com/storage/images/13161/cca02edfed4fef220442b86b8246a5d2.jpg" alt="logo"/>
                    </div>
                    <hr></hr>
                    <div className="unique-customize-left-menu-img-list">
                    <a><img src="https://manage.teakandtwine.com/storage/images/1037/6eead4df9b3854b90a6eaeb773993d96.jpg" alt="logo"/></a>
                    <a><img src="https://manage.teakandtwine.com/storage/images/13159/e6359ec22ae9bf8e3089e90c1ca3cc95.jpg" alt="logo"/></a>
                    <a><img src="https://manage.teakandtwine.com/storage/images/13160/bbc8e15ffdd43a083fce4bfa1e85dcd0.jpg" alt="logo"/></a>
                    <a><img src="https://manage.teakandtwine.com/storage/images/13161/3a3a4e8ef2517c88a7afb2e79e36c7e1.jpg" alt="logo"/></a>
                    </div>
                </div>
                <div className="unique-customize-right">
                    <h2>DETAILS</h2>
                    <a>To get started on your custom design, click "customize" above! Custom gifts are shipped within 2-4 business days. Creating an account will allow you to save your designs so that you can come back to them later. If you have any questions about your design, don't hesitate to reach out to us at: hello@teakandtwine.com and we'll help you out right away!</a>
                    <a className="a-btn">CUSTOMIZE</a> 
                </div>
            </div>
        </div>
    );
}

export default UniqueBox;