interface b{
  banner: string
  state: boolean
}
export function MoreAboutMovie({banner, state}: b) {

  return (
    <div 
    className={`
    ${state === true ? 'lg:[50%] max-w-[1000px]' : 'w-[0px]' } bg-white fixed top-0 right-0  bottom-0 z-10 transition`
    }
    >
      <h1>Hello World</h1>
      <img src={banner} alt="" />
    </div>
  )
}