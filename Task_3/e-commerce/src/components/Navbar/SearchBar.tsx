import { MdOutlineSearch } from "react-icons/md";

const SearchBar=()=>{
    return(
        <div className="flex">
            <MdOutlineSearch />
            <input type="text" placeholder="search any thing"></input>
        </div>
    )
}

export default SearchBar