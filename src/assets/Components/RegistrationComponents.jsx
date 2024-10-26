import { MdRemoveRedEye } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BeatLoader } from "react-spinners";

const RegistrationComponents = () => {
    //===== State Part Start =====//
    const [showPass , setShowPass]              = useState(false)
    const [showConPass , setShowConPass]        = useState(false)
    const [firstName , setFirstName]            = useState('')
    const [firstNameErr , setFirstNameErr]      = useState('')
    const [lastName , setLastName]              = useState('')
    const [lastNameErr , setLastNameErr]        = useState('')
    const [email , setEmail]                    = useState('')
    const [emailErr , setEmailErr]              = useState('')
    const [pass , setPass]                      = useState('')
    const [ConPass , setConPass]                = useState('')
    const [passErr , setPassErr]                = useState('')
    const [ConPassErr , setConPassErr]          = useState('')
    const navigate                              = useNavigate()
    const [loading , setLoading]                = useState(false)
    //===== State Part End =====//

    //===== Password Show Part Start =====//
    const handleShow = ()=>{
        setShowPass(!showPass)
    }
    const handleConShow = ()=>{
        setShowConPass(!showConPass)
    }
    //===== Password Show Part End =====//

    //===== Event Part Start =====//
    const handleFirstName = (e)=>{
        setFirstName(e.target.value)
        setFirstNameErr('')
    }
    const handleLastName = (e)=>{
        setLastName(e.target.value)
        setLastNameErr('')
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
        setEmailErr('')
    }
    const handlePass = (e)=>{
        setPass(e.target.value)
        setPassErr('')
    }
    const handleConPass = (e)=>{
        setConPass(e.target.value)
        setConPassErr('')
    }
    //===== Event Part End =====//

    //===== Submit Part Start =====//
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!firstName){
            setFirstNameErr('Please enter your first name')
        }else if(!lastName){
            setLastNameErr('Please enter your last name')
        }else if(!email){
            setEmailErr('Please enter your email address')
        }else if(!pass){
            setPassErr('Please enter a strong password')
        }else if(!ConPass){
            setConPassErr('Please enter a strong password')
        }else{
            if(pass != ConPass){
                setConPassErr('Passwords didn`t match')
            }else{
                setLoading(true)
                toast.success('Registration Succesfull!', {
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
            }
        }
    }
    //===== Submit Part End =====//
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="backdrop-blur-xl rounded-xl p-10 overflow-hidden">
            <div className="flex flex-col gap-5">
                <h1 className="text-center text-xl font-bold uppercase text-[#024CAA]">registration form</h1>
                <div className="flex flex flex-col gap-10">
                    <div className="flex justify-center gap-5">
                        {/* ===== First Name Part ===== */}
                        <div className="flex flex-col">
                            <label className="text-md font-semibold text-[#B7E0FF] pl-5">First Name</label>
                            <input onChange={handleFirstName} className="mt-5 p-3 rounded-lg bg-transparent border-[1px] border-solid border-[#fff] placeholder:text-white placeholder:font-bold placeholder:text-sm text-sm text-white font-bold hover:border-[#4B70F5] transition-all active:border-[2px]" type="text" placeholder="Enter your first name"/>
                            <p className="text-sm text-[#FFC100] font-bold">{firstNameErr}</p>
                        </div>
                            {/* ===== Last Name Part ===== */}
                        <div className="flex flex-col">
                            <label className="text-md font-semibold text-[#B7E0FF] pl-5">Last Name</label>
                            <input onChange={handleLastName} className="mt-5 p-3 rounded-lg bg-transparent border-[1px] border-solid border-[#fff] placeholder:text-white placeholder:font-bold placeholder:text-sm text-sm text-white font-bold hover:border-[#4B70F5] transition-all active:border-[2px]" type="text" placeholder="Enter your last name"/>
                            <p className="text-sm text-[#FFC100] font-bold">{lastNameErr}</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-md font-semibold text-[#B7E0FF] pl-5">E-Mail Address</label>
                        <input onChange={handleEmail} className="mt-5 p-3 rounded-lg bg-transparent border-[1px] border-solid border-[#fff] placeholder:text-white placeholder:font-bold placeholder:text-sm text-sm text-white font-bold hover:border-[#4B70F5] transition-all active:border-[2px]" type="email" placeholder="Enter your e-mail address"/>
                        <p className="text-sm text-[#FFC100] font-bold">{emailErr}</p>
                    </div>
                    <div className="flex justify-center gap-5">
                        {/* ===== Password Part ===== */}
                        <div className="flex flex-col">
                            <label className="text-md font-semibold text-[#B7E0FF] pl-5">Password</label>
                            <div className="relative mt-5 p-3 rounded-lg bg-transparent border-[1px] border-solid border-[#fff] hover:border-[#4B70F5] transition-all active:border-[2px]">
                                <input onChange={handlePass} className="placeholder:font-bold bg-transparent placeholder:text-white placeholder:text-sm text-sm font-bold text-white" type={showPass ? 'text' :'password'} placeholder="Set your Password"/>
                                {
                                    showPass?
                                    <MdRemoveRedEye onClick={handleShow} className="absolute top-[50%] right-1 text-white translate-y-[-50%] text-xl"/>
                                    :
                                    <IoMdEyeOff onClick={handleShow} className="absolute top-[50%] right-1 text-white translate-y-[-50%] text-xl"/>
                                }
                            </div>
                            <p className="text-sm text-[#FFC100] font-bold">{passErr}</p>
                        </div>
                            {/* ===== Confirm Password Part ===== */}
                        <div className="flex flex-col">
                            <label className="text-md font-semibold text-[#B7E0FF] pl-5">Confirm Password</label>
                            <div className="relative mt-5 p-3 rounded-lg bg-transparent border-[1px] border-solid border-[#fff] hover:border-[#4B70F5] transition-all active:border-[2px]">
                                <input onChange={handleConPass} className="placeholder:font-bold bg-transparent placeholder:text-white placeholder:text-sm text-sm font-bold text-white" type={showConPass ? 'text' :'password'} placeholder="Repeat your Password"/>
                                {
                                    showConPass?
                                    <MdRemoveRedEye onClick={handleConShow} className="absolute top-[50%] right-1 text-white translate-y-[-50%] text-xl"/>
                                    :
                                    <IoMdEyeOff onClick={handleConShow} className="absolute top-[50%] right-1 text-white translate-y-[-50%] text-xl"/>
                                }
                            </div>
                            <p className="text-sm text-[#FFC100] font-bold">{ConPassErr}</p>
                        </div>
                    </div>
                </div>
                {
                    loading ?
                    <BeatLoader className="w-full h-[44px] flex justify-center items-center bg-[#94c1fb] rounded-xl hover:bg-[#3ae1d1] text-xl font-bold active:scale-[1.1] transition-all"/>
                    :
                    <button className="w-full py-2 bg-[#76ABAE] rounded-xl hover:bg-[#9EC8B9] text-xl font-bold active:scale-[1.1] transition-all">Create Account</button>
                }
                <div className="flex justify-between text-white px-5 text-lg font-semibold">
                    <p>Already have an account?</p>
                    <Link className="font-bold hover:underline" to={"/login"}>Login here</Link>
                </div>
            </div>
        </form>
      </div>
    </>
  )
}

export default RegistrationComponents