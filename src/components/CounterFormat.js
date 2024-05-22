"use client"
import React,{useState,useEffect } from 'react'

const CountTo = ({
  from = 0,
  to = 0,
  speed = 1000,
  refreshInterval = 100,
  decimals = 0,
  formatter = (value, settings) => value.toFixed(settings.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ","),
  onUpdate = null,
  onComplete = null
}) => {
  const [value, setValue] = useState(from);
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    const loops = Math.ceil(speed / refreshInterval);
    const increment = (to - from) / loops;

    const updateTimer = () => {
      setValue(prevValue => {
        const newValue = prevValue + increment;
        if (onUpdate) onUpdate(newValue);
        return newValue;
      });
      setLoopCount(prevCount => prevCount + 1);
    };

    const interval = setInterval(() => {
      if (loopCount >= loops) {
        clearInterval(interval);
        setValue(to);
        if (onComplete) onComplete(to);
      } else {
        updateTimer();
      }
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [from, to, speed, refreshInterval, onUpdate, onComplete, loopCount]);

  return (
    <span className="inline-block font-monsterratB text-fs24 lg:text-fs36 text-primaryDark">{formatter(value, { from, to, speed, refreshInterval, decimals })}</span>
  );
};

export default CountTo;