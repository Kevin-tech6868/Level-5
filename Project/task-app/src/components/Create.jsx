import React from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const Create = () => {
    

    const formik = useFormik({
        initialValues:{
            username:'',
            age:'',
            email:'',
            password:'',
            confirmpassword:'',
        },
        validate:(values)=>{

            const errors = {}
            if(!values.username){
                errors.username = "Username is Required"
            }
            if(!values.age){
                errors.age = "Age is Required"
            }
            if(!values.email){
                errors.email = "Email is Required"
            }
            if(!values.password){
                errors.password = "Password is Required"
            }
            if(!values.confirmpassword){
                errors.confirmpassword = "Confirm Password is Required"
            }
            return errors
        },
        onSubmit:(values)=>{
            alert("Registration is successful")
            console.log(values)
        }
        
    })
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={formik.handleSubmit}>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full sm:w-96'>
                <h1 className='text-2xl font-bold text-center mb-6'>Create Account</h1>
                <div className="mb-4">
                    <label className='block text-gray-700 font-medium mb-2'>Username:</label>
                    <input
                    type='text'
                    name='username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                    {formik.touched.username && formik.errors.username ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.username} </div>
                    ): null}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Age:</label>
                    <input
                    type='number'
                    name='age'
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                    {formik.touched.age && formik.errors.age ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.age} </div>
                    ): null}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Email:</label>
                    <input
                    type='email'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.email} </div>
                    ): null}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Password:</label>
                    <input
                    type='text'
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                    {formik.touched.password && formik.errors.password ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.password} </div>
                    ): null}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Confirm Password:</label>
                    <input
                    type='text'
                    name='confirmpassword'
                    value={formik.values.confirmpassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                    {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.confirmpassword} </div>
                    ): null}
                </div>
                <button
            type='submit'
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
                <Link to="/login">
        <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-blue-500 cursor-pointer hover:underline">Already Registered?</p>
        </div>
        </Link>

</div>
</form>
        
      
      
    </div>
  )
}

export default Create
