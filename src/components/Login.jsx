// import auth from "../firebase/firebase.config";
import { useContext, useState } from "react";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(true);

  const { user, signInUser, googleLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password);
    e.target.reset();
  };

  const handleGooglePopup = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-2">Login Now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-4 text-xl"
                >
                  {show ? <BiHide /> : <BiShowAlt />}
                </span>
              </div>

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
            <p>
              Already a user? Please <Link to="/register">Register</Link>
            </p>
          </form>
          <p>
            <button onClick={handleGooglePopup} className="btn">
              Google
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
