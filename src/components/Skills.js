import React from 'react';
import './Skills.css';

import cpp from '../cpp.png';
import tree from '../datastruct.png';
import db from '../db.png';
import lang from '../languages.png';
import oop from '../oop-icon.jpg';
import tdd from '../tdd.jpg';
import web from '../webDev.png';

const Skills = () => {
    const skills = [
        {
            icon: tree,
            name: "Data Structures and Algorithms",
            desc: "Understanding of basic data structures and algorithms. (Memory and Time complexity)",
        },
        {
            icon: web,
            name: "Javascript, HTML, CSS",
            desc: "For basic web development",
        },
        {
            icon: cpp,
            name: "C, C#, C++",
            desc: "These were amongst the first languages I learned and became familiar with. I learned about pointers and data management from these.",
        },
        {
            icon: oop,
            name: "Object-Oriented Programming (OOP)",
            desc: "Understanding of object-oriented programming. Worked with GUI's.",
        },
        {
            icon: db,
            name: "Databases (SQL)",
            desc: "Have worked with databases and have an understanding of safely injecting and deleting items from a database",
        },
        {
            icon: tdd,
            name: "Software Testing",
            desc: "Am familiar with Test-Driven Development wherein CI tests were implemented into a repository. Worked with teams to create a project. Familiar with Unit and Integration Tests.",
        },
        {
            icon: lang,
            name: "Other Programming Languages",
            desc: "Easily adapts to any framework, environment, and/or programming language. Languages known include: Ruby, Dart, Java, Python, etc. Is open to more languages.",
        }
    ]
    return (
        <div className="skills-container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => {
                    return(
                        <div className="skill-item" key={index}>
                            <img src={skill.icon} alt="Skill Icon" className="skill-icon" />
                            <h3 className="skill-name">{skill.name}</h3>
                            <p className="skill-description">{skill.desc}</p>
                        </div>
                    )
                })}
                
            </div>
        </div>
    );
}

export default Skills;
