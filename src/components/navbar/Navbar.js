import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { BsPerson, BsPower } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LOG_IN } from "../../context/action/actionType";
function Navbar() {
  const [show, setShow] = useState(false);
  const cart = useSelector((s) => s.cart);
  const {} = useLocation();
  const [username, setUsermname] = useState("");
  const [password, setPassword] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((s) => s.auth);
  const [error, setError] = useState(false);


  
  document.body.style.overflow = show ? "hidden" : "auto";
  if (pathname.includes("admin")) {
    return <></>;
  }

  const defaultCase = () => {
    setShow(false);
    setUsermname("");
    setPassword("");
    setError(false);
  };
  const register = () => {
    if (username === "alpha" && password === "2009") {
      dispatch({ type: LOG_IN, payload: { username, password } });
      navigate("/admin");
    } else {
      setError(true);
    }
  };

  const checkAdmin = () => {
    if (auth) {
      return navigate("/admin");
    }
    setShow(true);
  };

  return (
    <>
      <div className="nav__container">
        <div className="container">
          <div className="navbar">
            <Link
              to={"/"}
              // </div>contentEditable={true}
              className="nav__logo"
            >
              alpha
            </Link>
            <button className="btn nav__katalog">
              <AiOutlineMenu />
              <span>Katalog</span>
            </button>
            
            <div className="nav__search">
              <input type="text" placeholder="Qidirish..." />
              <button>
                <AiOutlineSearch />
              </button>
            </div>

            <div className="nav__items">
              <Link to={"/taqoslash"} className="nav__item">
                <BiBarChart />
                <p>Taqoslash</p>
              </Link>
              <Link to={"/like"} className="nav__item">
                <AiOutlineHeart />
                <p>Sevimlilar</p>
              </Link>
              <Link to={"/cart"} className="nav__item">
                <SlBasket />
                <p>Savatcha</p>
                <span className="nav__circle">{cart?.length}</span>
              </Link>
              <div onClick={checkAdmin} className="nav__item">
                <BsPerson />
                <p>Kirish</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show ? (
        <>
          <div onClick={defaultCase} className="nav__shadow"></div>
          <div className="nav__login">
            <FiX onClick={defaultCase} className="nav__close" />
            <span className="error" style={{ opacity: error ? 1 : 0 }}>
              username yoki password xato
            </span>
            <input
              className="ad__inputs"
              value={username}
              onChange={(e) => setUsermname(e.target.value)}
              type="text"
              placeholder="username"
            />
            <input
              className="ad__inputs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <button onClick={register}>Login</button>
          </div>
        </>
      ) : (
        <></>
      )}
      <></>
    </>
  );
}

export default Navbar;
