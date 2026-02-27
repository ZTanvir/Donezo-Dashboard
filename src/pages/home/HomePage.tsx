import LoginSection from "./LoginSection";
import LoginDetailsSection from "./LoginDetailsSection";

const HomePage = () => {
  return (
    <div>
      <div className="grid space-x-2 px-4 py-4 lg:grid-cols-2">
        <LoginSection />
        <LoginDetailsSection />
      </div>
    </div>
  );
};
export default HomePage;
