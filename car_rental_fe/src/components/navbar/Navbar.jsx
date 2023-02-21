import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar justify-content-between">
      <a className="navbar-brand mx-3">CAR RENTAL ROMA</a>
      <div>
      <Link className="navbar-brand mx-3" to={"/"}>Home</Link>
      <a href="#footer" className="navbar-brand mx-3">contatti</a>
      <Link className="navbar-brand mx-3" to={"/admin"}>Area riservata</Link>
      </div>


    </nav>
  );
}
