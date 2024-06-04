const About = () => {
  return (
    <div className="h-screen flex items-center justify-around">
      <div className="">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm h-96 rounded-lg shadow-2xl object-cover overflow-hidden "
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl">About us</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          deleniti quae officia corporis adipisci soluta! Blanditiis vitae
          repellendus consequatur dolorem!
        </p>
      </div>
    </div>
  );
};

export default About;
