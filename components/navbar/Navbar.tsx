import Darkmode from "./Darkmode";
import Dropdown from "./Dropdown";
import Login from "./Login";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex flex-col absolute top-0 w-full">
      <div className="w-full flex justify-between border-b-2">
        <Logo />
        {/* <div className="hidden md:flex items-center">
          <Dropdown />
        </div> */}
        <div className="lg:w-1/4 flex  justify-end items-center p-4">
          <Login />
          <Darkmode />
        </div>
      </div>
      {/* <div className="flex md:hidden w-full justify-center items-center mt-6">
        <Dropdown />
      </div> */}
    </nav>
  );
};

export default Navbar;
