import { MdOutlineSearch } from "react-icons/md";

const SearchBar=()=>{
    return(
        <div className="flex w-full h-8 justify-center bg-zinc-100">
            <MdOutlineSearch className="text-2xl text-zinc-400 mt-1 mr-2"/>
            <input type="text" placeholder="search any thing" className="w-4/5 bg-transparent focus:outline-none text-sm font-medium"></input>
        </div>
    )
}

export default SearchBar