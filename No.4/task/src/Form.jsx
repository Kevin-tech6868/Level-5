import React, { useState } from "react";
import { useFormik } from "formik";

const Form = () => {
  const [users, setUsers] = useState([]); // State to store user records
  const [editingIndex, setEditingIndex] = useState(null); // Index for editing
  
  const formik = useFormik({
    initialValues: { username: "", age: "", place: "" },
    validate: (values) => {
      const errors = {};
      if (!values.username) errors.username = "Username is required";
      if (!values.age) errors.age = "Age is required";
      if (!values.place) errors.place = "Place is required";
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      if (editingIndex !== null) {
        updateUser(values);
      } else {
        addUser(values);  
      }
      resetForm();
    },
  });

  // Add user (CREATE)
  const addUser = (user) => {
    setUsers([...users, user]); // Append user to the list
  };

  // Select user for editing (READ)
  const editUser = (index) => {
    setEditingIndex(index);
    formik.setValues(users[index]); // Set form values to selected user
  };

  // Update user (UPDATE)
  const updateUser = (updatedUser) => {
    const updatedUsers = [...users];
    updatedUsers[editingIndex] = updatedUser;
    setUsers(updatedUsers);
    setEditingIndex(null);
  };

  // Delete user (DELETE)
  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-2xl font-bold text-center mb-6">
            Simple CRUD Form
          </h1>

          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.username}
              </div>
            )}
          </div>

          {/* Age Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Age:</label>
            <input
              type="number"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.age && formik.errors.age && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.age}</div>
            )}
          </div>

          {/* Place Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Place:</label>
            <input
              type="text"
              name="place"
              value={formik.values.place}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.place && formik.errors.place && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.place}</div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            {editingIndex !== null ? "Update User" : "Add User"}
          </button>
        </form>

        {/* User List */}
        <h2 className="text-xl font-bold mt-6">Users List</h2>
        <ul className="mt-3">
          {users.map((user, index) => (
            <li key={index} className="flex justify-between items-center border-b py-2">
              <span>{user.username} ({user.age}) - {user.place}</span>
              <div>
                <button
                  onClick={() => editUser(index)}
                  className="text-yellow-500 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(index)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;
