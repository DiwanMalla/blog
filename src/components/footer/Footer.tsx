import { useContext } from "react";
import myContext from "../../context/data/myContext";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <footer
      className="body-font"
      style={{ background: mode === "dark" ? "rgb(30,41,59)" : "#30336b" }}
    >
      {/*Left Content*/}
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        {/*Blog Logo*/}
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/*Logo*/}
          <img
            className="w-10"
            src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png"
            alt="logo"
          />
          {/*Logo text*/}
          <span className="text-white ml-3 text-xl">Diwan</span>
        </div>
        {/*items*/}
        <p className=" text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          &copy; 2023 Diwan -{" "}
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @diwan_malla
          </a>
        </p>
        {/*Right item*/}
        <span className="text-gray-500 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">
          {/*Icon 1*/}
          <a className="cursor-pointer shadow-lg hover:shadow-gray-400 hover:scale-150 hover:text-blue-400">
            <FaFacebook />
          </a>
          {/*Icon 2*/}
          <a className="cursor-pointer shadow-lg hover:shadow-gray-400 hover:scale-150 hover:text-white">
            <FaTwitter />
          </a>
          <a className="cursor-pointer shadow-lg hover:shadow-gray-400 hover:scale-150 hover:text-[rgb(254,204,99)]">
            <FaInstagram />
          </a>
          <a className="cursor-pointer shadow-lg hover:shadow-gray-400 hover:scale-150 hover:text-blue-600">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
