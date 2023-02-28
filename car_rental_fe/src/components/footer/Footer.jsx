import "./footer.css"
export default function Footer() {
  return (
    <footer id="footer" className="footer-container ">
      <div className="footer-items row">
        <p className="footer-item col-lg-4 col-sm-8">Email: <a href="">c.rental.roma@email.it</a></p>
        <p className="footer-item col-lg-4 col-sm-8">Telefono: 06/14573957</p>
        <div className="footer-item footer-sedi col-lg-4 col-sm-8">
          La nostra sede:
          <p className="footer-sede ">Viale Roma 1a, RM </p>
        </div>
      </div>
    </footer>
  );
}
