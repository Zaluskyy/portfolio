import React, { useRef } from 'react';
import { useEffect } from 'react';

import '../style/canvasSkillsAnimation.css'

import html from '../img/skills/html.png';
import css from '../img/skills/css.png';
import js from '../img/skills/js.png';
import git from '../img/skills/git.png';
import react from '../img/skills/react.png';


const htmlImg = new Image()
htmlImg.src = html
const cssImg = new Image()
cssImg.src = css
const jsImg = new Image()
jsImg.src = js
const gitImg = new Image()
gitImg.src = git
const reactImg = new Image()
reactImg.src = react

const images = [
    htmlImg,
    cssImg,
    jsImg,
    gitImg,
    reactImg,
]

const CanvasSkillsAnimation = () => {

    const canvas = useRef(null);
    // console.log(canvas.current.width);
    const requestRef = React.useRef()

    const randMinMax = (min, max, floor=false) =>{
        if(floor) return Math.floor(Math.random()*(max-min+1)+min);
        return Math.random()*(max-min)+min;
    }



    const skillsSize = 50

    let lineColor = randMinMax(0, 360, true)









    class Skills{
        constructor(x, y, velocityX, velocityY, image){
            this.x = x
            this.y = y
            this.velocityX = velocityX
            this.velocityY = velocityY
            this.image = image
            this.heightImg = (this.image.height/(this.image.width/skillsSize))
        }

        draw(){
            const ctx = canvas.current.getContext("2d");
            
            // ctx.beginPath()
            ctx.strokeStyle = `hsl(${lineColor}, 100%, 50%)`
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(canvas.current.width/2, canvas.current.height/2)
            ctx.stroke()
            ctx.beginPath()
            ctx.arc(this.x, this.y, skillsSize, 0, Math.PI*2, false)
            ctx.fill()
            ctx.stroke()
            // html.onload = ()=>{
            ctx.drawImage(this.image, this.x-skillsSize/2, this.y-this.heightImg/2, skillsSize, this.heightImg)
            // }

        }

        update(){

            const changeColorLine = ()=>{
                lineColor += 1
            }

            this.x += this.velocityX
            this.y += this.velocityY

            if(this.x>canvas.current.width-skillsSize||this.x<skillsSize){
                this.velocityX *= -1
                changeColorLine()
            }
            if(this.y>canvas.current.height-skillsSize||this.y<skillsSize){
                this.velocityY *= -1
                changeColorLine()
            }


            // if(this.x>canvas.width-50||this.x<50){
            //     this.velocityX *=-1
            //     changeColorLine()
            // } 
            // if(this.y>canvas.height-50||this.y<50){
            //     this.velocityY *=-1
            //     changeColorLine()
            // }

            this.draw()
        }
    }

    let skills = []
    const kurwaJD = ()=>{

        for (let i = 0; i < images.length; i++) {
            
            const x = randMinMax(0+skillsSize, canvas.current.width-skillsSize)
            const y = randMinMax(0+skillsSize, canvas.current.height-skillsSize)
            
            const velocityX = randMinMax(-2, 2)
            const velocityY = randMinMax(-2, 2)

            const image = images[i]
            
            skills.push(new Skills(x, y, velocityX, velocityY, image))        
            
        }
    }
        

    const animation = ()=>{
        const ctx = canvas.current.getContext("2d");
        requestRef.current = requestAnimationFrame(animation);
        ctx.clearRect(0, 0, canvas.current.width, canvas.current. height)
        for (let i = 0; i < skills.length; i++) {
            skills[i].update()
            
        }
    }


    useEffect(()=>{
        // requestRef.current = requestAnimationFrame(animation)
        kurwaJD()
        animation()
    }, [])





    return ( 
        <div className="canvasSkillsAnimation">
            <canvas
            ref={canvas}
            width={window.innerWidth/2-50}
            height={window.innerWidth/2-50}
            />
        </div>
     );
}
 
export default CanvasSkillsAnimation;