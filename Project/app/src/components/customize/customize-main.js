import React, {useContext} from 'react';
import Header from '../header-footer/header/header'
import Footer from '../header-footer/footer'
import Context from '../context'
import TextTop from './top-text'
import ShopContent from '../display-boxes/shopContent'

function CustomizeMain(){
    const {allTemplates} = useContext(Context)
    return(
        <div>
            <Header/>
            <TextTop/>
            <ShopContent allBoxes={allTemplates}/> 
            <Footer/>
        </div>
    );
}

export default CustomizeMain;