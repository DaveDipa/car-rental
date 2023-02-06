import "./footer.css"
export default function Footer() {
  return (
    <footer className="footer-container ">
      <div className="footer-items row">
        <div className="footer-item col">email: <a href="">c.rental.roma@email.it</a></div>
        <div className="footer-item col">telefono 123987456</div>
        <div className="footer-item footer-sedi col">
          Le nostre sedi:
          <div className="footer-sede ">Viale Roma</div>
          <div className="footer-sede ">Viale dell'Oceano Atlantico</div>
          <div className="footer-sede ">Via di Corso francia</div>
        </div>
      </div>
    </footer>
  );
}
