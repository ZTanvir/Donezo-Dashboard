import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import useSWRMutation from "swr/mutation";
import { login } from "../services/api";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { trigger, isMutating, error } = useSWRMutation("/api/login", login);

  const handleSubmitForm = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    const formData = { email, password };
    const response = await trigger(formData);
    console.log(response);
  };

  return (
    <form className="" onSubmit={handleSubmitForm}>
      {error && (
        <div className="my-4 rounded-lg bg-red-200 p-2 text-gray-800">
          {error?.message}
        </div>
      )}

      <div className="mb-4 flex flex-col space-y-2">
        <label htmlFor="email">Email Address</label>
        <div className="relative">
          <MdOutlineEmail
            className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            className="w-full rounded-xl border border-gray-300 py-2 pr-3 pl-10 text-gray-700 transition-all duration-150 focus:ring-gray-500"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user1@example.com"
            required={true}
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
            required={true}
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
        disabled={isMutating}
        className="item-center flex w-full justify-center space-x-2 rounded-2xl bg-green-900 py-3 font-bold text-white transition duration-150 hover:cursor-pointer hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-700"
        type="submit"
      >
        <span
          className={`self-center opacity-0 ${isMutating && "opacity-100"}`}
        >
          <ImSpinner8 size={20} className="animate-spin" />
          <span className="sr-only">Loading...</span>
        </span>

        <span> Sign in</span>
      </button>
    </form>
  );
};
export default LoginForm;
