import React from 'react';
import web from "../src/images/homeImg3.png";
import {NavLink} from "react-router-dom";
import Common from './Common';

const Home = () => {
    return (<> 
        <Common name='Grow your business with' imgsrc={web} visit='/product' btname="Our Products"/>
    </>);
}

export default Home;