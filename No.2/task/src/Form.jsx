import React from 'react';
import { useFormik } from 'formik';

const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: '',
        },
        onSubmit: async (values) => {
            try {
                const response = await fetch('https://reqres.in/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Form submitted successfully:', data);
                } else {
                    console.error('Failed to submit form:', response.statusText);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        },
    });

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Submit
                </button>
                <div className="flex justify-between items-center mt-4">
                        <p className="text-sm text-blue-500 cursor-pointer hover:underline">Forgot Password?</p>
                        <p className="text-sm text-blue-500 cursor-pointer hover:underline">Create Account</p>
                    </div>
            </form>
        </div>
    );
};

export default Form;
