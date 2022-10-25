import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    logIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Stay up to date about courses upon logging into our website.
          </p>
          <img
            src="https://i.ibb.co/qgsg42r/107385-login.gif"
            className="h-52 w-52 rounded-lg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div>
            <span>-------------OR------------- </span>
            <p>
              <span>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline btn-wide"
                >
                  Sign in with Google
                </button>
              </span>
              <span>
                <button className="btn btn-outline btn-wide">
                  Sign in with GitHub
                </button>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
