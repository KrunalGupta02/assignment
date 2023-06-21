import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id") || "");
    setName(localStorage.getItem("name") || "");
    setEmail(localStorage.getItem("email") || "");
    setPhone(localStorage.getItem("phone") || "");

    console.log(email);
  }, []);

  const navigate = useNavigate();

  // Form Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdate = () => {
    console.log("id", id);

    axios
      .put(`https://649172902f2c7ee6c2c83e44.mockapi.io/assignment/${id}`, {
        name: name,
        email: email,
        phone: phone,
      })
      .then(() => {
        navigate("/");
      });
  };
  return (
    <div className="main min-h-screen flex justify-center items-center p-4 md:p-6 lg:p-8">
      <form
        onSubmit={handleSubmit(handleUpdate)}
        className="max-w-sm p-8 md:p-10 bg-gradient-to-b from blue-900/80 to blue-800/20 text-white backdrop-blur-lg border-solid border-white border-opacity-20 rounded-2xl shadow-black/70 shadow-2xl"
      >
        <h1 className="font-bold text-white text-2xl text-center underline underline-offset-2 mb-2">
          Update your Data
        </h1>
        <p className="mb-6 text-[#fff]/60 text-sm text-opacity-50">
          Enter a valid email &amp; phone number in the fields below to get
          started.
        </p>

        <label className="relative text-[#fff]/70 focus-within:text-[#fff]/70 block mb-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>

          <input
            type="text"
            {...register("name", { required: true, maxLength: 80 })}
            id="name"
            placeholder="Name"
            className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 w-full bg-black/60 text-white focus:bg-black/70 focus:shadow-sm focus:outline-none leading-none placeholder:gray-400 appearance-none block pl-12 rounded-lg"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        {errors.name && <p className="text-red-500 mb-2">Name is required</p>}

        <label className="relative text-[#fff]/70 focus-within:text-[#fff]/70 block mb-4 ">
          <svg
            className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
          </svg>
          <input
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            id="email"
            placeholder="Email"
            className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 w-full bg-black/60 text-white focus:bg-black/70 focus:shadow-sm focus:outline-none leading-none placeholder:gray-400 appearance-none block pl-12 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {errors.email && (
          <p className="text-red-500 mb-2">Invalid email address</p>
        )}

        <label className="relative text-[#fff]/70 focus-within:text-[#fff]/70 block mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>

          <input
            type="number"
            {...register("phone", {
              required: true,
              maxLength: 10,
              pattern: /^[0-9]{10}$/,
            })}
            id="phone"
            placeholder="Phone No."
            className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 w-full bg-black/60 text-white focus:bg-black/70 focus:shadow-sm focus:outline-none leading-none placeholder:gray-400 appearance-none block pl-12 rounded-lg"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </label>
        {errors.phone && (
          <p className="text-red-500 mb-2">
            Please enter a valid 10-digit phone number
          </p>
        )}

        <button className="bg-blue-600 hover:bg-blue-700 w-full p-2 md:p-3 rounded-md font-bold text-lg transition-colors duration-500">
          Update Now
        </button>

        <Link to="/">
          <button className="mt-3 bg-blue-600 hover:bg-blue-700 w-full p-2 md:p-3 rounded-md font-bold text-lg transition-colors duration-500">
            Show data
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Update;
