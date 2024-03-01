import { useEffect, useState } from "react";
import {StyledClock} from "./styled.js"; 

const formatDate = (time) => 
    time.toLocaleString(undefined, {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "numeric",
        month: "long"
    })

export const Clock = () => {
    const [time, setTime] = useState(new Date());

      useEffect(() => {
        const intervalId = setInterval(() => {
          setTime(new Date());
        }, 1000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);

   return (
    <StyledClock>
        Dzisiaj jest 
        {" "}
        {formatDate(time)}
    </StyledClock>
   )
}