import TopFooter from "./TopFooter";
import FooterSlider from "./Slider";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <TopFooter />
      <div className="bg-zinc-700 text-gray-400 flex pb-1 pt-3 border-t border-gray-400">
        <div className="text-sm tracking-wide pl-14">
          Follow us on :
        </div>
        <div className="w-[160px] flex justify-evenly">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaTelegramPlane /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </>
  );
};

export default Footer;
