import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmitForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="" onSubmit={handleSubmitForm}>
      <div className="mb-4 flex flex-col space-y-2">
        <label htmlFor="email">Email Address</label>
        <div className="relative">
          <MdOutlineEmail
            className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            className="w-full rounded-xl border border-gray-300 py-2 pr-3 pl-10 text-gray-700 transition-all duration-150 focus:ring-gray-500"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user1@example.com"
          />
        </div>
      </div>
      <div className="mb-4 flex flex-col space-y-2">
        <label htmlFor="password">Password</label>
        <div className="relative">
          <CiLock
            className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            className="w-full rounded-xl border border-gray-300 px-10 py-2 text-gray-700 transition-all duration-150 focus:ring-gray-500"
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password123"
          />
          {password.length > 0 &&
            (isPasswordVisible ? (
              <FaRegEye
                onClick={() => setIsPasswordVisible(false)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:cursor-pointer"
                size={20}
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setIsPasswordVisible(true)}
                size={20}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:cursor-pointer"
              />
            ))}
        </div>
      </div>
      <button
        className="w-full rounded-2xl bg-green-900 py-3 font-bold text-white transition duration-150 hover:cursor-pointer hover:bg-green-800"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};
export default LoginForm;
