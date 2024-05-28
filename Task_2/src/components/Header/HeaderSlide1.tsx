import ProductImg from "./../../assets/shoose.png";
import ProductLogo from "./../../assets/pumaLogo.png"
const HeaderSlide = () => {
  return (
    <div className="flex w-full  px-8 py-10">
      <div className="basis-1/2">
        <div className="text-2xl font-bold text-center pt-8 tracking-wider">
          LIMITED TIME ONLY
        </div>
        <div className="text-red-600 text-9xl font-Zeyada font-bold text-center pt-4">
          Sale
        </div>
        <div className="text-2xl font-bold tracking-wide text-center">
          UPTO 50% OFF
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-zinc-600 text-1xl font-bold text-center rounded-full text-white py-1 px-6 m-auto tracking-wider">
            SHOPE NOW
          </button>
        </div>
      </div>
      <div className="basis-1/2 relative">
        <img src={ProductImg} className="w-full" />
        <img src={ProductLogo} className="w-[100px] absolute -top-5 right-4" />
      </div>
    </div>
  );
};

export default HeaderSlide;
