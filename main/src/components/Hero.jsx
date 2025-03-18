import React, { useContext, useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ThemeContext } from "./ThemeContext";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  const controls = useAnimation();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bgX = useTransform(mouseX, [-500, 500], [-20, 20]);
  const bgY = useTransform(mouseY, [-500, 500], [-20, 20]);

  const imgX = useTransform(mouseX, [-500, 500], [-10, 10]);
  const imgY = useTransform(mouseY, [-500, 500], [-10, 10]);

  const handleMouseMove = (e) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const mouseXVal = e.clientX - windowWidth / 2;
    const mouseYVal = e.clientY - windowHeight / 2;

    mouseX.set(mouseXVal);
    mouseY.set(mouseYVal);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
    };

    sequence();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [controls]);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateY: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        when: "beforeChildren",
        duration: 0.8,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
        duration: 1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 1.2,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  const shapeStyles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    position: "absolute",
    filter: "blur(30px)",
    zIndex: 0,
    opacity: darkMode ? 0.3 : 0.6,
  };

  return (
    <section
      className={`relative py-20 overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900"
          : "bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-500"
      }`}
    >
      {/* Animated background elements */}
      <motion.div
        style={{
          ...shapeStyles,
          top: "20%",
          left: "10%",
          background: darkMode ? "#6366f1" : "#818cf8",
          x: bgX,
          y: bgY,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        style={{
          ...shapeStyles,
          top: "60%",
          right: "15%",
          background: darkMode ? "#8b5cf6" : "#a78bfa",
          x: bgX,
          y: bgY,
        }}
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      <motion.div
        style={{
          ...shapeStyles,
          top: "40%",
          right: "30%",
          background: darkMode ? "#d946ef" : "#e879f9",
          x: bgY,
          y: bgX,
        }}
        animate={{
          scale: [0.9, 1.4, 0.9],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />

      <motion.div
        className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="md:w-1/2 text-white mb-12 md:mb-0"
          variants={contentVariants}
        >
          <motion.div variants={textVariants} className="overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-flex flex-wrap">
              {/* Animated Text with letter staggering */}
              {"Hello, I'm ".split("").map((char, index) => (
                <motion.span
                  key={`h-${index}`}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <br />
              {"Shivam Dubey".split("").map((char, index) => (
                <motion.span
                  key={`n-${index}`}
                  variants={letterVariants}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>
          </motion.div>

          <motion.p
            variants={contentVariants}
            className="text-xl md:text-2xl mb-8 leading-relaxed text-indigo-100"
          >
            A passionate Software Engineer <br /> specialized in Full Stack
            Development
          </motion.p>

          <motion.div className="flex space-x-4">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg"
              onClick={scrollToContact}
            >
              <span className="flex items-center">
                Contact Me
                <motion.svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 3, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.5,
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </motion.svg>
              </span>
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full"
            >
              Portfolio
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-2/5 relative"
          variants={imageContainerVariants}
          animate={floatingAnimation}
        >
          <motion.div
            className="w-56 h-56 md:w-72 md:h-72 relative overflow-visible mx-auto"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            {/* Animated rings around profile image */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: `3px solid rgba(255,255,255,0.2)`,
                x: imgX,
                y: imgY,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: `2px dashed rgba(255,255,255,0.3)`,
                margin: "-15px",
                x: imgX,
                y: imgY,
              }}
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Image with parallax effect */}
            <motion.div
              className="w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
              style={{
                x: imgX,
                y: imgY,
                backgroundImage: `linear-gradient(45deg, ${
                  darkMode
                    ? "rgba(99, 102, 241, 0.4)"
                    : "rgba(129, 140, 248, 0.4)"
                }, ${
                  darkMode
                    ? "rgba(139, 92, 246, 0.4)"
                    : "rgba(167, 139, 250, 0.4)"
                })`,
              }}
            >
              <motion.img
                className="w-full h-full object-cover"
                src="/api/placeholder/400/400"
                alt="Shivam Dubey"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>

            {/* Animated dots */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-white/80"
                style={{
                  top: `${20 + i * 15}%`,
                  right: `-${10 + (i % 3) * 5}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        onClick={scrollToContact}
        style={{ cursor: "pointer" }}
      >
        <svg
          className="w-8 h-8 text-white/80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
