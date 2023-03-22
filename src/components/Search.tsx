import { SearchByName } from "../services/SearchByName"

export function Search() {

  return (
    <header className="flex p-3 pr-10 mt-6">
      <input
        type="text"
        placeholder="qual o nome do filme?"
        onChange={event => SearchByName(event.target.value)}
        className="bg-inherit appearance-none outline-none w-full p-3 text-center text-4xl text-gray-400 placeholder:text-gray-600"
      />
    </header>
  )
}
