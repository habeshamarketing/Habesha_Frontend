import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import login_bg from "../assets/img/login_bg4.png";
import { RiLockPasswordFill } from 'react-icons/ri';
import { Axios } from '../Axios';
import { toast } from 'react-toastify';



const ResetPass =  () => {
    const { token} = useParams()
    console.log(token)
      const navigate = useNavigate();

    const [password, setPassword] = useState('')
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
                    await Axios.post(`/reset-password/${token}`, {
                      password,
                    });
                      navigate("/login");
                      toast.success("your password succefully reseted", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
        } catch (error) {
            console.log(error)
              toast.error(`${error.response.data.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        }
    }
  return (
    <div>
      <section className="h-screen mx-[100px]">
        <div className="container h-full px-6 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img src={login_bg} className="w-full " alt="Phone image" />
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form onSubmit={handleSubmit}>
                {/* <!-- Email input --> */}
                <h1 className=" text-xl font-extrabold font-mono mb-3">
                  Reset your password
                </h1>
                <h1 className=" mb-3 font-mono">
                  Please enter the new password you want to use
                </h1>
                <div className="flex outline-none border-l-4 border-[#0057A8] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                  <div className=" mt-[6px] opacity-[30%] mr-2">
                    {<RiLockPasswordFill />}
                  </div>
                  <input
                    className="outline-none  bg-[#f7f7f7]"
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Hello, how about our team meeting */}
                <p className=" m-2 text-sm">
                  <Link to="/register">
                    Don't have an account <span> </span>
                    <span className="  font-extrabold">Register Here</span>
                  </Link>
                </p>
                <p className=" m-2 text-sm">
                  <Link to="/login">
                    Already have an account <span> </span>
                    <span className="  font-extrabold">Log In Here</span>
                  </Link>
                </p>
                {/* <!-- Remember me checkbox --> */}
                {/* <!-- Submit button --> */}
                {/* <TERipple rippleColor="light" className="w-full"> */}
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-[#7620ff] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Save New Password
                </button>
                {/* </TERipple> */}
                {/* <!-- Divider --> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResetPass