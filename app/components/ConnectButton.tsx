import React from 'react'
import './ConnectButton.css'
export interface ConnectButtonProps {
  connected: boolean
  publicKey?: string
  onConnect: () => Promise<void>
  onDisconnect: () => Promise<void>
}
const ConnectButton: React.FC<ConnectButtonProps> = ({
  connected,
  onConnect,
  onDisconnect,
  publicKey,
}) => {
  const [connecting, setConnecting] = React.useState(false)
  const [hovering, setHovering] = React.useState(false)
  return (
    <button
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={async () => {
        if (connecting) return
        if (connected) {
          setConnecting(true)
          await onDisconnect()
          setConnecting(false)
        } else {
          setConnecting(true)
          await onConnect()
          setConnecting(false)
        }
      }}
      className=' relative overflow-hidden bg-black text-lg uppercase text-black font-bold w-[180px] h-[50px] rounded-lg glow-effect hover:scale-110 transition-transform duration-250'
    >
      <span className='absolute inset-0 flex items-center justify-center z-30 text-lg uppercase font-bold'>
        {hovering && connected ? 'Disconnect' : connected ? publicKey?.substring(0, 10) : 'Connect'}
      </span>
      <div className='absolute inset-0 bg-black stars-bg animate-move-stars z-0'></div>
    </button>
  )
}

export default ConnectButton
