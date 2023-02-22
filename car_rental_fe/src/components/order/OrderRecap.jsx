import { useState } from "react";

export default function OrderRecap({ choosedOrder}) {
  const [isLoading, setIsLoading] = useState(true);
  

  return (
    <div className="orderRecap">
      <div key={choosedOrder.id}>
        <h2>ID ordine: {choosedOrder.id}</h2>
        {/* <h2>Modello: {choosedOrder.car.id}</h2> */}
        <h3>Ritiro veicolo: {choosedOrder.rentalDateStart}</h3>
        <h3>Consegna veicolo: {choosedOrder.rentalDateEnd}</h3>
        <h3>Totale: {choosedOrder.totalPrice} euro</h3>
      </div>
    </div>
  );
}
