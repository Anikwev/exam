import { MdRemoveRedEye } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BeatLoader } from "react-spinners";
import { MdOutlineDone } from "react-icons/md";

const LoginComponents = () => {
    //===== State Part Start =====//
    const [showPass , setShowPass]       = useState(false)
    const [email , setEmail]             = useState()
    const [emailErr , setEmailErr]       = useState()
    const [pass , setPass]               = useState()
    const [passErr , setPassErr]         = useState()
    const navigate                       = useNavigate()
    const [remember , setRemember]       = useState(false)
    const [loading , setLoading]         = useState(false)
    //===== State Part End =====//

    //===== Password Show Part Start =====//
    const handleShow = ()=>{
        setShowPass(!showPass)
    }
    //===== Password Show Part End =====//

    //===== Remember Show Part Start =====//
    const handleRemember = ()=>{
        setRemember(!remember)
    }
    //===== Remember Show Part End =====//

    //===== Event Part Start =====//
    const handleEmail = (e)=>{
        setEmail(e.target.value)
        setEmailErr('')
    }
    const handlePass = (e)=>{
        setPass(e.target.value)
        setPassErr('')
    }
    //===== Event Part End =====//

    //===== Submit Part Start =====//
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!email){
            setEmailErr('Please enter your email address')
        }else if(!pass){
            setPassErr('Please enter your password')
        }else{
            setLoading(true)
            toast.success('Login Success!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
                navigate('/')
        }
    }
    //===== Submit Part End =====//
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="backdrop-blur-xl rounded-xl p-10 overflow-hidden">
            <div className="flex flex-col gap-5">
                <h1 className="text-center text-[25px] font-bold uppercase text-[#024CAA]">Login form</h1>
                <div className="flex flex flex-col gap-10">
                    <div className="flex flex-col">
                        <label className="text-md font-bold text-[22px] text-black">Email Address</label>
                        <input onChange={handleEmail} className="mt-5 p-3 rounded-lg bg-transparent border-[1px] border-solid border-[#fff]
                         placeholder:text-black placeholder:font-bold placeholder:text-sm text-[22px] text-black font-bold hover:border-[#4B70F5] transition-all active:border-[2px]" type="email" placeholder="Enter your Email address"/>
                        <p className="text-sm text-[#FFC100] font-bold">{emailErr}</p>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-md font-bold text-[22px] text-black">Password</label>
                        <div className="relative mt-5 p-3 rounded-lg bg-transparent border-[1px] border-solid border-[#fff] hover:border-[#4B70F5] transition-all active:border-[2px]">
                                <input onChange={handlePass} className="placeholder:font-bold text-[22px] bg-transparent placeholder:text-black placeholder:text-sm  font-bold text-black" type={showPass ? 'text' :'password'} placeholder="Enter your Password"/>
                                {
                                    showPass?
                                    <MdRemoveRedEye onClick={handleShow} className="absolute top-[50%] right-1 text-white translate-y-[-50%] text-xl"/>
                                    :
                                    <IoMdEyeOff onClick={handleShow} className="absolute top-[50%] right-1 text-white translate-y-[-50%] text-xl"/>
                                }
                            </div>
                        <p className="text-sm text-[#FFC100] font-bold">{passErr}</p>
                    </div>
                </div>
                {
                    loading ?
                    <BeatLoader className="w-full h-[44px] flex justify-center items-center bg-[#7bdbe0] rounded-xl hover:bg-[#9EC8B9] text-xl font-bold active:scale-[1.1] transition-all"/>
                    :
                    <button className="w-full py-2 bg-[#e6a8f3] rounded-xl hover:bg-[#fd40d1] hover:text-white text-xl font-bold active:scale-[1.1] transition-all">Log In</button>
                }
                <div className="flex justify-center items-center gap-[100px]">
                    <div className="flex gap-1 items-center">
                        <div className="flex items-center justify-center w-5 h-5 border-2 border-solid border-white rounded-md overflow-hidden">
                            {
                                remember &
                                <MdOutlineDone className="text-white text-xl"/>
                            }
                        </div>
                        <p className="text-xl text-white font-bold">Remember Me</p>
                    </div>
                    <Link className="text-xl text-white font-bold hover:underline" to={'/reset-password'}>Forgot Password?</Link>
                </div>
 
            </div>
        </form>
      </div>
    </>
  )
}

export default LoginComponents