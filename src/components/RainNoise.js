import React from "react";

const RainNoise = () =>{
    return(
        <div className="ForestNoise">
            <h1>ForestNoise goes here</h1>
            <audio controls loop>
                <source src={process.env.PUBLIC_URL + 'LightRainShower.mp3'}></source>
            </audio>
        </div>
    );
};


export default RainNoise;