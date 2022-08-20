import './styles.css'

interface HateProps{
  indexMovie: number;
}


export function Hate({indexMovie}: HateProps){

  let ordered = indexMovie + 1

  return (
    
    <div
    className={`absolute -left-8 h-full flex items-end md:-left-14 top-o bottom-0 z-30
    after:block after:absolute after:inset-0 after:bg-gradient-to-r after:from-[#081524] after:z-10
    `}
    >

      <span
      className="number"
      >
        {ordered}
      </span>
    </div>
 )
}
