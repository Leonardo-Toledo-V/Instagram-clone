import Header from '@/components/feed/Header'
import Head from 'next/head'
import Feed from '../components/Feed'

function feed() {
    return (
        <div className='bg-gray-50 h-screen overflow-y-scroll
         scrollbar-hide '>
          <Head>
            <title>Instagram</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/instagram.ico" />
          </Head>
          {/* Header */}
          <Header></Header>
          {/* Feed */}
          <Feed/>
          {/* Modal */}
        </div>
      )
}

export default feed;
