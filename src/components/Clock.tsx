import React, { useEffect, useState } from "react";

export default function Clock(_props: any) {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <p className="text-center font-semibold tracking-wide leading-relaxed uppercase">
        <span className={" font-bold text-9xl md:text-10xl text-gray-900"}>
          {time.getHours()}
        </span>
        <span className={"md:text-9xl animate-pulse"}>: </span>
        <span className={"text-8xl md:text-9xl text-gray-700 text-opacity-75"}>
          {time.getMinutes()}
        </span>
      </p>
    </div>
  );
}
