import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "./ThemeContext";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, when: "beforeChildren" },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const leftColumnVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const rightColumnVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const leftItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 12 },
    },
  };

  const rightItemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 12 },
    },
  };

  const cardHover = {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.2 },
  };

  const iconAnimation = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <motion.section
      className={`py-12 md:py-16 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-indigo-50 to-white"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div className="relative mb-10 md:mb-16" variants={titleVariants}>
          <h2
            className={`text-2xl md:text-4xl font-bold text-center ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            About Me
          </h2>
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem", "@media (min-width: 640px)": { width: "6rem" } }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        <div
          className={`rounded-xl  p-4 sm:p-6 md:p-8 ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg- border border-gray-200"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Column - animates from left */}
            <motion.div
              variants={leftColumnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3
                className={`text-lg md:text-xl font-semibold mb-4 ${
                  darkMode ? "text-indigo-300" : "text-indigo-600"
                }`}
                variants={leftItemVariants}
              >
                Personal Details
              </motion.h3>

              <div
                className={`space-y-3 md:space-y-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {[
                  {
                    icon: (
                      <svg
                        className="w-5 h-5 text-indigo-500 dark:text-indigo-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    ),
                    label: "Full Name",
                    value: "Shivam Dubey",
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5 text-indigo-500 dark:text-indigo-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    ),
                    label: "Birth Details",
                    value: "7th September, 1999 at 4:40 AM",
                  },
                  // {
                  //   icon: (
                  //     <svg
                  //       className="w-5 h-5 text-indigo-500 dark:text-indigo-300"
                  //       fill="none"
                  //       stroke="currentColor"
                  //       viewBox="0 0 24 24"
                  //       xmlns="http://www.w3.org/2000/svg"
                  //     >
                  //       <path
                  //         strokeLinecap="round"
                  //         strokeLinejoin="round"
                  //         strokeWidth="2"
                  //         d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  //       ></path>
                  //     </svg>
                  //   ),
                  //   label: "Gotra",
                  //   value: "Bharadwaj",
                  // },
                  // {
                  //   icon: (
                  //     <svg
                  //       className="w-5 h-5 text-indigo-500 dark:text-indigo-300"
                  //       fill="none"
                  //       stroke="currentColor"
                  //       viewBox="0 0 24 24"
                  //       xmlns="http://www.w3.org/2000/svg"
                  //     >
                  //       <path
                  //         strokeLinecap="round"
                  //         strokeLinejoin="round"
                  //         strokeWidth="2"
                  //         d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  //       ></path>
                  //     </svg>
                  //   ),
                  //   label: "Age",
                  //   value: "25 years",
                  // },
                  // {
                  //   icon: (
                  //     <svg
                  //       className="w-5 h-5 text-indigo-500 dark:text-indigo-300"
                  //       fill="none"
                  //       stroke="currentColor"
                  //       viewBox="0 0 24 24"
                  //       xmlns="http://www.w3.org/2000/svg"
                  //     >
                  //       <path
                  //         strokeLinecap="round"
                  //         strokeLinejoin="round"
                  //         strokeWidth="2"
                  //         d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  //       ></path>
                  //     </svg>
                  //   ),
                  //   label: "Height",
                  //   value: "5'10\"",
                  // },
                  // {
                  //   icon: (
                  //     <svg
                  //       className="w-5 h-5 text-indigo-500 dark:text-indigo-300"
                  //       fill="none"
                  //       stroke="currentColor"
                  //       viewBox="0 0 24 24"
                  //       xmlns="http://www.w3.org/2000/svg"
                  //     >
                  //       <path
                  //         strokeLinecap="round"
                  //         strokeLinejoin="round"
                  //         strokeWidth="2"
                  //         d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  //       ></path>
                  //     </svg>
                  //   ),
                  //   label: "Complexion",
                  //   value: "Fair",
                  // },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center p-2 sm:p-3 rounded-lg border ${
                      darkMode
                        ? "border-indigo-700 bg-indigo-900/20"
                        : "border-indigo-200 bg-indigo-50/50"
                    } shadow-sm`}
                    variants={leftItemVariants}
                    whileHover={cardHover}
                  >
                    <motion.div
                      className={`mr-2 sm:mr-3 ${
                        darkMode ? "bg-indigo-800" : "bg-indigo-100"
                      } p-1.5 sm:p-2 rounded-full`}
                      variants={iconAnimation}
                      whileHover="hover"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <div
                        className={`text-xs uppercase font-semibold ${
                          darkMode ? "text-indigo-300" : "text-indigo-600"
                        }`}
                      >
                        {item.label}
                      </div>
                      <div className="font-medium text-sm sm:text-base">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

     
            <motion.div
              variants={rightColumnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3
                className={`text-lg md:text-xl font-semibold mb-4 ${
                  darkMode ? "text-indigo-300" : "text-indigo-600"
                }`}
                variants={rightItemVariants}
              >
                Education & Career
              </motion.h3>

              <div
                className={`space-y-3 md:space-y-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {[
                  {
                    icon: (
                      <svg
                        className="w-5 h-5 text-purple-500 dark:text-purple-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    ),
                    label: "Education",
                    value: "Bachelor of Computer Applications (BCA) - MCU  🎓 ",
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5 text-purple-500 dark:text-purple-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        ></path>
                      </svg>
                    ),
                    label: "Additional Qualification",
                    value: "Full Stack Development Course",
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5 text-purple-500 dark:text-purple-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    ),
                    label: "Profession",
                    value: "Software Engineer & Frontend Developer 💻 ",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center p-2 sm:p-3 rounded-lg border ${
                      darkMode
                        ? "border-purple-700 bg-purple-900/20"
                        : "border-purple-200 bg-purple-50/50"
                    } shadow-sm`}
                    variants={rightItemVariants}
                    whileHover={cardHover}
                  >
                    <motion.div
                      className={`mr-2 sm:mr-3 ${
                        darkMode ? "bg-purple-800" : "bg-purple-100"
                      } p-1.5 sm:p-2 rounded-full`}
                      variants={iconAnimation}
                      whileHover="hover"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <div
                        className={`text-xs uppercase font-semibold ${
                          darkMode ? "text-purple-300" : "text-purple-600"
                        }`}
                      >
                        {item.label}
                      </div>
                      <div className="font-medium text-sm sm:text-base">{item.value}</div>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className={`p-2 sm:p-3 rounded-lg border ${
                    darkMode
                      ? "border-purple-700 bg-purple-900/20"
                      : "border-purple-200 bg-purple-50/50"
                  } shadow-sm`}
                  variants={rightItemVariants}
                  whileHover={cardHover}
                >
                  <div className="flex items-center mb-2">
                    <motion.div
                      className={`mr-2 sm:mr-3 ${
                        darkMode ? "bg-purple-800" : "bg-purple-100"
                      } p-1.5 sm:p-2 rounded-full`}
                      variants={iconAnimation}
                      whileHover="hover"
                    >
                      <svg
                        className="w-5 h-5 text-purple-500 dark:text-purple-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        ></path>
                      </svg>
                    </motion.div>
                    <div
                      className={`text-xs uppercase font-semibold ${
                        darkMode ? "text-purple-300" : "text-purple-600"
                      }`}
                    >
                      Skills
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {[
                      "React",
                      "Next.js",
                      "JavaScript",
                      "TypeScript",
                      "Node.js",
                      "MongoDB",
                      "Express",
                      "Tailwind",
                 
                    ].map((skill, i) => (
                      <motion.span
                        key={i}
                        className={`px-2 sm:px-3 py-1 ${
                          darkMode
                            ? "bg-purple-800 text-purple-200"
                            : "bg-purple-100 text-purple-800"
                        } rounded-full text-xs sm:text-sm font-medium`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          transition: { delay: 0.1 + i * 0.05 },
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;