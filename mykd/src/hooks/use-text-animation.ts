'use client'
import React,{useEffect} from "react";

const useTextAnimation = (isShow:boolean) => {
  useEffect(() => {
    if(isShow){
      const animateText = (element:any) => {
        const text = element.innerText;
        const wait = parseInt(element.getAttribute('data-wait')) || 0;
        const speed = parseInt(element.getAttribute('data-speed')) || 4;
        const animationDelay = speed / 100;
        
        element.innerHTML = "<em>321...</em>";
        element.classList.add("ready");
        
        const characters = text.split("");
        element.innerHTML = ""; // Clear existing content
        
        setTimeout(() => {
          characters.forEach((char:string, index:number) => {
            const charElement = document.createElement("span");
            charElement.textContent = char;
            charElement.style.animationDelay = (index * animationDelay) + "s";
            element.appendChild(charElement);
          });
        }, wait);
      };
      
      const textElements = document.querySelectorAll(".tg__animate-text");
      textElements.forEach(animateText);
  
      const handleWindowResize = () => {
        const isMobile = window.innerWidth < 768;
        const listItems = document.querySelectorAll(".roadMap__list li");
        
        listItems.forEach(item => {
          if (isMobile) {
            item.classList.add('mobileView');
            item.classList.remove('tg__animate-text');
          } else {
            item.classList.remove('mobileView');
            item.classList.add('tg__animate-text');
          }
        });
      };
      
      handleWindowResize(); // Call the function initially
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  }, [isShow]);

  return null;
}

export default useTextAnimation;