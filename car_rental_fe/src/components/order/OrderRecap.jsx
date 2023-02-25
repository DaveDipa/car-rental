import "./orderRecap.css";

export default function OrderRecap({ choosedOrder }) {
  return (
    <div className="orderRecap">
      <div className="orderRecap-container">
        <div key={choosedOrder.id}>
          <h2>ID ordine: {choosedOrder.id}</h2>
          {/* <h2>Modello: {choosedOrder.car.id}</h2> */}
          <h3>Ritiro veicolo: {choosedOrder.rentalDateStart}</h3>
          <h3>Consegna veicolo: {choosedOrder.rentalDateEnd}</h3>
          <h3>Totale: € {choosedOrder.totalPrice}</h3>
        </div>
      </div>
    </div>
  );
}
