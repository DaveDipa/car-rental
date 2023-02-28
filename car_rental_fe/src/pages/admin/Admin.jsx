import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";

export default function Admin() {
  const [orders, setOrders] = useState([]);

  const defaultOrderUrl = "http://localhost:8080/api/order";

  const GetOrders = async () => {
    await fetch(defaultOrderUrl + "/all")
      .then((response) => response.json())

      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  };

  useEffect(() => {
    GetOrders();
  }, []);

  // FUNZIONE PER ELIMINARE ORDINE
  const deleteOrder = (id) => {
    console.log(id);
    fetch(defaultOrderUrl + "/delete/" + id, {
      method: "DELETE",
    }).then((response) => {
      console.log(response);
      GetOrders();
    });
  };

  return (
    <div>
      <div className="orders">
        <Link className="backHomeAdminLink" to={"/"}>
          <h4 className="backHomeAdmin">HOME</h4>
        </Link>
        <hr />
        <h1 className="orders-title">Area Amministratore</h1>
        <hr />

        <h1 className="orders-title">LISTA DEGLI ORDINI EFFETTUATI</h1>
        <div className="orders-container">
          {orders.length > 0 && (
            <div>
              {orders.map((order) => (
                <div className="orderItems" key={order.id}>
                  <div className="orderID">
                    <h2>ordine numero: {order.id}</h2>
                  </div>
                  <div className="orderInfo">
                    <h3>modello vettura: {order.car.model}</h3>
                    <h3>costruttore vettura: {order.car.brand}</h3>
                    <h3>data ritiro: {order.rentalDateStart}</h3>
                    <h3>data consegna: {order.rentalDateEnd}</h3>
                    <h3>totale ordine: € {order.totalPrice}</h3>
                    <button
                      className="delete-btn"
                      onClick={() => deleteOrder(order.id)}
                    >
                      Elimina ordine
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <hr />
        <Link className="backHomeAdminLink" to={"/"}>
          <h4 className="backHomeAdmin">HOME</h4>
        </Link>
      </div>
    </div>
  );
}
