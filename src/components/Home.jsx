import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Home page wellcome : </h2>
    </div>
  );
};

export default Home;
