import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export default function EditProfile() {
    const [showToast, setShowToast] = useState(false);
  const data = useLoaderData();
console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;

    const age = form.age.value;
    const mobileNumber = form.mobileNumber.value;

    const userData = {
      name,
      age,
      mobileNumber,
      //   email: data?.email,
    };
    if (!window.confirm('Are you sure you want to add this item?')) {
        return;
      }
    fetch(
      `http://localhost:5000/user/${data?.email}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
      setShowToast(true);
         setTimeout(() => setShowToast(false), 3000);
          form.reset();
  };
  return (
    <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
  <h1 className="text-3xl font-semibold mb-7 text-gray-800">Edit Profile</h1>
  {showToast && (
        <div className="toast toast-top toast-center">
        <div className="alert alert-info">
          <span>Add Sussessfully</span>
        </div>
      </div>
      )}
  <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
    <div className="flex flex-col">
      <label htmlFor="name" className="mb-2 text-gray-600">User Name</label>
      <input
        type="text"
        id="name"
        name="name"
        defaultValue={data?.name}
        className="py-2 px-3 border border-gray-300 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
    <div className="flex flex-col">
      <label htmlFor="email" className="mb-2 text-gray-600">User Email</label>
      <input
        type="text"
        id="email"
        name="email"
        value={data?.email}
        disabled
        className="py-2 px-3 border border-gray-300 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
    <div className="flex flex-col">
      <label htmlFor="age" className="mb-2 text-gray-600">User Age</label>
      <input
        type="text"
        id="age"
        name="age"
        className="py-2 px-3 border border-gray-300 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
    <div className="flex flex-col">
      <label htmlFor="mobileNumber" className="mb-2 text-gray-600">User Mobile</label>
      <input
        type="text"
        id="mobileNumber"
        name="mobileNumber"
        className="py-2 px-3 border border-gray-300 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
    <div className="flex justify-center">
      <input
        type="submit"
        value="Update Profile"
        className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition duration-300"
      />
    </div>
  </form>
</div>
  );
}