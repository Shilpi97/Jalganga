import React from 'react';
import web from "../src/images/roundstopper.jpg";
import {NavLink} from "react-router-dom";


const Card = (props) => {
    return (<> 
        <div className="col-md-3 col-10 mx-auto">
            <div className="card">
                <img src={props.imgsrc} className="card-img-top" style={{height: '150px', width: '200px', marginLeft: 'auto', marginRight: 'auto'}} alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                </div>
            </div>
        </div>              
    </>);
}

export default Card;