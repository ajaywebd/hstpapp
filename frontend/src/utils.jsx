import { toast } from "react-toastify";

// Function to handle success toast
export const handleSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right", // Correct way to specify position
    autoClose: 3000,
  });
};

// Function to handle error toast
export const handleError = (msg) => {
  toast.error(msg, {
    position: "top-right", // Correct way to specify position
    autoClose: 3000,
  });
};
