import React from "react";
import { useState } from "react";

const Card = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!loginData.username) {
      validationErrors.username = "Isi dulu usernamenya bang";
    }

    if (!loginData.email) {
      validationErrors.email = "Isi dulu emailnya bang";
    }

    if (!loginData.password) {
      validationErrors.password = "Isi dulu passwordnya bang";
    }

    if (Object.keys(validationErrors).length === 0) {
      alert(`Login Berhasil selamat datang ${loginData.username}`);
    } else {
      setErrorMessage(validationErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-4/12 flex flex-col rounded-xl shadow-2xl px-6 py-8 mx-auto gap-y-6"
    >
      <h1 className="font-semibold text-2xl text-sky-700">Login Eduwork</h1>

      <input
        type="text"
        name="username"
        placeholder="Username"
        className="bg-gray-200 py-3 px-6 rounded-xl font-semibold"
        // value={loginData.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="bg-gray-200 py-3 px-6 rounded-xl font-semibold"
        // value={loginData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="bg-gray-200 py-3 px-6 rounded-xl font-semibold"
        // value={loginData.password}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-sky-700 py-3 px-6 rounded-xl font-semibold text-white hover:bg-sky-900"
      >
        Login
      </button>
      <div className="text-start">
        {errorMessage.username && (
          <p className="text-red-600 font-semibold">{errorMessage.username}</p>
        )}
        {errorMessage.email && (
          <p className="text-red-600 font-semibold">{errorMessage.email}</p>
        )}
        {errorMessage.password && (
          <p className="text-red-600 font-semibold">{errorMessage.password}</p>
        )}
      </div>
    </form>
  );
};

export default Card;
