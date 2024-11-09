import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import { MyContext } from "../../App";

import patern from "../../assets/images/patern.jpg";
import googleIcon from "../../assets/images/googleIcon.png";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig'; // Import the configured axios instance


const Login = () => {
  const [inputIndex, setInputIndex] = useState(null);

  const [isShowPassword, setisShowPassword] = useState(false);

  const context = useContext(MyContext);

  useEffect(() => {
    context.setisHideSidebarAndHeader(true);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  };


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;

    if (!email) {
      setEmailError('Email không được để trống.');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Mật khẩu không được để trống.');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (hasError) return;

    try {
      const response = await axios.post('/auth/admin/login', {
        email,
        password,
      });
      
      localStorage.setItem('token', response.data.token);
      navigate('/'); // Replace '/dashboard' with your target route
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setPasswordError('Email hoặc mật khẩu không hợp lệ.');
      } else {
        setPasswordError('Đăng nhập không thành công. Vui lòng thử lại.');
      }
    }
  };



  return (
    <>
      <img src={patern} className="loginPatern" alt="" />
      <section className="loginSection">
        <div className="loginBox">
          <div className="logo text-center">
            <img src={Logo} width="60px" alt="" />
            <h5 className="font-weight-bold">Login to Hotash</h5>
          </div>

          <div className="wrapper mt-3 card border ">
            <form onSubmit={handleSubmit}>
              <div
                className={`form-group position-relative ${
                  inputIndex === 0 && "focus"
                }`}
              >
                <span className="icon">
                  <MdEmail />
                </span>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="enter your email"
                  onFocus={() => focusInput(0)}
                  onBlur={() => setInputIndex(null)}
                />
                 {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
              </div>
              <div
                className={`form-group position-relative ${
                  inputIndex === 1 && "focus"
                }`}
              >
                <span className="icon">
                  <RiLockPasswordFill />
                </span>
                <input
                  type={`${isShowPassword === true ? "text" : "password"}`}
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="enter your password"
                  onFocus={() => focusInput(1)}
                  onBlur={() => setInputIndex(null)}
                />
                <span
                  className="toggleShowPassword"
                  onClick={() => setisShowPassword(!isShowPassword)}
                >
                  {isShowPassword === true ? <IoMdEyeOff /> : <IoMdEye />}
                </span>
                {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
              </div>

              <div className="form-group">
                <Button className="btn-blue btn-lg w-100 btn-big" type="submit">
                  Sign In
                </Button>
              </div>

              <div className="form-group text-center mb-0">
                <Link to={"/forgot-password"} className="link">
                  FORGOT PASSWORD
                </Link>
                <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                  <span className="line"></span>
                  <span className="txt">or</span>
                  <span className="line"></span>
                </div>

                <Button
                  variant="outlined"
                  className="w-100 btn-lg btn-big loginWithGoogle"
                >
                  <img src={googleIcon} width="25px" alt="" /> &nbsp; Sign In
                  with Google
                </Button>
              </div>
            </form>
          </div>

          <div className="wrapper mt-3 card border footer p-3">
            <span className="text-center">
              Don't have an account?
              <Link to={"/signUp"} className="link color ml-2">
                Register
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
