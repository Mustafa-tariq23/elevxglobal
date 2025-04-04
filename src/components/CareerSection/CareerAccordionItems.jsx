import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import CareerJobsDetail from './CareerJobsDetail';
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const CareerAccordionItems = ({ title, jobs }) => {
    const [openJobs, setOpenJobs] = useState({});
    const [fieldOpen, setFieldOpen] = useState(true);
    const toggleJob = (jobTitle) => {
        setOpenJobs((prevOpenJobs) => ({
            ...prevOpenJobs,
            [jobTitle]: !prevOpenJobs[jobTitle],
        }));
    };

    const fieldsOpen = () => {
        setFieldOpen(!fieldOpen);
    }

    return (
        <div className="border bg-[#15307c] text-white rounded-lg mb-2">
            <button onClick={fieldsOpen} className="w-full flex items-center justify-between px-4 py-2 text-lg font-medium">
                <span>{title}</span> {fieldOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>

            {
                fieldOpen ? (<></>) : (
                    <>
                        <div className="px-4 py-2 space-y-1 bg-white text-gray-500">
                            {jobs.length > 0 ? (
                                jobs.map((job, index) => (
                                    <div key={index} className="space-y-1">
                                        <div
                                            onClick={() => toggleJob(job.title)}
                                            className={`flex items-center justify-between p-2 cursor-pointer hover:bg-blue-100 rounded ${openJobs[job.title] ? 'bg-blue-200' : 'bg-white'
                                                }`}
                                        >
                                            <span>{job.title}</span>
                                            <div className="flex items-center">
                                                {openJobs[job.title] ? (
                                                    <FiMinus className="ml-2 text-xl" />
                                                ) : (
                                                    <FiPlus className="ml-2 text-xl" />
                                                )}
                                            </div>
                                        </div>

                                        {openJobs[job.title] && (
                                            <div className="overflow-hidden transition-all duration-300 ease-in-out">
                                                <CareerJobsDetail job={job} />
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No jobs available</p>
                            )}
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default CareerAccordionItems;
