import React from 'react'
import Header from '../components/Header'

function Home() {
  return (
    <div className='home min-h-screen '>
      <Header />
      <div className='flex items-center flex-col md:flex-row gap-6 justify-around  md:mt-[100px] p-[35px]'>
        <div className='w-[300px] text-center md:text-start'>
          <h1 className='text-white uppercase'>So, you want to travel to</h1>
          <h1 className='text-[70px] tracking-widest uppercase font-bold text-white mb-[30px]'>Space</h1>
          <p className='text-white'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, 
            and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <div className='bg-white flex items-center justify-center p-[20px] rounded-full w-[300px] h-[300px] text-center'>
            <h3 className='text-[24px] uppercase font-bold'>Explore</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
