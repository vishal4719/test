import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';  // Import the Header component
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    photo: '',
    surname: '',
    gender: '',
    studentPhone: '',
    studentEmail: '',
    branch: '',
    div: '',
    fathersName: '',
    mothersName: '',
    parentEmail: '',
    parentPhone: '',
    admissionYear: '',
    address: '',
    pincode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const validateForm = () => {
    const mandatoryFields = [
      'studentName',
      'surname',
      'gender',
      'studentPhone',
      'studentEmail',
      'branch',
      'div',
      'fathersName',
      'mothersName',
      'parentPhone',
      'admissionYear',
      'address',
      'pincode',
    ];

    for (const field of mandatoryFields) {
      if (!formData[field]) {
        toast.error(`Please fill out the ${field} field.`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8080/api/signup', {
          student_name: formData.studentName,
          surname: formData.surname,
          gender: formData.gender,
          stud_phone_no: formData.studentPhone,
          stud_email: formData.studentEmail,
          Branch: formData.branch,
          Division: formData.div,
          father_name: formData.fathersName,
          mother_name: formData.mothersName,
          parent_email: formData.parentEmail || '', // Make optional
          parent_phone_no: formData.parentPhone,
          year_of_admission: formData.admissionYear,
          student_address: formData.address,
          pincode: formData.pincode
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        if (response.status === 200) {
          toast.success('Account created successfully!');
          setTimeout(() => {
            window.location.href = '/';
          }, 2000);
        }
      } catch (error) {
        console.error('Signup Error:', error.response?.data || error.message);
        toast.error(
          error.response?.data?.message || 
          'An error occurred while creating the account.'
        );
      }
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 w-auto">
      <Header /> {/* Add the Header component here */}
      <div className="w-full max-w-3xl bg-slate-10 shadow-md rounded-lg p-6 m-2">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInputChange}
          />
          <input
            type="file"
            name="photo"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleFileChange}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInputChange}
          />
          <select
            name="gender"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="text"
            name="studentPhone"
            placeholder="Student Phone"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="studentEmail"
            placeholder="Student Email"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="branch"
            placeholder="Branch"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="div"
            placeholder="Division"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="fathersName"
            placeholder="Father's Name"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="mothersName"
            placeholder="Mother's Name"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="parentEmail"
            placeholder="Parent Email (Optional)"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="parentPhone"
            placeholder="Parent Phone"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="admissionYear"
            placeholder="Year of Admission"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInputChange}
          />
          <textarea
            name="address"
            placeholder="House Address"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-1 md:col-span-2"
            onChange={handleInputChange}
          ></textarea>
          <input
            type="number"
            name="pincode"
            placeholder="Pincode"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInputChange}
          />
        </form>
        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;