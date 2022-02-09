import Swal from "sweetalert2";

/**
 * TOAST FUNCTION USING SWEETALERT
 * @param {*} title?: Pass the title {OPTIONAL} || Default = ""
 * @param {*} message?: Pass the message {OPTIONAL} || Default = "Something went wrong"
 * @param {*} toastIcon? Pass the Icon {OPTIONAL} || Default = INFO
 * @param {*} time? Pass the Time {OPTIONAL} || Default = 3500
 * @param {*} default Pass empty string {""} in the right order to activate the default values toast("", Something went wrong, "info", 3500)
 * ?? ICON-TYPES : error, info, success, warning, question
 * @returns ToastModal at the top right corner of the screen.
 */
const Toast = (title, message, toastIcon, time) => {
  Swal.fire({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: time || 3500,
    icon: toastIcon || "info",
    title: title || "",
    text: message || "Something went wrong!",
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
};

/**
 * ALERT FUNCTION USING SWEETALERT
 */
// const alert = (value: string): void => {
//   Swal.fire(value);
// };

export default Toast;
