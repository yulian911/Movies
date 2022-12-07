import { BsSun, BsFillMoonFill } from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";


import { toggleTheme } from "../../features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const Header = () => {
  const { darkTheme } = useAppSelector((state) => state);
 
  const dispatch = useAppDispatch();
  const onToggle = () => dispatch(toggleTheme());

  return (
    <header className="mb-20 flex flex-col flex-1  h-full">
      <nav className="border-b border-gray-200 border-opacity-25 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex justify-center items-center gap-7 ">
            <Link to="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap">Movies</span>
            </Link>
            <Link to='/likes' className="flex justify-center items-center gap-1 hover:text-black">
              <span className="self-center text-md font-semibold whitespace-nowrap">Likes</span>
              <AiFillHeart/>
            </Link>
          </div>
         

          <div className="flex items-center lg:order-2 ">
            {darkTheme.theme && <BsSun onClick={() => onToggle()} className="hover:opacity-50 cursor-pointer" />}
            {!darkTheme.theme && (
              <BsFillMoonFill onClick={() => onToggle()} className="hover:opacity-50 cursor-pointer" />
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;