import MiniProfile from "@/components/feed/MiniProfile"
import Posts from "@/components/feed/Posts"
import Stories from "@/components/feed/Stories"
import Suggestions from "@/components/feed/Suggestions"
import ThemeContext from "@/context/ThemeContext";
import Cookies from "js-cookie";
import { useState, useEffect, useContext } from "react";

function Feed() {

  const [cookie, setCookie] = useState("");
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const tokenUsername = Cookies.get("tokenUsername");
    setCookie(tokenUsername);
  }, []);

  return (
    <main className={`mx-auto grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
    xl:grid-cols-3 xl:max-w-6xl ${theme ? 'dark:bg-black': ''}`}>
        {/* Section */}
        <section className='col-span-2'>
             {/* Stories */}
             <Stories/>
             <Posts/>
             {/* Posts */}
        </section>
        {/* Section */}
        <section className='hidden xl:inline-grid md:col-span-1'>
            {/* Mini profile */}
            <div className='fixed top-20'>
            <MiniProfile username={cookie}/>
            {/* Suggestions */}
            <Suggestions/>
            </div>
        </section>
    </main>
  )
}

export default Feed