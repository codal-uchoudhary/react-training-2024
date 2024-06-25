import { LiaHomeSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { SiGraphql } from "react-icons/si";
import { IoEarth } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
const Vnavbar=()=>{
    return(
        <nav className="text-zinc-400 bg-stone-800 h-screen w-20">
            <ul className="text-4xl flex flex-col gap-y-14 items-center justify-evenly pt-10">
                <li className="hover:text-zinc-200"><LiaHomeSolid /></li>
                <li className="hover:text-zinc-100"><FaDatabase /></li>
                <li className="hover:text-zinc-100"><SiGraphql /></li>
                <li className="hover:text-zinc-100"><IoEarth /></li>
                <li className="hover:text-zinc-100"><IoDocument /></li>
                <li className="hover:text-zinc-100"><IoMdSettings /></li>
            </ul>
        </nav>
    )
}

export default Vnavbar