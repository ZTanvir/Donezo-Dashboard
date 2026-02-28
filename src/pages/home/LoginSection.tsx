import { FiTarget } from "react-icons/fi";
import LoginForm from "../../components/LoginForm";

const LoginSection = () => {
  return (
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
  );
};
export default LoginSection;
