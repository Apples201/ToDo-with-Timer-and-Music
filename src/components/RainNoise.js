import React, {useState} from "react";

const RainNoise = () =>{
    const [paused, setPaused] = useState(true);

    const togglePaused = (e) =>{
        e.preventDefault();
        const player = document.getElementById("audioPlayer");
        if(paused){
            setPaused(false);
            player.play();
        }
        else{
            setPaused(true);
            player.pause();
        }
    }
    return(
        <div className="rainNoise">
            <audio loop id="audioPlayer">
                <source src={process.env.PUBLIC_URL + 'LightRainShower.mp3'} type ="audio/ogg"></source>
            </audio>
            <button onClick={togglePaused}>
                {(paused)?("Play"):("Pause")}
            </button>
        </div>
    );
};


export default RainNoise;