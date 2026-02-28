const LoginDetailsSection = () => {
  return (
    <section id="details" className="hidden lg:block">
      <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-radial-[at_80%_20%] from-green-800 to-green-950">
        <div className="max-w-xl px-10">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Plan, prioritize, and accomplish your tasks with ease.
          </h2>
          <p className="text-center text-white">
            Join thousands of teams already using Donezo to manage their daily
            workflows and projects effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginDetailsSection;
