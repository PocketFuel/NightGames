import React from 'react'

const Background: React.FC = () => {
  return (
    <div
      className='flex  pt-12 justify-center'
      style={{ pointerEvents: 'none', backgroundColor: '#000000' }}
    >
      <div className='flex'>
        <div className='flex flex-col items-center justify-center text-white text-8xl'>
          <img className="w-64" src="/cd-logo.png" alt="Smash or Trash" />
          <h2 className="w-full mt-6">Smash? Or Trash?</h2>
          <p className="w-full col-span-3 text-center font-bold text-mist mt-6 text-3xl lg:text-4xl">Leaderboard</p>
        </div>
      </div>
    </div>
  )
}

export default Background;