import MiniProfile from "@/components/MiniProfile"
import Posts from "@/components/Posts"
import Stories from "@/components/Stories"
import Suggestions from "@/components/Suggestions"

function Feed() {
  return (
    <main className='mx-auto grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
    xl:grid-cols-3 xl:max-w-6xl'>
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
            <MiniProfile/>
            {/* Suggestions */}
            <Suggestions/>
            </div>
        </section>

    </main>
  )
}

export default Feed
