/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import loader from "../Assets/img/loader.svg"
const FullScreenLoader = (props) => {
    return (
        <div className={props.visibility}>
            <div className="ProcessingDiv">
                <div className="center-screen">
                    <img className="loader-size" src={loader}/>
                </div>
            </div>
        </div>
    );
};

export default FullScreenLoader;