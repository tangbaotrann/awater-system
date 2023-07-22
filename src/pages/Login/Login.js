/* eslint-disable react/no-unescaped-entities */
import "./Login.css";
import { useState } from "react";
import background from "../../asset/images/MideaGM_animation_v3.gif";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Form, Input, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  // const [login, setLogin] = useState({
  //     username: '',
  //     password: '',
  // });
  // const [error, setError] = useState({
  //     usernameError: '',
  //     passwordError: '',
  // });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const hanldeOnChange = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     setLogin({
  //         ...login,
  //         [name]: value,
  //     });
  // };

  // const hanldeLogin = async () => {
  //     if (!login.username) {
  //         setError({ ...error, usernameError: 'vui lòng điền email hoặc tên đăng nhập' });
  //         return;
  //     }

  //     if (!login.password) {
  //         setError({ ...error, passwordError: 'vui lòng điền mật khẩu' });
  //         return;
  //     }

  //     try {
  //         setIsLoad(true);
  //         const res = await loginRequest(login.username, login.password);
  //         if (res && res.data && res.status === 200) {
  //             setIsLoad(false);
  //             const { token, ...rest } = res.data;
  //             if (res.data?.listRoles?.includes('Manager')) {
  //                 localStorage.setItem('user', JSON.stringify(rest));
  //                 localStorage.setItem('token', token);
  //                 dispatch(doLoginAction(rest));
  //                 navigate('/admin');
  //             }
  //         }
  //     } catch (error) {
  //         setIsLoad(false);
  //         notification.error({
  //             message: 'Error',
  //             description: error?.response?.data,
  //         });
  //     }
  // };

  return (
    <Form className="form position-relative">
      <img src={background} alt="background" className="background-gif" />
      <br></br>
      <main className="login position-absolute top-50 start-50 translate-middle blur">
        <h1 className="text-center fw-bold text-white">Đăng nhập</h1>
        <br></br>
        <div className="mb-3">
          <Form.Item
            name="Tên đăng nhập"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên đăng nhập!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
        </div>
        <div className="mb-3">
          <Form.Item
            name="Mật khẩu"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </div>
        <Form.Item className="text-center">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Đăng nhập
          </Button>
        </Form.Item>
        {/* <footer className="d-flex">
          <NavLink to="/forgot-password" className="ms-1 text-white">
            Quên mật khẩu
          </NavLink>
        </footer> */}
      </main>
    </Form>
  );
};

export default Login