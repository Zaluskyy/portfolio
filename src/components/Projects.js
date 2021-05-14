import React, { useEffect, useState } from 'react';
import '../style/projects.css';

import githubImg from "../img/github.png"
import project1 from "../img/project1.png" 
import project2 from "../img/project2.png" 
import tszy from "../img/3.png" 

const pages = [
    {
        img: project1,
        domain: "https://jolly-shockley-3a2191.netlify.app/",
        title: "Jakieś kulki magiczne xd",
    },
    {
        img: project2,
        domain: "https://xenodochial-ride-393511.netlify.app/",
        title: "FloydG",
    },
    {
        img: tszy,
        domain: "https-393511.netlify.app/",
        title: "qrwa nie wiem xd",
    },
]

const Projects = () => {

    



    const [currentSlide, setCurrentSlide] = useState(0)

    const changeSlide = ()=>{
        setCurrentSlide(prevstate =>{
            if(prevstate>=pages.length-1) return prevstate = 0
            return prevstate+1
        })
    }
    // console.log(currentSlide, currentSlide+1, pages.length);
    
    
    useEffect(()=>{
        const sliderInterval = setInterval(() => {
        changeSlide()    
        }, 5000);
        return ()=> clearInterval(sliderInterval)
    }, [])


    const projectsSlide = pages.map((item, index) =>{
        

        
        if(index===currentSlide){
        return <a href={item.domain} target="_blank" key={index} ><img className="slide main" src={item.img}/><h3>{item.title}</h3></a>
        }
        else if(currentSlide<pages.length-1&&index===currentSlide+1||currentSlide===pages.length-1&&index==0){
            return <a href={item.domain} target="_blank" key={index} className="disabled"><img className="slide next" src={item.img}/></a>
        }
        else if(currentSlide>0&&index===currentSlide-1||currentSlide==0&&pages.length-1){
            return <a href={item.domain} target="_blank" key={index} className="disabled" ><img className="slide previous" src={item.img}/></a>
        }

    })



    return (
        <div className="projects">
            <div className="title">My projects</div>

            <div className="slider">
            {projectsSlide}
                {/* <a href={pages[currentSlide].domain} target="_blank" ><img width="640" src={pages[currentSlide].img}/></a> */}
                {/* <div>{currentSlide}</div> */}



            </div>

            <div className="githubImg">
                <a target="_blank" href="https://github.com/Zaluskyy"> <img src={githubImg} /></a>
            </div>
        </div>
    );
}
 
export default Projects;