import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-semibold text-green-600">
        Home
      </h1>

      <Link
        className="p-2 border-2 border-green-600 hover:bg-green-600 hover:text-white"
        to="/typing"
      >
        Typing
      </Link>
    </div>
  );
}

export default Home;
