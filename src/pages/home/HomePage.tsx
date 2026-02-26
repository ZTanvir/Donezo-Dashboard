import { FiTarget } from "react-icons/fi";
import LoginForm from "../../components/LoginForm";

const HomePage = () => {
  return (
    <div>
      <div className="grid space-x-2 px-4 py-4 lg:grid-cols-2">
        <section id="loginForm">
          <div>
            <div className="mb-6 flex items-center justify-center space-x-3 md:mb-8 md:justify-start">
              <FiTarget className="text-green-950" size={40} />
              <span className="text-2xl font-bold text-gray-900">Donezo</span>
            </div>
            <div className="mx-auto max-w-lg">
              <h1 className="mb-2 text-center text-2xl font-bold text-gray-950 md:text-left md:text-4xl">
                Welcome back
              </h1>
              <p className="mb-4 text-center text-gray-500 md:text-left">
                Please enter your details to sign in.
              </p>
              <LoginForm />
            </div>
          </div>
        </section>
        <section id="details" className="hidden lg:block">
          <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-radial-[at_80%_20%] from-green-800 to-green-950">
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
