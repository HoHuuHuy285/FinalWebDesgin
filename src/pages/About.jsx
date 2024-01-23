const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love 
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
            keyboards
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">        
        T-H is a leading company specializing in providing innovative, unique and quality 
        keyboard accessories. With a commitment to providing customers with the most optimal 
        products, we continuously research and develop advanced solutions to enhance work and 
        entertainment experiences.
      </p>
    </>
  );
};
export default About;
