import React, { useRef } from 'react'
import { useAnimations } from '../../context/Animations';
import { useInView , motion} from 'framer-motion';

const GoogleReviews = () => {
  const {fadeInDownAnimation} =useAnimations();
  const refAnimation = useRef(null);
  const isInView = useInView(refAnimation, { once: true });

  return (
   
    <motion.div ref={refAnimation}
    initial="hidden"
    animate={isInView  ? "visible" : "hidden"}
    variants={fadeInDownAnimation} className="elfsight-app-0eeae9d9-9200-45bb-a24d-94eaf7acfec9" data-elfsight-app-lazy></motion.div>
  )
}

export default GoogleReviews
