import { signup, signin } from '../../api/authAPI';
import { authenticate } from '../../auth';

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from '../../auth';
const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (user) => {
    try {
      const { data } = await signin(user);
      authenticate(data); // set localStorage
      setSuccess(true);
      setError("");
    } catch (error) {
      setError(error.response.data);
    }
  };
  const redirectUser = () => {
    if (success) {
      const id = isAuthenticated().user.id; // lấy ID trong localStorage
      if (id == 1) {
        return <Redirect to="/admin" />; // admin
      } else {
        return <Redirect to="/product" />; // member
      }
    }
  };
  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      {redirectUser()}
      <h2>Đăng nhập</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="d-block mt-2 text-danger">
            Email không được để trống
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="d-block mt-2 text-danger">
            Mật khẩu không được để trống
          </span>
        )}
      </div>
      <button className="btn btn-primary">Đăng nhập</button>
    </form>
  );
};

export default Signin;
