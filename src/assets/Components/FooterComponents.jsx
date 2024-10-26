import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterComponents = () => {
  return (
    <>
      <footer className="w-full flex gap-5 justify-center text-xl text-white items-center font-semibold mt-10">
        <p>Created with</p>
        <FaHeart className="text-[#ff0e0e]"/>
        <p>by</p>
        <Link className="font-bold hover:underline" to="https://github.com/fuhad-shiblu" target="_blank">Fuhad Hasan Shiblu</Link>
      </footer>
    </>
  )
}

export default FooterComponents