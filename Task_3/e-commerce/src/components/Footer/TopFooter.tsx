import { IoIosArrowForward } from "react-icons/io";

const TopFooter = () => {
  return (
    <div className="flex bg-zinc-800 text-white text-xs py-14 px-14 tracking-wide">
      <div className="basis-1/2">
        <p className="text-xl">SIGN UP FOR 10% OFF</p>
        <p className="text-sm my-2">
          Subscribe to get special offers & once-in-a-lifetime deals
        </p>
        <div className="bg-gray-200 w-1/2 h-8 rounded-sm flex px-2 my-4">
          <input
            placeholder="Enter your e-mail address here"
            className="w-4/5 bg-transparent focus:outline-none text-black"
          ></input>
          <button className="w-1/5 text-xl flex justify-center items-center text-gray-400">
            <IoIosArrowForward/>
          </button>
        </div>
      </div>
      <div className="flex basis-1/2 justify-evenly">
        <ul>
          <li className="mb-2 text-gray-400 text-sm">ABOUT US</li>
          <li>Our Story</li>
          <li>Made with Care</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li  className="mb-2 text-gray-400 text-sm">ASSISTANCE</li>
          <li>Terms & Conitions</li>
          <li>Privacy Policy</li>
          <li>Accessibility</li>
        </ul>
        <ul>
          <li  className="mb-2 text-gray-400 text-sm">BOUTIQUES</li>
          <li>Find a store</li>
          <li>Book a free eye test</li>
        </ul>
      </div>
    </div>
  );
};

export default TopFooter;
