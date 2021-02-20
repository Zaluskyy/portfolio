import React from 'react';
import { useState } from 'react/cjs/react.development';
import '../style/home.css';

import CanvasAmimation from './CanvasAmimation';

const Home = () => {

    const sentence = "Hi,!I'm Krystian,!web developer";
    const sentenceArray = []

    const [letterAnimate, setLetterAnimate] = useState("")

    for(let i=0; i<sentence.length; i++){
        sentenceArray.push(sentence[i]);
    }

    let indexTime

    const handleClickLetter = (letter)=>{
        clearTimeout(indexTime);
        setLetterAnimate(letter);
        indexTime =  setTimeout(()=>{
            setLetterAnimate("")
        }, 1000)
    }
    const letter = sentenceArray.map((item, index)=>{

        if(item===" "){
            return (
                <div 
                key={index}
                style={{height:"20px", width:"20px",    float:"left", backgroundColor:"transparent"}}
                >{item+""}</div>
            )
        }else if(item==="!"){
            return (
                <div 
                key={index}
                style={{float:"none", color:"transparent"}}
                >{item}</div>
                )
        }


        return (
        <div
        key={index} 
        onMouseOver={()=>handleClickLetter(index)}
        className={letterAnimate===index?"animation":null}
        style={{float:"left"}}
        >{item}</div>
        )
    })
    return (
        <div className="home">
            <CanvasAmimation/>
            <div className="container">{letter}</div>
        </div>
    );
}
 
export default Home;