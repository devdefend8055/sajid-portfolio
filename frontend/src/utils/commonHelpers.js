import { toast } from "react-toastify";

export const required = (value) => {
    if (!value || value.trim() === "") {
        return "This field is required";
    }
    return "";
};

export const validMail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !regex.test(value)) {
        return "Please enter a valid email";
    }
    return "";
};

export const validMobile = (value) => {
    const regex = /^[6-9]\d{9}$/;
    if (value && !regex.test(value)) {
        return "Please enter a valid mobile number";
    }
    return "";
};

export const validateForm = (formData, rules) => {
    const errors = {};
    for (const field in rules) {
        for (const rule of rules[field]) {
            const error = rule(formData[field]);
            if (error) {
                errors[field] = error;
                break;
            }
        }
    }
    return errors;
};

export const errorToast = (message) => {
    toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const promiseToast = async (promiseFn, loadingMsg, successMsg, errorMsg) => {
    try {
        // toast.info(loadingMsg, { autoClose: 2000 });
        await promiseFn();
        toast.success(successMsg, { autoClose: 3000, position: "top-center" });
    } catch (error) {
        toast.error(errorMsg || "Something went wrong", { autoClose: 3000, position: "top-center" });
    }
};
