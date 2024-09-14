import { useState, useEffect } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isCount, setIsCount] = useState(false);
  // const start = ()=>{

  // }

  useEffect(() => {
    if (isCount) {
      var intervel = setInterval(() => {
        setTime((t) => t + 1);
      }, 100);
    }

    return () => {
      clearInterval(intervel);
    };
  }, [isCount]);

  const start = () => {
    setIsCount(true);
  };

  //   const start = () => {
  //     setInterval(() => {
  //       setTime((t) => t + 1);
  //     }, 100);
  //   };
  const reset = () => {
    setTime(0);
    setIsCount(false);
  };
  const pause = () => {
    setIsCount(!isCount);
  };

  return (
    <div style={{ color: "white" }}>
      <h1>{time}</h1>
      <button onClick={start}>start</button>
      <button onClick={pause}>pause</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default StopWatch;
