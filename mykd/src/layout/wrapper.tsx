"use client";
import React, { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import BackToTopCom from "@/app/components/common/back-to-top-com";
import { ToastContainer } from "react-toastify";
import AnimateMouse from "@/app/components/common/animated-mouse";
import ContextProvider from "@/context/app-context";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

type IProps = {
  children: React.ReactNode;
  bodyCls?: string;
}

const Wrapper = ({ children,bodyCls }:IProps) => {
  useEffect(() => {
    animationCreate();
  }, []);
  useEffect(() => {
    if(bodyCls){
      document.body.classList.add(bodyCls)
    }
    return () => {
      if(bodyCls){
        document.body.classList.remove(bodyCls)
      }
    }
  },[])
  return (
    <ContextProvider>
     <AnimateMouse/>
      {children} 
      <BackToTopCom />
      <ToastContainer />
    </ContextProvider>
  );
};

export default Wrapper;
