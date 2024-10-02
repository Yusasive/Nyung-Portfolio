import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";
const checkEmailExists = async (email: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const existingEmails = ["test@example.com", "admin@example.com"];
      resolve(existingEmails.includes(email));
    }, 1000);
  });
};
const designerValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
    .test("checkEmail", "Email is already in use", async (email) => {
      if (email) {
        const emailExists = await checkEmailExists(email);
        return !emailExists;
      }
      return true;
    }),
  projectBudget: Yup.string().required("Project budget is required"),
  description: Yup.string().required("Description is required"),
});

const tutorValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
    .test("checkEmail", "Email is already in use", async (email) => {
      if (email) {
        const emailExists = await checkEmailExists(email);
        return !emailExists;
      }
      return true;
    }),
  interest: Yup.string().required("Interest is required"),
  level: Yup.string().required("Level is required"),
  about: Yup.string().required("About you is required"),
});

const ContactForm = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const designerFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      projectType: "",
      projectBudget: "",
      description: "",
    },
    validationSchema: designerValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await emailjs.send(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          values,
          "YOUR_USER_ID"
        );
        alert("Designer Form Data Sent Successfully!");
        resetForm();
      } catch (error) {
        alert("Failed to send designer form data. Please try again.");
      }
    },
  });

  const tutorFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      interest: "",
      level: "",
      about: "",
    },
    validationSchema: tutorValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await emailjs.send(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          values,
          "YOUR_USER_ID"
        );
        alert("Tutor Form Data Sent Successfully!");
        resetForm();
      } catch (error) {
        alert("Failed to send tutor form data. Please try again.");
      }
    },
  });

  return (
    <div className={`${isHomePage ? "bg-white" : "bg-[#91C2F2]"} flex flex-col justify-center items-center py-[50px]`}>
      <div className="bg-inherit px-4 lg:px-[60px] w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (designerFormik.isValid && designerFormik.dirty) {
              designerFormik.handleSubmit();
            } else if (tutorFormik.isValid && tutorFormik.dirty) {
              tutorFormik.handleSubmit();
            }
          }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl text-[#1E1B16] font-roboto-serif font-bold">
                Need a designer?
              </h2>

              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring border-[#494640] bg-inherit focus:ring-blue-200 placeholder:text-[#494640] placeholder:text-xl placeholder:font-lato placeholder:font-normal"
                    value={designerFormik.values.name}
                    onChange={designerFormik.handleChange}
                  />
                  {designerFormik.errors.name && (
                    <p className="text-red-500 text-sm">
                      {designerFormik.errors.name}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring border-[#494640] bg-inherit focus:ring-blue-200 placeholder:text-[#494640] placeholder:text-xl placeholder:font-lato placeholder:font-normal"
                    value={designerFormik.values.email}
                    onChange={designerFormik.handleChange}
                    onBlur={designerFormik.handleBlur}
                  />
                  {designerFormik.errors.email && (
                    <p className="text-red-500 text-sm">
                      {designerFormik.errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    name="projectType"
                    placeholder="Project Type (optional)"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring border-[#494640] bg-inherit focus:ring-blue-200 placeholder:text-[#494640] placeholder:text-xl placeholder:font-lato placeholder:font-normal"
                    value={designerFormik.values.projectType}
                    onChange={designerFormik.handleChange}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    name="projectBudget"
                    placeholder="Project Budget"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring border-[#494640] bg-inherit focus:ring-blue-200 placeholder:text-[#494640] placeholder:text-xl placeholder:font-lato placeholder:font-normal"
                    value={designerFormik.values.projectBudget}
                    onChange={designerFormik.handleChange}
                  />
                  {designerFormik.errors.projectBudget && (
                    <p className="text-red-500 text-sm">
                      {designerFormik.errors.projectBudget}
                    </p>
                  )}
                </div>
              </div>

              <textarea
                name="description"
                placeholder="Description"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring border-[#494640] bg-inherit focus:ring-blue-200 placeholder:text-[#494640] placeholder:text-xl placeholder:font-lato placeholder:font-normal"
                value={designerFormik.values.description}
                onChange={designerFormik.handleChange}></textarea>
              {designerFormik.errors.description && (
                <p className="text-red-500 text-sm">
                  {designerFormik.errors.description}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl text-[#1E1B16] font-roboto-serif font-bold">
                Need a tutor?
              </h2>

              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring border-[#494640] bg-inherit focus:ring-blue-200 placeholder:text-[#494640] placeholder:text-xl placeholder:font-lato placeholder:font-normal"
                    value={tutorFormik.values.name}
                    onChange={tutorFormik.handleChange}
                  />
                  {tutorFormik.errors.name && (
                    <p className="text-red-500 text-sm">
                      {tutorFormik.errors.name}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring border-[#494640] bg-inherit focus:ring-blue-200 placeholder:text-[#494640] placeholder:text-xl placeholder:font-lato placeholder:font-normal"
                    value={tutorFormik.values.email}
                    onChange={tutorFormik.handleChange}
                    onBlur={tutorFormik.handleBlur}
                  />
                  {tutorFormik.errors.email && (
                    <p className="text-red-500 text-sm">
                      {tutorFormik.errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    name="interest"
                    placeholder="Interest"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring border-[#494640] bg-inherit focus:ring-blue-200 placeholder:text-[#494640] placeholder:text-xl placeholder:font-lato placeholder:font-normal"
                    value={tutorFormik.values.interest}
                    onChange={tutorFormik.handleChange}
                  />
                  {tutorFormik.errors.interest && (
                    <p className="text-red-500 text-sm">
                      {tutorFormik.errors.interest}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    name="level"
                    placeholder="Level"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring border-[#494640] bg-inherit focus:ring-blue-200 placeholder:text-[#494640] placeholder:text-xl placeholder:font-lato placeholder:font-normal"
                    value={tutorFormik.values.level}
                    onChange={tutorFormik.handleChange}
                  />
                  {tutorFormik.errors.level && (
                    <p className="text-red-500 text-sm">
                      {tutorFormik.errors.level}
                    </p>
                  )}
                </div>
              </div>
              <textarea
                name="about"
                placeholder="About you"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring border-[#494640] bg-inherit focus:ring-blue-200 placeholder:text-[#494640] placeholder:text-xl placeholder:font-lato placeholder:font-normal"
                value={tutorFormik.values.about}
                onChange={tutorFormik.handleChange}></textarea>
              {tutorFormik.errors.about && (
                <p className="text-red-500 text-sm">
                  {tutorFormik.errors.about}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-[50px]">
            <button
              type="submit"
              className="bg-[#FC9569] text-white text-2xl font-bold font-inter py-2 px-6 rounded-full hover:bg-orange-500 transition flex items-center justify-center gap-2"
              disabled={
                designerFormik.isSubmitting || tutorFormik.isSubmitting
              }>
              {designerFormik.isSubmitting || tutorFormik.isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Details
                  <img
                    src="https://res.cloudinary.com/ddxssowqb/image/upload/v1727853855/duo_tone_xrpwmy.png"
                    alt="PapperSen"
                  />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
