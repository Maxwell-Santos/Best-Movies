interface HeaderTitle {
  genreTitle?: string;
}

export function Header({ genreTitle }: HeaderTitle) {

  return (
    <div className="header">
      <h1
        className='block text-xl md:text-2xl lg:text-4xl font-bold uppercase text-center tracking-wide'
      >

        {genreTitle}
      </h1>
    </div>
  )
}
