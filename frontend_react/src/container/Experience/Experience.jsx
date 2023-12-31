import "./Experience.scss";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import {Tooltip} from 'react-tooltip'

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Experience</h2>
      <motion.div className="app__skills-exp">
        {experiences?.works?.map((work) => (
          <>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-exp-work"
              data-tip
              data-for={work.name}
              key={work.name}
            >
              <h4 className="bold-text"> {work.name}</h4>
              <p className="p-text"> {work.company} </p>
            </motion.div>
            <Tooltip
              id={work.name}
              effect="solid"
              arrowColor="#fff"
              className="skills-tooltip"
            >
              {work.desc}
            </Tooltip>
          </>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Experience, "experience");
