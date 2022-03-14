import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import QRcode from '../img/QRcode.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import GoogleIcon from '@mui/icons-material/Google';
import ShopIcon from '@mui/icons-material/Shop';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getUser, removeUser } from '../app/UserSlice';

import AuthProvider from './Auth/SignIn/AuthProvider';

function Header() {
  const [Search, setSearch] = useState('');

  const [openMenu, setOpenmenu] = useState(false);

  const useUser = AuthProvider();

  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.User.user);

  const history = useHistory();
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  useEffect(() => {
    if (useUser) {
      dispatch(getUser(useUser));
    }
  }, [useUser, dispatch]);

  //khi khong co user dang nhap
  const handleCart = (user) => {
    console.log('🚀 ~ file: Header.jsx ~ line 51 ~ handleCart ~ user', user);
    if (!user) {
      history.push('/login');
    } else {
      history.push('/cart');
    }
  };

  //dang xuat
  const handelSignOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        throw error;
      });
  };

  const onMenu = () => {
    setOpenmenu(!openMenu);
  };

  return (
    <div className="header">
      {openMenu ? (
        <span
          onClick={() => onMenu()}
          className="header_menu_close header_menu"
        >
          <CloseIcon />
        </span>
      ) : (
        <span onClick={() => onMenu()} className="header_menu_open header_menu">
          <MenuIcon />
        </span>
      )}

      {/* header top */}

      <div className="top">
        <div className="top_right">
          <div className="top_right_list">Trở thành người bán trên Shooee</div>

          <div className="top_right_list">
            <div className="top_right_list_dowload">
              Tải ứng dụng
              <div className="qr">
                <div className="qr_code">
                  <img src={QRcode} alt="qrcode" />
                </div>
                <div className="qr_app">
                  <div className="qr_app_gg">
                    <GoogleIcon /> Google
                  </div>
                  <div className="qr_app_appstore">
                    Shop
                    <ShopIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="top_right_list_connect">
              Kết nối <FacebookIcon /> <InstagramIcon />
            </div>
          </div>
        </div>

        <div className="top_left">
          <div className="top_left_item">
            <NotificationsIcon />
            Thông báo
          </div>
          <div className="top_left_item">
            <HelpOutlineIcon />
            Hỗ trợ
          </div>
          {dataUser ? (
            <div className="top_left_item">
              {dataUser.displayName}

              <div
                onClick={() => {
                  handelSignOut();
                }}
                className="top_left_item_sign_out"
              >
                Đăng Xuất
              </div>
            </div>
          ) : (
            <div className="top_left_item">
              <Link to="/login">Đăng nhâp</Link>
            </div>
          )}
        </div>
      </div>

      {/* header_mid */}

      <div className="mid">
        <div className="logo">
          <Link to="/">Shopee</Link>
        </div>
        <div className="search">
          <input
            className="search_input"
            type="text"
            value={Search}
            onChange={handleSearch}
            placeholder="tim kiem o day"
          />
          <Link to={`/search/${Search}`}>
            <button className="search_node">
              <SearchIcon />
            </button>
          </Link>
        </div>
        <div className="cart">
          <div
            onClick={() => {
              handleCart(dataUser);
            }}
          >
            <ShoppingCartIcon style={{ fontSize: '40px', color: '#fff' }} />
          </div>
        </div>
      </div>

      {/* header-bottom */}

      <div className="bottom">
        <div className="bottom_item">
          <Link to="/clothse">Quần áo</Link>
        </div>
        <div className="bottom_item">
          <Link to="/jewalry">Trang sứt</Link>
        </div>
        <div className="bottom_item">
          <Link to="/electric">Đồ điện tử</Link>
        </div>
        <div className="bottom_item">
          <Link to="/furniture">Nội thất</Link>
        </div>
        <div className="bottom_item">
          <Link to="/shose">Giày dép</Link>
        </div>
        <div className="bottom_item">
          <Link to="/other">khác</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
