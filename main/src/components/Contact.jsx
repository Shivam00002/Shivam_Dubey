import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "./ThemeContext";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const formRef = useRef(null);

  const formItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 70,
        damping: 10,
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(79, 70, 229, 0.4)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const inputVariants = {
    rest: {
      scale: 1,
      borderColor: darkMode ? "#4B5563" : "#D1D5DB",
    },
    focus: {
      scale: 1.01,
      borderColor: "#6366F1",
      boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.3)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      id="contact"
      className={`py-16 md:py-20 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-indigo-50 to-gray-100"
      } relative`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      ref={formRef}
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M0,100 C30,90 70,90 100,100"
            stroke={
              darkMode ? "rgba(99, 102, 241, 0.1)" : "rgba(99, 102, 241, 0.2)"
            }
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,85 C20,95 50,95 100,80"
            stroke={
              darkMode ? "rgba(139, 92, 246, 0.1)" : "rgba(139, 92, 246, 0.2)"
            }
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="mb-10 md:mb-16 relative"
          variants={titleVariants}
        >
          <motion.h2
            className={`text-3xl md:text-4xl font-bold text-center ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
            initial={{ width: 0 }}
            whileInView={{
              width: "4rem",
              "@media (min-width: 640px)": { width: "6rem" },
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          className={`max-w-2xl mx-auto rounded-lg shadow-xl overflow-hidden ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : " border border-gray-200"
          }`}
          variants={cardVariants}
        >
          <div className="relative h-12 sm:h-16">
            <div
              className={`absolute w-full h-full ${
                darkMode
                  ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600"
                  : "bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
              }`}
            >
              <svg
                className="absolute bottom-0 w-full h-5"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,0 C30,10 70,10 100,0 L100,10 L0,10 Z"
                  fill={darkMode ? "#1F2937" : "#FFFFFF"}
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1 }}
                />
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h3 className="text-lg sm:text-xl font-semibold">Get In Touch</h3>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <motion.div custom={0} variants={formItemVariants}>
                  <label
                    className={`block mb-1 sm:mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>
                  <motion.input
                    type="text"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode
                        ? "bg-gray-700 text-white border-gray-600"
                        : "bg-white text-gray-800 border-gray-300"
                    }`}
                    placeholder="Your Name"
                    initial="rest"
                    whileFocus="focus"
                    animate="rest"
                    variants={inputVariants}
                  />
                </motion.div>
                <motion.div custom={1} variants={formItemVariants}>
                  <label
                    className={`block mb-1 sm:mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <motion.input
                    type="email"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode
                        ? "bg-gray-700 text-white border-gray-600"
                        : "bg-white text-gray-800 border-gray-300"
                    }`}
                    placeholder="Your Email"
                    initial="rest"
                    whileFocus="focus"
                    animate="rest"
                    variants={inputVariants}
                  />
                </motion.div>
              </div>

              <motion.div
                className="mb-6"
                custom={2}
                variants={formItemVariants}
              >
                <label
                  className={`block mb-1 sm:mb-2 text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <motion.textarea
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24 sm:h-32 resize-none ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-800 border-gray-300"
                  }`}
                  placeholder="Your Message"
                  initial="rest"
                  whileFocus="focus"
                  animate="rest"
                  variants={inputVariants}
                />
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <button
                  type="submit"
                  className={`w-full text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md ${
                    darkMode ? "bg-indigo-600" : "bg-indigo-600"
                  } transition-colors duration-300 flex items-center justify-center`}
                >
                  <span>Send Message</span>
                  <motion.svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 1.5,
                      repeatDelay: 1,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </motion.svg>
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: (
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              ),
              title: "Email",
              value: "dubey02shiv@gmail.com",
            },
            {
              icon: (
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              ),
              title: "Phone",
              value: "+91 9752923102",
            },
            {
              icon: (
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              ),
              title: "Location",
              value: "Jabalpur, India",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center px-3 py-2 sm:px-4 sm:py-3 rounded-lg ${
                darkMode
                  ? "bg-gray-800/50 border border-gray-700"
                  : "bg-white/90 border border-gray-200 shadow-md"
              }`}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className={`p-1.5 sm:p-2 mr-2 sm:mr-3 rounded-full ${
                  darkMode
                    ? "bg-indigo-700/30 text-indigo-300"
                    : "bg-indigo-100 text-indigo-600"
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.icon}
              </motion.div>
              <div>
                <div
                  className={`text-xs uppercase font-semibold ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.title}
                </div>
                <div
                  className={`text-sm sm:text-base font-medium ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.value}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
