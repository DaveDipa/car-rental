import "./footer.css"
export default function Footer() {
  return (
    <footer className="footer-container ">
      <div className="footer-items row">
        <div className="footer-item col">Email: <a href="">c.rental.roma@email.it</a></div>
        <div className="footer-item col">Telefono: 123987456</div>
        <div className="footer-item footer-sedi col">
          Le nostre sedi:
          <div className="footer-sede ">Viale Roma 1</div>
          <div className="footer-sede ">Viale dell'Oceano Atlantico 23</div>
          <div className="footer-sede ">Via di Corso francia 76</div>
        </div>
      </div>
    </footer>
  );
}
