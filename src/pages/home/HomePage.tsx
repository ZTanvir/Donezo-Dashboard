import { FiTarget } from "react-icons/fi";

const HomePage = () => {
  return (
    <div>
      <div className="grid space-x-2 md:grid-cols-2">
        <section id="loginForm">
          <div className="px-4 py-4">
            <div className="mb-6 flex items-center justify-center space-x-3 md:mb-8 md:justify-start">
              <FiTarget className="text-green-950" size={40} />
              <span className="text-2xl font-bold text-gray-900">Donezo</span>
            </div>
            <div className="mx-auto max-w-lg">
              <h1 className="mb:text-4xl mb-2 text-center text-2xl font-bold text-gray-950 md:text-left">
                Welcome back
              </h1>
              <p className="mb-4 text-center text-gray-500 md:text-left">
                Please enter your details to sign in.
              </p>
              <form className="">
                <div className="mb-4 flex flex-col space-y-2">
                  <label htmlFor="email">Email Address</label>
                  <input
                    className="rounded-xl border border-gray-300 px-3 py-2 text-gray-700 transition-all duration-150 focus:ring-gray-500"
                    type="text"
                    id="email"
                    placeholder="user1@example.com"
                  />
                </div>
                <div className="mb-4 flex flex-col space-y-2">
                  <label htmlFor="password">Password</label>
                  <input
                    className="rounded-xl border border-gray-300 px-3 py-2 text-gray-700 transition-all duration-150 focus:ring-gray-500"
                    type="password"
                    id="password"
                    placeholder="password123"
                  />
                </div>
                <button
                  className="w-full rounded-2xl bg-green-900 py-3 font-bold text-white transition duration-150 hover:cursor-pointer hover:bg-green-800"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </section>
        <section id="details" className="hidden md:block">
          <div className="flex h-screen flex-col items-center justify-center rounded-2xl bg-radial-[at_80%_20%] from-green-800 to-green-950">
            <div className="max-w-xl px-10">
              <h2 className="mb-8 text-center text-3xl font-bold text-white">
                Plan, prioritize, and accomplish your tasks with ease.
              </h2>
              <p className="text-center text-white">
                Join thousands of teams already using Donezo to manage their
                daily workflows and projects effectively.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HomePage;
