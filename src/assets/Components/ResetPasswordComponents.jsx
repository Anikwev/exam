import { useState } from "react"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { BeatLoader } from "react-spinners";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const ResetPasswordComponents = () => {
  const [reset , setReset]                 = useState()
  const [resetEmailErr , setResetEmailErr] = useState()
  const [loading , setLoading]             = useState(false)
  const auth                               = getAuth();
  const navigate                           = useNavigate()

  const handleReset = (e)=>{
    setReset(e.target.value)
    setResetEmailErr('')
  }
  const handleSend = (e)=>{
    e.preventDefault()
    if(!reset){
      setResetEmailErr('Please enter registered email address')
    }else{
      setLoading(true)
      sendPasswordResetEmail(auth, reset)
  .then(() => {
    toast.success('Password reset request sent to your email!', {
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
      navigate('/login')
      setLoading(false)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setLoading(false)
    if(errorCode == 'auth/network-request-failed'){
      toast.error('Internet Connection Lost!', {
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
        }if(errorCode == 'auth/too-many-requests'){
          toast.error('Too many requests. Please try again later!', {
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
  });
    }
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSend} className="p-5 rounded-xl backdrop-blur-xl flex flex-col gap-5 items-center">
          <h2 className="text-2xl font-bold text-white">Reset your password</h2>
          <input onChange={handleReset} className="w-[500px] py-5 pl-5 rounded-xl bg-transparent border-white border-2 text-xl font-light text-white" type="email" placeholder="Enter your registered E-Mail Address"/>
          <p className="text-sm text-[#FFC100] font-bold">{resetEmailErr}</p>
          <div className="flex gap-[100px]">
            <Link className="p-2 rounded-lg text-2xl text-black bg-white font-bold active:scale-[1.1] border-none outline-none transition-all hover:bg-[#8f8f8f]" to={'/login'}>Back to Login</Link>
            {
            loading ?
            <BeatLoader className="flex justify-center items-center py-2 rounded-lg text-2xl font-bold bg-white border-none outline-none transition-all"/>
            :
            <button className="p-2 rounded-lg text-2xl text-white hover:text-black hover:bg-white bg-black font-bold active:scale-[1.1] border-none outline-none transition-all">Reset</button>
          }
          </div>
        </form>
      </div>
    </>
  )
}

export default ResetPasswordComponents