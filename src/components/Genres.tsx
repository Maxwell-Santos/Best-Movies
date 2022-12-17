interface GenresProps{
  name: string
  key: number
}

export function Genres({name}: GenresProps){
  return (
    <span
    className="px-2 py-1 rounded-md text-sm tracking-wide bg-gray-100/80 text-black hover:bg-gray-100/60 cursor-pointer"
    >
      {name}
    </span>
  )
}