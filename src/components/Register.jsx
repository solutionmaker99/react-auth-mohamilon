import { useContext, useState } from "react";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const [show, setShow] = useState(true);

  const { createAccount } = useContext(AuthContext);

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    createAccount(email, password);
    e.target.reset();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-2">Register Now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleCreateAccount} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Don't have account? Please <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
