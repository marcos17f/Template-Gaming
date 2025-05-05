'use client'
import React from "react";
import dynamic from 'next/dynamic'
import { useTimer } from "react-timer-hook";

const CountdownTimer = ({expiryTimestamp}:{expiryTimestamp:Date}) => {
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });
  return (
    <>
      <div className="time-count day">
        <span>{days}</span>Day
      </div>
      <div className="time-count hour">
        <span>{hours}</span>hour
      </div>
      <div className="time-count min">
        <span>{minutes}</span>min
      </div>
      <div className="time-count sec">
        <span suppressHydrationWarning={true}>{seconds}</span>sec
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(CountdownTimer), {
  ssr: false
})
