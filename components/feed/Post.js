import ThemeContext from "@/context/ThemeContext";
import {BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon,}from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled} from "@heroicons/react/solid"
import { useContext } from "react";

function Post(props) {
  const theme = useContext(ThemeContext);

  return (
    <div className={`bg-white my-7 border rounded-sm ${theme ? 'dark:bg-black dark:text-white dark:border-none':''}`}>
        {/* Header */}
        <div className="flex items-center p-5 ">
            <img src={props.userImg} className='rounded-full h-12 w-12 object-contain
            border p-1 mr-3 cursor-pointer' alt="user-img"/>
            <p className='flex-1 font-bold cursor-pointer'>{props.username}</p>
            <DotsHorizontalIcon className="h-5 cursor-pointer"/>
        </div>
        {/* Image */}
        <img src={props.img} className='object-cover w-full' alt="post-img"/>

        {/* Buttons */}
        <div className="flex justify-between px-4 pt-4">
        <div className='flex space-x-4'>
          <HeartIcon className="chatBtn"/>
          <ChatIcon className="chatBtn"/>
          <PaperAirplaneIcon className="chatBtn rotate-45"/>
        </div>
        <BookmarkIcon className="chatBtn" />
        </div>

        {/* Description */}
        <div>
          <p className='p-5 truncate'>
            <span className='font-bold mr-1'>{props.username} </span>{props.description}
          </p>
        </div>

        {/* Comments */}

        {/* Comment box */}
        <form className='flex items-center p-4 '>
          <EmojiHappyIcon className='h-7'/>
          <input type="text" className={`border-none flex-1 focus:ring-0
          outline-none  ${theme ? 'dark:bg-black':''}`}
           placeholder="Add a comment..."/>
          <button className=' font-semibold text-blue-400'>Post</button>
        </form>
    </div>
  )
}

export default Post;
