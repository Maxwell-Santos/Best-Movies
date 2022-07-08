interface b{
  banner: string
  state: boolean
}
export function MoreAboutMovie({banner, state}: b) {

  return (
    <div 
    className={`
    ${state === true ? 
      'sm:w-[70%] lg:w-[50%] max-w-[700px]' : 
      'w-[0px]'} fixed top-0 right-0 bottom-0 z-10 transition`
    }
    >
      <div 
      className="w-full h-full bg-[#03090f] opacity-90 absolute"
      ></div>

      <img 
      className="w-full h-auto object-cover"
      src={`https://image.tmdb.org/t/p/w500${banner}`} 
      alt="" />
    </div>
  )
}