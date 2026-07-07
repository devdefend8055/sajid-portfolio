import React, { useState } from "react";
import { validateForm, required, validMobile, validMail, errorToast, promiseToast } from "../../utils/commonHelpers";


const WorkTogetherForm = () => {

    const apiUrl = import.meta.env.VITE_API_URL;

    console.log(apiUrl,"apiurldd");


    const initialState = {
        formData: {
            firstName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            nameofOrg: "",
            message: "",
        },
        errors: {
            firstName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            nameofOrg: "",
            message: "",
        },
    };

    const [formState, setFormState] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            formData: {
                ...prev.formData,
                [name]: value,
            },
            errors: {
                ...prev.errors,
                [name]: "",
            },
        }));
    };

    const handleModalClose = () => {
        setFormState(initialState);
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();

        const validationRules = {
            firstName: [required],
            lastName: [required],
            email: [required, validMail],
            mobileNumber: [required, validMobile],
        };

        const errors = validateForm(formState.formData, validationRules);

        if (Object.keys(errors).length > 0) {
            setFormState((prev) => ({
                ...prev,
                errors: errors,
            }));
            errorToast("Please fill all required fields correctly!");
            return;
        }

        setLoading(true);
        console.log("formData", formState.formData);

        await promiseToast(
            async () => {
                await fetch(`${apiUrl}/api/contact`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formState.formData),
                });
                handleModalClose();
                setLoading(false);
            },
            "Submitting...",
            "Your enquiry has been submitted successfully!",
            "Submission failed"
        );

    };
    return (
        <div className='work-together-form'>
            <form onSubmit={onSubmitForm}>
                <div className="row">
                    {/* Full Name */}
                    <div className="col-sm-6">
                        <div className="mb-3">
                            {/* <label htmlFor="firstName" className="form-label">
                                Full Name*
                            </label> */}
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter your First Name*"
                                value={formState.formData.firstName}
                                onChange={handleChange}
                            />
                            {formState.errors.firstName && (
                                <span className="error text-danger">
                                    {formState.errors.firstName}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Organisation Name */}
                    <div className="col-sm-6">
                        <div className="mb-3">
                            {/* <label htmlFor="lastName" className="form-label">
                                Name of the Organisation*
                            </label> */}
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter your Last Name*"
                                value={formState.formData.lastName}
                                onChange={handleChange}
                            />
                            {formState.errors.lastName && (
                                <span className="error text-danger">
                                    {formState.errors.lastName}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="col-sm-6">
                        <div className="mb-3">
                            {/* <label htmlFor="email" className="form-label">
                                Email*
                            </label> */}
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter your Email*"
                                value={formState.formData.email}
                                onChange={handleChange}
                            />
                            {formState.errors.email && (
                                <span className="error text-danger">
                                    {formState.errors.email}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Mobile Number */}
                    <div className="col-sm-6">
                        <div className="mb-3">
                            {/* <label htmlFor="mobileNumber" className="form-label">
                                Mobile Number*
                            </label> */}
                            <input
                                type="tel"
                                className="form-control"
                                id="mobileNumber"
                                name="mobileNumber"
                                placeholder="Enter your Mobile Number*"
                                value={formState.formData.mobileNumber}
                                onChange={handleChange}
                            />
                            {formState.errors.mobileNumber && (
                                <span className="error text-danger">
                                    {formState.errors.mobileNumber}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* nameofOrg */}
                    <div className="col-12">
                        <div className="mb-3">
                            {/* <label htmlFor="nameofOrg" className="form-label">
                                nameofOrg*
                            </label> */}
                            <input
                                type="text"
                                className="form-control"
                                id="nameofOrg"
                                name="nameofOrg"
                                placeholder="Enter Name of Organization"
                                value={formState.formData.nameofOrg}
                                onChange={handleChange}
                            />
                            {formState.errors.nameofOrg && (
                                <span className="error text-danger">
                                    {formState.errors.nameofOrg}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* message */}
                    {/* message */}
                    <div className="col-12">
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                placeholder="Enter your Message"
                                rows="4"
                                value={formState.formData.message}
                                onChange={handleChange}
                            />
                            {formState.errors.message && (
                                <span className="error text-danger">
                                    {formState.errors.message}
                                </span>
                            )}
                        </div>
                    </div>


                    {/* Submit Button */}
                    <div className="col-md-12">
                        <div className="modal-submit-sec d-flex justify-content-center mt-md-3 mt-2">
                            <button
                                className="theme-btn"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default WorkTogetherForm