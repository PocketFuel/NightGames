import React from 'react'

const Background: React.FC = () => {
  return (
    <div
      className='flex  pt-12 justify-center'
      style={{ pointerEvents: 'none', backgroundColor: '#000000' }}
    >
      <div className='flex'>
        <div className='text-white' style={{ fontSize: '8em', fontWeight: 800 }}>
          Smash/Trash
          <p className="w-full col-span-3 text-center font-bold text-mist mt-3 mb-6 text-6xl">Leaderboard</p>
        </div>
      </div>
    </div>
  )
}

export default Background;