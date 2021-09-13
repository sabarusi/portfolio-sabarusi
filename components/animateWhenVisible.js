import { motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, {useEffect} from "react";

export default function AnimateWhenVisible({ children , variants, transition, style="flex justify-center sm:flex-1" }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
        controls.start(!inView ? "hidden": "visible");
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={transition}
        variants={variants}
        className={style}
      >
        {children}
      </motion.div>
    );
  }