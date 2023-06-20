import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmojiNatureOutlinedIcon from "@mui/icons-material/EmojiNatureOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import "./NavBar.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/canada.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>CA</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Occasions
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Flowers
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Sympathy
            </Link>
          </div>
        </div>
        <div className="center">
          <div className="item">
            <Link className="link" to="/">
              <EmojiNatureOutlinedIcon />
              MAGNOLIAS
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contacts
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons"></div>
          <SearchIcon />
          <PersonIcon />
          <FavoriteIcon />
          <div className="cartIcon" onClick={() => setOpen(!open)}>
            <ShoppingCartIcon />
            <span>{products.length}</span>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default NavBar;
