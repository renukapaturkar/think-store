import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const LoaderSpinner = () => {
  return (
    <Loader
      style={{ position: "absolute", top: "50%", left: "50%" }}
      type="TailSpin"
      color="#475569"
      height={80}
      width={80}
      timeout={3000}
    />
  );
};
