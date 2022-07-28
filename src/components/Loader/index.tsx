import { useState } from 'react'

export function Loader(){
  const [loading, setLoading] = useState(true);

  window.addEventListener('load', () => setLoading(false))

  return(
    <div 
    className={`fixed inset-0 grid place-items-center z-50 bg-[#081524] transition-custom
      ${!loading && 'opacity-0 invisible'}
    `}
    >

      <div className='w-20 h-20 border-4 border-zinc-500 border-l-[#081524] rounded-full animation animate-spin-fast'></div>

    </div>
  )
}