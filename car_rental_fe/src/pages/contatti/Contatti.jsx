import Navbar from "../../components/navbar/Navbar";

const Contatti = () => {
  return (
    <div>
      <Navbar />
      <div className="contatti">
        <div className="sedi">
          <h2 className="sedi-title">Le nostre sedi</h2>
          <br />
          <div className="items-sedi">
            <h3>Roma tel. 12345678</h3>
            <h3>Milano tel. 12345678</h3>
            <h3>Napoli tel. 12345678</h3>
          </div>
        </div>
        <br />
        <div className="items-contatti">
          <h2>
            email: <a href="#">cr.roma@email.com</a>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Contatti;
