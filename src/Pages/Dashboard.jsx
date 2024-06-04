import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Dashboard = ({email}) => {
  const { user } = useAuth();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState();
  //const { email, password } = location.state || {};


useEffect(() => {
  fetch(`https://assignment-server-nine-olive.vercel.app/user/${user?.email}`)
    .then((res) => res.json())
    .then((data) => setUserInfo(data));
}, [user]);
console.log(userInfo);
return (
  <div className="dashboard min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div className="card w-96 bg-white shadow-xl rounded-lg p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome to Your Dashboard</h1>
      <div className="w-12 rounded-full ">
            <img src={user?.photoURL || "/public/placeholder.jpg"} />
          </div>
        
      {/* <figure>
        <img src={userInfo.img} alt="profile" className="object-cover w-96 h-100"/>
      </figure> */}
      <div className="text-center">
      <p className="text-xl mb-2">
          <span className="font-semibold">Name:</span> {userInfo?.name || "User"}
        </p>
        <p className="text-xl mb-2">
          <span className="font-semibold">Email:</span> {userInfo?.email}
        </p>
        
      </div>
      <div className="card-actions justify-center mt-6">
        {/* <button className="btn bg-blue-500 text-white w-full mb-2">
          Manage Account
        </button> */}
        <Link
          to={`/dashboard/profile/edit/${userInfo?._id}`}
          className="btn btn-neutral btn-md"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  </div>
);
};

export default Dashboard;
