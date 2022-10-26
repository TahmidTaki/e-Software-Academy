import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaGoogle, FaGithubSquare } from "react-icons/fa";

const Login = () => {
  const { logIn, googleLogin, gitHubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
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
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .then((err) => {
        // console.log(err);
      });
  };

  const handleGitHubSignIn = () => {
    gitHubSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .then((err) => {
        // console.log(err);
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
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                Do not have an account?
                <Link
                  to="/register"
                  className="text-gray-700 underline dark:text-gray-200"
                >
                  {" "}
                  Register Here
                </Link>
                .
              </p>
            </div>
            <div className="form-control mt-6">
              <p>{error.message}</p>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div>
            <div className="divider">OR</div>
            <p>
              <span>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline btn-wide"
                >
                  <FaGoogle className="text-green-700 mr-2" /> Sign in with
                  Google
                </button>
              </span>
              <span>
                <button
                  className="btn btn-outline btn-wide mt-2"
                  onClick={handleGitHubSignIn}
                >
                  <FaGithubSquare className="text-red-700 mr-2" /> Sign in with
                  GitHub
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
