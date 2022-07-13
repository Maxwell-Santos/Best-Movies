
export function Slide() {

  return (
    <div
      className=" relative overflow-hidden mx-auto  w-full h-[40vh] md:h-[50vh] xl:h-[80vh] max-h-[800px] flex justify-center"
    >
        <img
          className="object-cover w-full h-full object-center " 
          src="https://velhaonda.files.wordpress.com/2013/09/04_a_origem_dos_guardi_es.jpg"
          alt=""
        />

      <footer className="absolute bottom-0 left-0 right-0 text-gray-100 p-3 z-10"
      >
        <div className="h-full flex items-end"> {/*details*/}
          <span className="leading-tight">
            2021, Action, Adventure, Fantasy, USA, Austrália
          </span>
        </div>
      </footer>
      <div
      className="absolute bottom-0 left-0 right-0 w-full h-[50%] bg-gradient-to-t from-[#081524]"
      ></div>
    </div>
  )
}