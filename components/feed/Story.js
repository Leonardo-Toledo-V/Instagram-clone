import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

function Story(props) {
  const theme = useContext(ThemeContext);
  return (
    <div className={`text-black ${theme ? 'dark:text-white':''}`}>
        <img className='itemHistories' src={props.img} alt="profile"/>
        <p className='text-xs w-14 truncate'>{props.username}</p>
    </div>
  )
}

export default Story;
