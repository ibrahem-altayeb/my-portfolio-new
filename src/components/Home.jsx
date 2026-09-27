import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="container px-8 flex flex-col justify-center h-full">
        <p className="mt-4">Hi there, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold ">Ibrahim Altayeb</h1>
        <h2 className="text-4xl sm:text-7xl font-bold ">
          I'm a Front-End Developer.
        </h2>
        <p className=" py-4 max-w-[700px]">
          I’m a Front-End Developer focused on building responsive, modern, and user-friendly web applications.
        </p>
        <div className="flex items-center justify-center sm:justify-start">
          <Link
            to="about"
            smooth={true}
            duration={800}
            className="cursor-pointer text-[#222] my-button border-[#222] px-6 py-3 my-2 flex items-center rounded-lg transition-all duration-300"
          >
            About me
            <span className=" duration-300 index">
              <span className="ml-3 text-xl">👇🏼</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
