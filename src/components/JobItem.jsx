import React from 'react';
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Chip = ({ text }) => {
    return (
        <div className='rounded-full bg-[#2c3599] flex items-center px-5 py-2 inline'>
            <p className='text-sm'>{text}</p>
        </div>
    );
};

const JobItem = ({ item, isExpanded, onToggle }) => {
    return (
        <div>
            <div
                className='bg-purple-800 text-white cursor-pointer p-4 px-6 rounded'
                onClick={onToggle}
            >
                <div className='flex items-center justify-between'>
                    <p className='font-bold'>{item.role} @{item.company}</p>
                    <div className='flex items-center gap-4'>
                        <p className='font-bold'>{item.experience}</p>
                        {isExpanded ? <TbMinus /> : <GoPlus />}
                    </div>
                </div>
            </div>

            {/* Expandable Section with Framer Motion */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isExpanded ? 1 : 0,
                    height: isExpanded ? 'auto' : 0,
                    transition: { type: 'spring', stiffness: 300, damping: 30 }
                }}
                className='overflow-hidden'
            >
                <div className='bg-[#241D41] mt-2 p-6 px-6'>
                    <div className='flex items-center gap-4'>
                        <p className='flex items-center gap-1 text-gray-300 font-semibold'>
                            <FaLocationDot size={18} /> {item.location}
                        </p>
                        <p className='flex items-center gap-1 text-gray-300 font-semibold'>
                            <FaExternalLinkSquareAlt size={18} /> {item.website}
                        </p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <p className='w-full text-white'>
                            {item.description}
                        </p>
                        {item?.logo && <img
                            className='w-1/5 h-10'
                            src={item.logo}
                            alt='Company Logo'
                        />}
                    </div>
                    <div className='flex items-center gap-2 mt-4'>
                        {item?.tech.map((tech, i) => (
                            <Chip key={i} text={tech} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default JobItem;
