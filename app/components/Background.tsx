import React from 'react'

const Background: React.FC = () => {
  return (
    <div
      className='flex pt-12 pb-12 justify-center'
      style={{
        pointerEvents: 'none',
        backgroundImage: 'url(/stake-banner 1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='flex mb-4'>
        <div className='flex flex-col items-center justify-center text-white text-6xl pt-24'>
          <img className="w-64" src="/cd-logo.png" alt="Smash or Trash" />
          <h2 className="w-full mt-6 text-center">Smash? Or Trash!</h2>
          <p className="w-full col-span-3 text-center font-bold text-mist mt-6 text-3xl lg:text-4xl">Leaderboard</p>
        </div>
      </div>
    </div>
  )
}

export default Background;