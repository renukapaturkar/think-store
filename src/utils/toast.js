import { Slide, toast } from "react-toastify";

export const toastText = (message) => {
  return toast.dark(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2500,
    draggablePercent: 60,
    hideProgressBar:true,
    transition:Slide
  });
};