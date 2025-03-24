import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTasks(data.slice(0, 10)))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  const formik = useFormik({
    initialValues: {
      taskname: "",
      taskdesc: "",
    },
    validationSchema: Yup.object({
      taskname: Yup.string().required("Task name is required"),
      taskdesc: Yup.string().required("Task description is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (editingIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editingIndex ? values : task
        );
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        fetch(API_URL, {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((newTask) => setTasks([...tasks, newTask]));
      }
      resetForm();
    },
  });

  const handleEdit = (index) => {
    setEditingIndex(index);
    formik.setValues(tasks[index]);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks = tasks.filter((task) =>
    task.taskname?.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedTasks = [...filteredTasks].sort((a, b) =>
    a[sortBy]?.localeCompare(b[sortBy])
  );

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100 px-6 py-12">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">To-Do List</h2>

        {/* Search & Sort */}
        <div className="flex mb-4 space-x-2">
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <select
            className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="taskname">Sort by Name</option>
            <option value="taskdesc">Sort by Description</option>
          </select>
        </div>

        {/* Task Form */}
        <form onSubmit={formik.handleSubmit} className="mb-4">
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Task Name:
            </label>
            <input
              type="text"
              name="taskname"
              value={formik.values.taskname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.taskname && formik.errors.taskname && (
              <div className="text-red-500 text-sm">{formik.errors.taskname}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Task Description:
            </label>
            <input
              type="text"
              name="taskdesc"
              value={formik.values.taskdesc}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.taskdesc && formik.errors.taskdesc && (
              <div className="text-red-500 text-sm">{formik.errors.taskdesc}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {editingIndex !== null ? "Update Task" : "Add Task"}
          </button>
        </form>

        {/* Task List */}
        <ul>
          {sortedTasks.map((task, index) => (
            <li key={index} className="p-3 border-b flex justify-between items-center">
              <div>
                <p className="font-semibold">{task.taskname}</p>
                <p className="text-gray-600">{task.taskdesc}</p>
              </div>
              <div className="space-x-2">
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-300"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Section */}
      <footer className="flex flex-col items-center justify-center bg-orange-400 text-white font-semibold py-6 px-6 rounded-lg shadow-md mt-12">
        <p className="text-lg mb-4">Not Yet Registered?</p>
        <Link to='create'>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300">
          Register Now 🚀
        </button>
        </Link>
      </footer>
    </div>
  );
};

export default Task;
