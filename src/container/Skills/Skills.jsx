import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';
import skills from "./data.json"
import experiences from "./experiences.json"



const Skills = () => {


  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.id}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">

                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={experience.name}

                >
                  <h4 className="bold-text">{experience.name}</h4>
                  <p className="p-text">{experience.company}</p>
                </motion.div>
                <ReactTooltip
                  id={experience.name}
                  effect="solid"
                  arrowColor="#fff"
                  className="skills-tooltip"
                >
                  {experience.desc}
                </ReactTooltip>


              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
