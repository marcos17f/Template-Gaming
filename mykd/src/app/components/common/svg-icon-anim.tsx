'use client'
import { StaticImageData } from 'next/image';
import React,{useRef,useEffect} from 'react';
import Vivus from 'vivus';

const SvgIconCom = ({icon,id}:{icon:StaticImageData;id:string}) => {
  const svgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentSvgRef = svgRef.current;

    if (currentSvgRef) {
      const vivusInstance = new Vivus(currentSvgRef, {
        duration: 180,
        file: icon.src,
      });

      const handleMouseEnter = () => {
        vivusInstance.reset().play();
      };

      currentSvgRef.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        currentSvgRef.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, [icon.src]);
  return (
    <div className="svg-icon" id={id} ref={svgRef} />
  );
};

export default SvgIconCom;