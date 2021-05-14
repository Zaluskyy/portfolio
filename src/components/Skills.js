import React from 'react';
import '../style/skills.css'

import CanvasSkillsAnimation from './CanvasSkillsAnimation';

const Skills = () => {
    return (
        <div className="skills">
            <div className="aboutSkills">
                <div className="title">Skills</div>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</div>
            </div>
            <CanvasSkillsAnimation/>
        </div>
    );
}
 
export default Skills;