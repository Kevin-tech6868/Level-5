import React from 'react';
import { useFormik } from 'formik';
import {Link} from 'react-router-dom';  

const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.username) {
                errors.username = "Username is required";
            }
            if (!values.password) {
                errors.password = "Password is required";
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log("Form submitted successfully!", values);
        }
    });

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
                <form onSubmit={formik.handleSubmit}>
                    <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

                    {/* Username Input */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} // Added onBlur
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.username}</div>
                        ) : null}
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} // Added onBlur
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                        ) : null}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>

                    {/* Other Links */}
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-sm text-blue-500 cursor-pointer hover:underline">Forgot Password?</p>
                        <Link to="/create">
                        <p className="text-sm text-blue-500 cursor-pointer hover:underline">Create Account</p>
                        </Link>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
