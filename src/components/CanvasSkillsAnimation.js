import React, { useRef, useEffect, useState } from 'react';

import '../style/canvasSkillsAnimation.css'

import html from '../img/skills/html.png';
import css from '../img/skills/css.png';
import js from '../img/skills/js.png';
import git from '../img/skills/git.png';
import react from '../img/skills/react.png';
import me from '../img/me.jpg';


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
const meImg = new Image()
meImg.src = me

const images = [
    htmlImg,
    cssImg,
    jsImg,
    gitImg,
    reactImg,
]

const CanvasSkillsAnimation = () => {

    const [canvasSize, setCanvasSize] = useState(window.innerWidth/2-50)

    const canvas = useRef(null);
    // console.log(canvas.current.width);
    const requestRef = React.useRef()

    const randMinMax = (min, max, floor=false) =>{
        if(floor) return Math.floor(Math.random()*(max-min+1)+min);
        return Math.random()*(max-min)+min;
    }

    const distance = (x1, y1, x2, y2)=>{
        const distanceX = x1-x2
        const distanceY = y1-y2
        return Math.sqrt(Math.pow(distanceX, 2)+Math.pow(distanceY, 2))
    }



    const skillsSize = 50

    let lineColor = randMinMax(0, 360, true)

    const centerBallSize = 100




    class Skills{
        constructor(x, y, image){
            this.x = x
            this.y = y

            this.velocity = {
                x: randMinMax(-2, 2),
                y: randMinMax(-2, 2)
            }

            this.mass = 1

            this.friction = .5

            this.image = image
            this.heightImg = (this.image.height/(this.image.width/skillsSize))
            this.reflectionAccess = true
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

            this.x += this.velocity.x
            this.y += this.velocity.y

            

            if(this.x>canvas.current.width-skillsSize||this.x<skillsSize){
                this.velocity.x *= -1
                changeColorLine()
            }
            if(this.y>canvas.current.height-skillsSize||this.y<skillsSize){
                this.velocity.y *= -1
                changeColorLine()
            }
            if(distance(this.x, this.y, canvas.current.width/2, canvas.current.height/2)<=skillsSize+centerBallSize&&this.reflectionAccess){
                
                this.velocity.x *= -1
                this.velocity.y *= -1
                
                this.reflectionAccess = false
            }else if(distance(this.x, this.y, canvas.current.width/2, canvas.current.height/2)>skillsSize+centerBallSize){
                this.reflectionAccess = true
            }


            this.draw()
        }
    }

    let skills = []
    const init = ()=>{

        for (let i = 0; i < images.length; i++) {
            
            const x = randMinMax(0+skillsSize, canvas.current.width-skillsSize)
            const y = randMinMax(0+skillsSize, canvas.current.height-skillsSize)
            
            const image = images[i]
            
            skills.push(new Skills(x, y, image))        
            
        }
    }
        

    const animation = ()=>{
        const ctx = canvas.current.getContext("2d");
        requestRef.current = requestAnimationFrame(animation);
        ctx.clearRect(0, 0, canvas.current.width, canvas.current. height)
        for (let i = 0; i < skills.length; i++) {
            skills[i].update()    
        }
        // const ctx = canvas.current.getContext("2d")
            ctx.beginPath()
            ctx.arc(canvas.current.width/2, canvas.current.height/2, centerBallSize, 0, Math.PI*2, false)
            ctx.fill()
            ctx.drawImage(meImg, canvas.current.width/2-centerBallSize*1.3/2, canvas.current.height/2-(meImg.height/(meImg.width/(centerBallSize*1.3)))/2, centerBallSize*1.3, meImg.height/(meImg.width/(centerBallSize*1.3)))
        

    }


    useEffect(()=>{
        // requestRef.current = requestAnimationFrame(animation)
        init()
        animation()
    }, [])


    window.addEventListener("resize", ()=>{
        setCanvasSize(window.innerWidth/2-50)
    })


    return ( 
        <div className="canvasSkillsAnimation">
            <canvas
            ref={canvas}
            width={canvasSize}
            height={canvasSize}
            // width={window.innerWidth/2-50}
            // height={window.innerWidth/2-50}
            />
        </div>
     );
}
 
export default CanvasSkillsAnimation;