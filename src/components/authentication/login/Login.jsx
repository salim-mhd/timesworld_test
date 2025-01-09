import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import {
  SlSocialFacebook,
  SlSocialGoogle,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import { useNavigate } from "react-router-dom";

// Validation Schema using Yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must include at least 1 uppercase letter")
    .matches(/[0-9]/, "Password must include at least 1 number")
    .matches(/[\W_]/, "Password must include at least 1 symbol"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/home");
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <div className="container d-flex align-items-center justify-content-md-between justify-content-center">
        {/* Left Section: Form */}
        <div className="login-form">
          <h2 className="text-center text-md-start">Sign In</h2>
          <p className="text-center text-md-start">
            <span className="text-dark fw-bold me-2">New user?</span>
            <a href="/signup">Create an account</a>
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control
                className="border-2 border-black rounded-0"
                type="email"
                placeholder="Username or email"
                {...register("email")}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Password Field */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control
                className="border-2 border-black rounded-0"
                type="password"
                placeholder="Password"
                {...register("password")}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Remember Me */}
            <Form.Group className="my-3 rounded-0" controlId="formCheckbox">
              <Form.Check
                className="custom-checkbox rounded-0"
                type="checkbox"
                label="Keep me signed in"
                {...register("remember")}
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100 rounded-0">
              Sign In
            </Button>
          </Form>

          <div className="social-login mt-4">
            <div className="line-container my-4">
              <hr className="line" />
              <span className="word">Or Sign In With</span>
              <hr className="line" />
            </div>

            <div className="d-flex justify-content-center gap-3">
              {/* Google Icon */}
              <button className="social-icon">
                <SlSocialGoogle size={18} />
              </button>

              {/* Facebook Icon */}
              <button className="social-icon">
                <SlSocialFacebook size={18} />
              </button>

              {/* LinkedIn Icon */}
              <button className="social-icon">
                <SlSocialLinkedin size={18} />
              </button>

              {/* Twitter Icon */}
              <button className="social-icon">
                <SlSocialTwitter size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="login-illustration d-none d-md-block">
          <img
            src="https://img.freepik.com/free-vector/boy-holding-golden-key-background_1012-303.jpg?t=st=1736451416~exp=1736455016~hmac=f8fc48b6948c8f70e7d58a875753fa85b6b59d3d85def6aa255b7df08f95f509&w=900"
            alt="Key"
            className="key-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
