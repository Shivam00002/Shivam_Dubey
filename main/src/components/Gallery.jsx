import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "./ThemeContext";

const Gallery = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/tiger_shroff_0.png?size=690:388",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1XGSTRPWHHewEBulTKZ98oBcxuvBQll5tUA&s",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://wallpapers.com/images/hd/bollywood-hero-varun-dhawan-e6jmack2h74liho1.jpg",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://i.pinimg.com/originals/4f/0f/50/4f0f50f7637c7785441267c51adf03f8.jpg",
      alt: "Image 4",
    },
    {
      id: 5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVKzGc-yxpo_fGrZ-NUKeb1RJCPaW_rV5cw&s",
      alt: "Image 5",
    },
    {
      id: 6,
      src: "https://rukminim2.flixcart.com/image/850/1000/ky0g58w0/poster/1/x/i/small-suriya-actor-handsome-hero-india-rajinikanth-superstar-original-imagac5bnzgdus7v.jpeg?q=90&crop=false",
      alt: "Image 6",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const getItemVariants = (index) => {
    if (index % 3 === 0) {
      return {
        hidden: { x: -50, y: 50, opacity: 0 },
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 15,
          },
        },
      };
    } else if (index % 3 === 1) {
      return {
        hidden: { y: 70, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 70,
            damping: 12,
          },
        },
      };
    } else {
      return {
        hidden: { x: 50, y: 50, opacity: 0 },
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 15,
          },
        },
      };
    }
  };

  const imageHover = {
    rest: {
      scale: 1,
      boxShadow: darkMode
        ? "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4)"
        : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      scale: 1.05,
      boxShadow: darkMode
        ? "0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.6)"
        : "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
      },
    },
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.section
      className={`py-12 sm:py-16 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800"
          : "bg-gradient-to-br from-indigo-50 via-white to-purple-50"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="relative mb-10 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2
            className={`text-2xl sm:text-4xl font-bold text-center ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <motion.span
              className="inline-block"
              animate={{
                textShadow: darkMode
                  ? [
                      "0 0 0px rgba(129, 140, 248, 0)",
                      "0 0 10px rgba(129, 140, 248, 0.5)",
                      "0 0 0px rgba(129, 140, 248, 0)",
                    ]
                  : [
                      "0 0 0px rgba(79, 70, 229, 0)",
                      "0 0 10px rgba(79, 70, 229, 0.3)",
                      "0 0 0px rgba(79, 70, 229, 0)",
                    ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Gallery
            </motion.span>
          </h2>
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
            initial={{ width: 0 }}
            whileInView={{
              width: "4rem",
              "@media (min-width: 640px)": { width: "6rem" },
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className={`overflow-hidden rounded-xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg cursor-pointer`}
              variants={getItemVariants(index)}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImage(image)}
            >
              <motion.div className="relative group" variants={imageHover}>
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <p className="text-white font-medium text-center text-sm sm:text-base">
                    {image.alt}
                  </p>
                </motion.div>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                variants={modalVariants}
                className="relative max-w-4xl max-h-screen bg-transparent rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[80vh] max-w-full rounded-xl shadow-2xl"
                />
                <motion.button
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </motion.button>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <motion.div
                    className="inline-block bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-black shadow-lg text-sm sm:text-base"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedImage.alt}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Gallery;
