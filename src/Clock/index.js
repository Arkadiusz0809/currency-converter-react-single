import { StyledClock } from "./styled.js";
import {useCurrentDate} from "./useCurrentDate.js";

const formatDate = (date) => date.toLocaleString("en-US", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long"
  })

export const Clock = () => {
  const date = useCurrentDate();

  return (
    <StyledClock>
      Today is
      {" "}
      {formatDate(date)}
    </StyledClock>
  )
}