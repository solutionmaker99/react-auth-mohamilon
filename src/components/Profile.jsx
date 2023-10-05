import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      This is profile of : <span>{user.email}</span>
    </div>
  );
};

export default Profile;
