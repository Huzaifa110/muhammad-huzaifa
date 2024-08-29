import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import image from '../assets/images/my_img.png';
import { motion, useAnimation } from 'framer-motion';

const HeroSection = ({ isNavbarOpen }) => {
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
            className="mt-10 lg:mb-20 mb-2"
        >
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full lg:w-2/3 max-w-5xl mb-8 sm:mb-4 lg:mb-0 lg:mr-12 lg:ml-4">
                    <h1 className="text-3xl sm:text-2xl lg:text-5xl xl:text-5xl sm:mx-6 mb-8 lg:mb-12 mx-4 font-bold leading-tight">
                        I{' '}
                        {!isNavbarOpen && (
                            <span>
                                <Typewriter
                                    words={[
                                        'am Muhammad Huzaifa.',
                                        'am a Software Engineer.',
                                        'build MERN apps.',
                                        'build Django apps.',
                                        'do ML projects.',
                                        'make Power BI dashboards.',
                                        'test software applications.',
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        )}
                    </h1>
                    <p className="text-lg sm:text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-12 text-justify mx-4 sm:mx-6 lg:mx-8 leading-relaxed">
                        An industrious and highly motivated Computer Engineer, driven to establish a robust presence in the modern professional sphere through the relentless pursuit of excellence in Software Development and Testing, with the ultimate aim of fostering a bright and prosperous career. Demonstrating a keen focus on excellence in Software Development and Testing, my goal is to contribute my skills and drive towards the realization of a thriving and impactful professional journey.
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6 mb-8 lg:mb-12 mx-4 px-4">
                        <a
                            href='https://drive.google.com/uc?export=download&id=1qJKXRvJ7oBWicqqWcLNw9fS6r8wbN3Qw'
                            download
                            target='_blank'
                            className="bg-gray-700 text-white hover:bg-gray-500 py-2 px-6 rounded-full text-lg lg:m-5 font-semibold transition duration-300 ease-in-out whitespace-nowrap sm:w-auto text-center"
                        >
                            Download Resume
                        </a>
                        <div className="flex flex-col sm:flex-row flex-wrap items-center space-y-4 sm:space-y-0 sm:space-x-6 justify-center w-full sm:w-auto">
                            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-6 w-full sm:w-auto">
                                <div className="flex flex-col items-center sm:flex-row justify-center space-x-2 sm:space-x-4">
                                    <FaPhone className="text-blue-700 text-2xl" />
                                    <a href="tel:+923111244967" className="text-lg whitespace-nowrap p-1">+92 311 1244967</a>
                                </div>
                                <div className="flex flex-col items-center sm:flex-row justify-center space-x-2 sm:space-x-4">
                                    <FaEnvelope className="text-blue-700 text-2xl m-2" />
                                    <a href="mailto:huzaifazafar750@gmail.com" className="text-lg p-1">huzaifazafar750@gmail.com</a>
                                </div>
                                <div className="flex flex-col items-center sm:flex-row justify-center space-x-2 sm:space-x-4">
                                    <FaMapMarkerAlt className="text-blue-700 text-2xl m-2" />
                                    <span className="text-lg whitespace-nowrap p-1">Karachi, 75160</span>
                                </div>
                            </div>
                            <div className="flex justify-center space-x-4 mt-4 sm:mt-0">
                                <a href="https://www.linkedin.com/in/muhammad-huzaifa-b698a9238" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-3xl">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/Huzaifa110" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-3xl">
                                    <FaGithub />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100009237674045" target="_blank" rel="noopener noreferrer" className="text-blue-800 text-3xl">
                                    <FaFacebook />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div
                    className="w-full lg:w-1/3 lg:justify-end lg:ml-4 mb-8 lg:mb-0 hidden lg:block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{ border: 'none' }}
                >
                    <img
                        src={image}
                        alt="My Image"
                        className="w-full rounded-lg shadow-xl"
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                        }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HeroSection;
