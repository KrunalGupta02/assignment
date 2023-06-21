import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get(`https://649172902f2c7ee6c2c83e44.mockapi.io/assignment`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://649172902f2c7ee6c2c83e44.mockapi.io/assignment/${id}`)
      .then(() => {
        fetchData();
      });
  };

  const getLocalStrogeData = (id, name, email, phone) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-white font-bold text-5xl m-3 text-center">
        Fetched Data
      </h1>
      <Link to="/create">
        <div className="text-center">
          <button className="bg-emerald-700 text-white p-3 px-8 text-base rounded-md hover:bg-emerald-600">
            Create
          </button>
        </div>
      </Link>
      <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {data.map((ele) => {
          return (
            <div
              className="cards max-w-md w-full flex flex-col p-12 bg-gray-700/0 text-white border border-gray-200 rounded-lg shadow"
              key={ele.id}
            >
              <div className="text p-3 rounded-sm ring-4 text-white ring-slate-300">
                <p className="text-md text-justify ">Name: {ele.name}</p>
                <p className="text-md text-justify">Email: {ele.email}</p>
                <p className="text-md text-justify">Phone: {ele.phone}</p>
              </div>
              <div className="myButton mt-5 relative">
                <Link to="/edit">
                  <button
                    type="button"
                    className="bg-blue-600 p-3 px-3 rounded-full text-white hover:bg-emerald-500"
                    onClick={() =>
                      getLocalStrogeData(ele.id, ele.name, ele.email, ele.phone)
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </button>
                </Link>
                <button
                  type="button"
                  className="bg-blue-600 p-3 px-3 text-white ml-3 hover:bg-emerald-500 rounded-full"
                  onClick={() => {
                    handleDelete(ele.id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
