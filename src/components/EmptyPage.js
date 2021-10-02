import { Link } from "react-router-dom";

export const EmptyPage = () => {
  return (
    <div className="cartempty-container">
      <q>
        That’s the thing about books. They let you travel without moving your
        feet.
      </q>
      <div>This feels light, go get your favorites!</div>
      <Link to="/">
        <button className="">Shop Now</button>
      </Link>
    </div>
  );
};
