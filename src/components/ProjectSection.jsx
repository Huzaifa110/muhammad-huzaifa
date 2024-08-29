import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import projects from '../data/projects';

const ProjectSection = () => {
    const displayedProjects = projects.slice(0, 3);

    const controls = useAnimation();
    const ref = useRef(null);

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
            className=""
            id='projects'
        >
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-6">Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map(project => (
                        <Link to={`/project/${project.id}`} key={project.id}>
                            <motion.div
                                className="p-4 text-gray-900 bg-white rounded-3xl shadow-xl relative w-full max-w-lg mx-auto"
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-xl flex justify-center font-semibold mb-4">{project.title}</h3>
                                <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                            </motion.div>
                        </Link>
                    ))}
                </div>
                <div className="mt-6 flex justify-center">
                    <Link to="/projects">
                        <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 focus:outline-none">
                            View All Projects
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectSection;
