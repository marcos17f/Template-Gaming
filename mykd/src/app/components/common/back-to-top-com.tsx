"use client";
import BackToTop from "@/lib/back-to-top";
import React, { useEffect } from "react";

function BackToTopCom() {
  useEffect(() => {
    BackToTop(".scroll__top");
  }, []);
  return (
    <button className="scroll__top scroll-to-target" data-target="html">
      <i className="flaticon-right-arrow"></i>
    </button>
  );
}

export default BackToTopCom;
