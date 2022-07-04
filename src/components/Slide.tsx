
export function Slide() {
  return (
    <div
      className="overflow-hidden w-[100%] h-[30%] md:h-[50vh] xl:h-[70vh] flex justify-center"
    >
        <img
          className="object-cover w-full h-full object-bottom xl:object-fill" 
          src="https://bhdicas.uai.com.br/wp-content/uploads/sites/23/2018/08/croods.jpg"
          alt=""
        />

      <footer className=" hidden absolute bottom-0 left-0 right-0 h-20 from-black to-transparent bg-gradient-to-t text-gray-100 p-3"
      >
        <div className="h-full flex items-end"> {/*details*/}
          <span className="leading-tight">
            2021, Action, Adventure, Fantasy, USA, Austrália
          </span>
        </div>
      </footer>
    </div>
  )
}