import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <header>
        <Link to="/">

        <img
          className="logo"
          src="https://files.playa.pl/img332/dd/b3/0b/Star_Wars_Logo_4_800x450.jpg"
          alt=""
          />
          </Link>
        <div>
          <Link to="/people">People</Link>
          <Link to="/planets">Planets</Link>
          <Link to="/starships">Starships</Link>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Main;
