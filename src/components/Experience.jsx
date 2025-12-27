import React, { useState, useEffect } from "react";
import JobItem from "./JobItem";
import { motion } from "framer-motion";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const jobData = [
    {
      role: "Senior Experience Engineer",
      company: "Publicis Sapient",
      experience: "Dec 2025 - Present",
      location: "Noida, Uttar Pradesh",
      description: (
        <>
          <section class="project">
            <h4 className="font-semibold">
              I have Recently Joined Publicis Sapient
            </h4>
            {/* <ul className="list-disc pl-7 text-sm font-normal">
              <li>
                Built and enhanced corporate vehicle reservation workflows for
                internal operations.
              </li>
              <li>
                Integrated transportation services with{" "}
                <strong>Drivania</strong> for seamless booking and status
                tracking.
              </li>
              <li>
                Implemented validations, SLA-aware flows, and role-based access
                for ops teams.
              </li>
            </ul> */}
          </section>
        </>
      ),
      logo: "",
      tech: [
        "React.Js",
        "Typescript",
        "Javscript",
        "Microfrontends",
        "Azure",
        "Redux Toolkit",
        "Zustand",
        "GraphQL",
        "CSS",
        "Tailwind CSS",
        "MUI",
      ],
      website: "https://www.publicissapient.com",
    },
    {
      role: "Frontend Developer",
      company: "Universal Weather and Aviation",
      experience: "June 2023 - Nov 2025",
      location: "Gurugram, Haryana",
      description: (
        <>
          <section class="project">
            <h4 className="font-semibold">ChefFour Vehicle Booking System</h4>
            <ul className="list-disc pl-7 text-sm font-normal">
              <li>
                Built and enhanced corporate vehicle reservation workflows for
                internal operations.
              </li>
              <li>
                Integrated transportation services with{" "}
                <strong>Drivania</strong> for seamless booking and status
                tracking.
              </li>
              <li>
                Implemented validations, SLA-aware flows, and role-based access
                for ops teams.
              </li>
            </ul>
          </section>

          <section class="project mt-3">
            <h4 className="font-semibold">Hotel Booking Module</h4>
            <ul className="list-disc pl-7 text-sm font-normal">
              <li>
                Designed and developed hotel reservation features with{" "}
                <strong>Sabre API</strong> integration.
              </li>
              <li>
                Enabled search, quote, hold, confirm, and cancellation flows for
                internal request handling.
              </li>
              <li>
                Added audit logs, alerts, and error handling for reliable
                operations.
              </li>
            </ul>
          </section>

          <section class="project mt-3">
            <h4 className="font-semibold">Ground Handling Services Tool</h4>
            <ul className="list-disc pl-7 text-sm font-normal">
              <li>
                Built modules to manage ground ops requests, vendor
                coordination, and fulfillment.
              </li>
              <li>
                Created dashboards for queue visibility, prioritization, and
                exceptions.
              </li>
              <li>
                Exportable reports for compliance and performance tracking.
              </li>
            </ul>
          </section>
        </>
      ),
      logo: "",
      tech: [
        "React.Js",
        "Typescript",
        "Javscript",
        "Microfrontends",
        "Azure",
        "Redux Toolkit",
        "Zustand",
        "GraphQL",
        "CSS",
        "Tailwind CSS",
        "MUI",
      ],
      website: "https://universalweather.com",
    },
    {
      role: "React.js Developer",
      company: "Orangemantra Pvt. Ltd.",
      experience: "Nov 2021 - May 2023",
      location: "Gurugram, Haryana",
      description: (
        <>
          <section class="project">
            <h4 className="font-semibold">1. E-Commerce Website</h4>
            <ul className="list-disc pl-7 text-sm font-normal">
              <li>
                Built <strong>product listing</strong>, <strong>cart</strong>,{" "}
                <strong>wishlist</strong>, and <strong>checkout</strong> flows
                with secure payment gateway integration (Razorpay/Stripe).
              </li>
              <li>
                Implemented{" "}
                <strong>role-based authentication &amp; authorization</strong>{" "}
                for admin, vendor, and customer panels.
              </li>
              <li>
                Developed a <strong>custom CMS</strong> to manage products,
                categories, promotions, and order reports.
              </li>
              <li>
                Optimized performance with <strong>lazy loading</strong> and{" "}
                <strong>code splitting</strong>, improving load times by ~30%.
              </li>
            </ul>
          </section>

          <section class="project mt-3">
            <h4 className="font-semibold">2. Doctor–Patient Portal</h4>
            <ul className="list-disc pl-7 text-sm font-normal">
              <li>
                Developed a secure <strong>appointment booking</strong> system
                with doctor availability and patient history.
              </li>
              <li>
                Added <strong>real-time chat</strong> and{" "}
                <strong>video consultation</strong> using WebSockets and
                third-party APIs.
              </li>
              <li>
                Implemented <strong>digital prescriptions</strong> and
                integrated payments for online consultations.
              </li>
              <li>
                Created <strong>role-based dashboards</strong> for doctors,
                patients, and clinic admins.
              </li>
            </ul>
          </section>

          <section class="project mt-3">
            <h4 className="font-semibold">3. Garbage Management Panel</h4>
            <ul className="list-disc pl-7 text-sm font-normal">
              <li>
                Designed a dashboard to track{" "}
                <strong>collection vehicles</strong>, <strong>routes</strong>,
                and <strong>schedules</strong>.
              </li>
              <li>
                Implemented <strong>real-time monitoring</strong> of collection
                status and complaint resolution.
              </li>
              <li>
                Built data visualizations with <strong>Apex Charts</strong> for
                trend analysis and resource optimization.
              </li>
              <li>
                Created admin modules for task assignment, worker performance
                tracking, and monthly reports.
              </li>
            </ul>
          </section>
        </>
      ),
      logo: "",
      tech: [
        "React.js",
        "Typescript",
        "Javascript",
        "Redux",
        "SCSS",
        "Tailwind CSS",
        "Material-UI",
        "Apex Charts",
        "Razor Pay",
        "WebSockets",
      ],
      website: "https://orangemantra.com",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpandedIndex(0); // Automatically open the first item after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div
      id="experience"
      className="min-h-screen flex flex-col px-6 items-center"
    >
      <motion.h1
        className="font-bold text-5xl md:text-7xl text-center mt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Professional Experience
      </motion.h1>

      <div className="relative mt-20 w-full md:w-2/4 flex flex-col gap-5">
        {/* Job Items */}
        {jobData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <JobItem
              item={item}
              isExpanded={expandedIndex === index}
              onToggle={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
