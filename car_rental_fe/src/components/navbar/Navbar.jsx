import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar justify-content-between">
      <a className="navbar-brand mx-3">CAR RENTAL ROMA</a>
      <div>
      <Link className="navbar-brand mx-3" to={"/"}>Home</Link>
      <Link to={"/contatti"} className="navbar-brand mx-3">contatti</Link>
      <a className="navbar-brand mx-3">chi siamo</a>
      </div>


    </nav>
  );
}
