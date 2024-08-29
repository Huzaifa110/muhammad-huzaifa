import React, { useEffect, useRef } from 'react';
import { FaNodeJs, FaWordpress, FaReact, FaPython, FaJava, FaGit } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const certifications = [
    {
        title: "MERN Stack",
        organization: "WeboPedia",
        icon: <FaNodeJs className="text-5xl text-green-500" />,
    },
    {
        title: "Frontend Development",
        organization: "Meta",
        icon: <FaReact className="text-5xl text-blue-500" />,
    },
    {
        title: "Python for AI, Data Science, and Development",
        organization: "IBM",
        icon: <FaPython className="text-5xl text-blue-500" />,
    },
    {
        title: "WordPress Development",
        organization: "DigiSkills",
        icon: <FaWordpress className="text-5xl text-gray-700" />,
    },
    {
        title: "API Testing with Postman",
        organization: "Tigran Ter-Karapetyants",
        icon: <FaJava className="text-5xl text-red-500" />,
    },
    {
        title: "Version Control",
        organization: "Meta",
        icon: <FaGit className="text-5xl text-orange-500" />,
    },
];

const CertificationCard = ({ title, organization, icon }) => {
    return (
        <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex items-center mb-4">
                {icon}
                <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    <p className="text-gray-700 text-sm">{organization}</p>
                </div>
            </div>
        </motion.div>
    );
};

const CertificationsSection = () => {
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
            className="py-20"
            id='certifications'
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <CertificationCard
                            key={index}
                            title={cert.title}
                            organization={cert.organization}
                            icon={cert.icon}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default CertificationsSection;
