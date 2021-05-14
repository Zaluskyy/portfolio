import React, {useState, useEffect, useRef} from 'react';
import '../style/canvasAnimation.css'

const CanAmimation = () => {
    const [canvasWidth, setCanvasWidth] = useState(window.innerWidth-10)
    const [canvasHeight, setCanvasHeight] = useState(window.innerHeight)

    const mouse = {
        x: undefined,
        y: undefined,
    }
    
    let mouseUndefined = true

    window.addEventListener("mousemove", (e)=>{
        mouse.x = e.clientX
        mouse.y = e.clientY
        mouseUndefined = false
    })

    const canvas = useRef(null);
    const requestRef = React.useRef()

    const randMinMax = (min, max, floor=false) =>{
        if(floor) return Math.floor(Math.random()*(max-min+1)+min);
        return Math.random()*(max-min)+min;
    }

    class Circle{
        constructor(x, y, radius, xVelocity, yVelocity, color, goRight, goBottom){
            this.x = x
            this.y = y
            this.radius = radius
            this.xVelocity = xVelocity
            this.yVelocity = yVelocity
            this.color = color
            this.goRight = goRight
            this.goBottom = goBottom

            this.maxVelocity = 4
            

            this.draw =()=>{
                const ctx = canvas.current.getContext("2d");
                
                ctx.beginPath()
                // ctx.fillStyle = "#FF0000";
                ctx.strokeStyle = this.color;
                // ctx.arc(200, 200, 200, 0, Math.PI*2, false)
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
                ctx.stroke()
            }

            this.update = ()=>{

                this.y = this.y + this.yVelocity
                
                if(this.goRight){
                    this.x = this.x + this.xVelocity
                }else{
                    this.x = this.x - this.xVelocity
                }

                if(this.x>window.innerWidth+this.radius*2){
                    this.x = 0-this.radius;
                }else if(this.x<0-this.radius*2){
                    this.x = window.innerWidth+this.radius
                }

                if(this.y>window.innerHeight){
                    this.y = 0+this.radius
                }

                if(mouse.x>window.innerWidth*.75) this.goRight = false
                else if(mouse.x<window.innerWidth*.25) this.goRight = true
                else this.goRight = goRight

                if(mouseUndefined==false){
                this.xVelocity = xVelocity*((mouse.y<20?20:mouse.y)/window.innerHeight)*this.maxVelocity
                this.yVelocity = yVelocity*((mouse.y<20?20:mouse.y)/window.innerHeight)*this.maxVelocity
                }
                

                this.draw()
            }
        }
    }
    const circles = []
    for(let i=0; i<20; i++){
        const radius = 5
        const x = randMinMax(-100, window.innerWidth+100)
        const y = randMinMax(0+radius, window.innerHeight-radius)
        
        const xVelocity = randMinMax(1, 2)
        const yVelocity = randMinMax(1, 2)
        const color = randMinMax(0, 2, true)
        const colors = [
            "white",
            "whitesmoke",
            "wheat",
        ]
        const goRight = !!randMinMax(0, 1, true)
        const goBottom = !!randMinMax(0, 1, true)
        
        circles.push(new Circle(x, y, radius, xVelocity, yVelocity, colors[color], goRight, goBottom))
        }



    const animation = () =>{
        const ctx = canvas.current.getContext("2d");
        requestRef.current = requestAnimationFrame(animation);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        for(let i=0; i<circles.length; i++){
            circles[i].update()
        }
    }


    useEffect(()=>{
            // requestRef.current = requestAnimationFrame(animation);            
            animation()
    }, [])

    

    const clouds = []

    for(let i=0; i<40; i++){
        clouds.push(<div key={i} style={{left:`${i*50-50}px`}} ></div>)
    }

    window.addEventListener("resize", ()=>{
        setCanvasWidth(window.innerWidth-10)
        setCanvasHeight(window.innerHeight)
    })

    return (
        <div className="canvasAnimation">
            <canvas
                ref={canvas}
                width={canvasWidth}
                height={canvasHeight}
            />
            <div className="clouds">
                {clouds}
            </div>
        </div>
    );
}
 
export default CanAmimation;