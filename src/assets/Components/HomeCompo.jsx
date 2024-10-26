import { Link } from "react-router-dom"
import { IoIosAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const HomeCompo = () => {
  return (
    <>
      <nav className="w-full p-5 bg-[#42d5da]">
        <div className="container mx-auto flex justify-between items-center">
          <Link to={'/'} className="text-3xl text-white font-bold">To Do List</Link>
          <div className="flex gap-5">
            <Link className="text-xl text-black font-semibold border-2 border-solid border-[#5efcff] px-5 py-3 rounded-xl hover:bg-[#f15dbb] hover:text-white transition-all active:scale-[1.1]" to={'/login'}>Sign In</Link>
            <Link className="text-xl text-black font-semibold border-2 border-solid border-[#5efcff] px-5 py-3 rounded-xl hover:bg-[#f15dbb] hover:text-white transition-all active:scale-[1.1]" to={'/registration'}>Sign Up</Link>
          </div>
        </div>
      </nav>
      <section className="container mx-auto">
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-5">
          <div className="flex flex-col gap-10 p-5 bg-[#f88df8] rounded-xl">
            <form className="w-[500px] h-[50px] rounded-xl border-2 border-solid border-[#40abcb] flex justify-between items-center overflow-hidden">
              <input className="w-[350px] h-full bg-transparent pl-5 text-white font-bold" type="text" placeholder="Enter your ToDo"/>
              <button className="h-full px-5 uppercase text-xl font-bold text-white bg-[#40abcb] transition-all active:scale-[1.1] flex items-center gap-1"><IoIosAddCircle className="text-3xl text-white"/></button>
            </form>
            <div className="w-full border-2 border-solid border-white rounded-xl"></div>
            <div className="todoMain">
              <input className="todoInput" type="text" placeholder="Your Single ToDo"/>
              <div className="flex h-full gap-5 pr-5">
                <button className="rounded-xl uppercase text-xl font-bold text-white transition-all active:scale-[1.1]"><FaEdit/></button>
                <button className="rounded-xl uppercase text-xl font-bold text-white transition-all active:scale-[1.1]"><FaTrash/></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeCompo