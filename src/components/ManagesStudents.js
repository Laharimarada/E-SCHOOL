import React, { useState } from "react";

const ManagesStudents = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    gender: "",
    email: "",
    classSection: "",
    category: "",
    grNumber: "",
    caste: "",
    religion: "",
    admissionDate: "",
    bloodGroup: "",
    height: "",
    weight: "",
    streetAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://e-school-backend-tecp.onrender.com/api/v1/students",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Handle success (e.g., clear form, show success message)
        alert("Student created successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          mobileNumber: "",
          gender: "",
          email: "",
          classSection: "",
          category: "",
          grNumber: "",
          caste: "",
          religion: "",
          admissionDate: "",
          bloodGroup: "",
          height: "",
          weight: "",
          streetAddress: "",
        });
      } else {
        // Handle error
        alert("Failed to create student");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the student");
    }
  };

  return (
    <form className="bg-white p-10 rounded-md" onSubmit={handleSubmit}>
      <div className="space-y-12">
        {/* Personal Information Section */}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Create Students
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="mobileNumber"
                  id="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <fieldset className="col-span-2">
              <legend className="text-sm leading-6 text-gray-900">
                Gender
              </legend>
              <div className="mt-6 flex gap-5">
                <div className="flex items-center gap-x-3">
                  <input
                    id="gender-male"
                    name="gender"
                    type="radio"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="gender-male"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="gender-female"
                    name="gender"
                    type="radio"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="gender-female"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Female
                  </label>
                </div>
              </div>
            </fieldset>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="classSection"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Class Section
              </label>
              <div className="mt-2">
                <select
                  id="classSection"
                  name="classSection"
                  value={formData.classSection}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="General">General</option>
                  <option value="BC">BC</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="grNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                GR Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="grNumber"
                  id="grNumber"
                  value={formData.grNumber}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="caste"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Caste
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="caste"
                  id="caste"
                  value={formData.caste}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="religion"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Religion
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="religion"
                  id="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="admissionDate"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Admission Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="admissionDate"
                  id="admissionDate"
                  value={formData.admissionDate}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="bloodGroup"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Blood Group
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="bloodGroup"
                  id="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="height"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Height
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="height"
                  id="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="weight"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Weight
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="weight"
                  id="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ManagesStudents;
