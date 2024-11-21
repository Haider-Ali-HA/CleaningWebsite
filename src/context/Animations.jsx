import { createContext, useContext } from "react";

const AnimationsContext = createContext();

const AnimationsProvider = ({ children }) => {
  const fadeInLeftAnimation = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const fadeInRightAnimation = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };

  // framer motion animation
  const charactorVariant = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  return (
    <AnimationsContext.Provider value={{
        fadeInLeftAnimation,
        fadeInRightAnimation,
        fadeInUpAnimation,
        charactorVariant,
    }}>
      {children}
    </AnimationsContext.Provider>
  );
};

const useAnimations = () => {
  return useContext(AnimationsContext);
};

export { AnimationsProvider, useAnimations };
