import React, { useState } from "react";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import login_bg from "../assets/img/login_bg4.png";
import { Link, useNavigate } from "react-router-dom";
import { Axios } from "../Axios"
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };
  console.log(form)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/register",{firstName: form.firstName, lastName: form.lastName, email: form.email, password: form.password});
      console.log(res)
      setForm({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      });
      navigate('/')
      toast.success("SignUp succesfully", {
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
      console.log(error.response.data.message)
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
  };

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
                <div className="flex border-l-4 border-[#0057A8] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                  <div className=" mt-[6px] opacity-[30%] mr-2">
                    {<MdAttachEmail />}
                  </div>
                  <input
                    className="outline-none   bg-[#f7f7f7]  "
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                {/* <!--Password input--> */}
                <div className="flex outline-none border-l-4 border-[#0057A8] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                  <div className=" mt-[6px] opacity-[30%] mr-2">
                    {<MdOutlineDriveFileRenameOutline />}
                  </div>
                  <input
                    className="outline-none  bg-[#f7f7f7]"
                    type="text"
                    name="firstName"
                    placeholder="Firs tName"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex outline-none border-l-4 border-[#0057A8] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                  <div className=" mt-[6px] opacity-[30%] mr-2">
                    {<MdOutlineDriveFileRenameOutline />}
                  </div>
                  <input
                    className="outline-none  bg-[#f7f7f7]"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex outline-none border-l-4 border-[#0057A8] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
                  <div className=" mt-[6px] opacity-[30%] mr-2">
                    {<RiLockPasswordFill />}
                  </div>
                  <input
                    className="outline-none  bg-[#f7f7f7]"
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
                {/* Hello, how about our team meeting */}
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
                  Register
                </button>
                {/* <!-- Divider --> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
