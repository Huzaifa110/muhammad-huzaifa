import React, { useEffect, useRef } from 'react';
import { FaCalendar, FaLocationArrow } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const workExperienceData = [
    {
        number: 1,
        title: 'Web Developer Intern',
        company: 'CodSoft',
        dates: 'Sep, 23 - Oct, 23',
        description: 'Various development tasks from basic frontend tasks to complex MERN stack tasks were accomplished and the internship was completed successfully.',
        stack: 'HTML, CSS, JavaScript, React.js, MERN',
        link: 'https://www.codsoft.in/',
        shortname: 'CodSoft'
    },
    {
        number: 2,
        title: 'Web Developer Intern',
        company: 'Neuro Computation Lab, NCAI, NEDUET',
        dates: 'Sep, 22 - Oct, 22',
        description: 'Various frontend tasks were accomplished using React.js and APIs were built using GoLang, and the internship was completed successfully.',
        stack: 'HTML, CSS, JavaScript, React.js, GoLang',
        link: 'https://nclab.neduet.edu.pk/',
        shortname: 'NCL'
    },
];

const WorkExperience = () => {
    const ref = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start('visible');
                } else {
                    controls.start('hidden');
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0, transition: { duration: 1 } }
            }}
            className="py-12"
            id='experience'
        >
            <div className="px-4">
                <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-10">Work Experience</h1>
                <div className="space-y-8">
                    {workExperienceData.map((experience) => (
                        <div className="flex mb-8 items-start" key={experience.number}>
                            <div className="w-14 h-14 bg-gray-700 rounded-full flex justify-center items-center mr-4 flex-shrink-0">
                                <span className="text-white text-lg">{experience.number}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl sm:text-2xl font-semibold">{experience.title}</h3>
                                <span className="flex items-center">
                                    <FaLocationArrow className="text-blue-500 mx-1 text-lg sm:text-xl" />
                                    <p className="text-gray-400 text-lg sm:text-xl">{experience.company}</p>
                                </span>
                                <span className="flex items-center">
                                    <FaCalendar className="text-blue-500 mx-1 text-lg sm:text-xl" />
                                    <p className="text-gray-400 text-md sm:text-lg">{experience.dates}</p>
                                </span>
                                <p className="mt-2 text-md sm:text-lg">{experience.description}</p>
                                <p className="text-sm sm:text-md">Stack: {experience.stack}</p>
                                <div className='mt-5'>
                                    <a href={experience.link} target='_blank' rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-lg mt-4 text-sm sm:text-base">
                                        Visit {experience.shortname}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> 
            </div>
        </motion.div>
    );
};

export default WorkExperience;
