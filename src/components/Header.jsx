import React from "react";
const Header = () => {
  return (
    <div>
      <h1 className="bg-blue-900 text-white text-center">
        WELCOME! PLEASE <span className="text-blue-300"> REGISTER </span> OR
        <span className="text-blue-300"> SIGNIN</span>
      </h1>
      <div className="flex items-center justify-between py-2 px-[250px]">
        <img className="w-[250px]" src="logo.png" alt="" />
        <div>
          <a className="flex justify-end" href="">
            Login & Signup
          </a>

          <div className="flex space-x-6 items-center">
            <a href="/">THE RESERVE</a>
            <a href="/">AUCTIONS</a>
            <a href="/">BLOG</a>
            <a href="/">ABOUT</a>
            <a href="/">CONTACT</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
