interface GenresProps{
  name: string
  key: number
}

export function Genres({name}: GenresProps){
  return (
    <span
    className="px-2 py-1 rounded-full border text-sm hover:bg-gray-100/10 cursor-pointer"
    >
      {name}
    </span>
  )
}