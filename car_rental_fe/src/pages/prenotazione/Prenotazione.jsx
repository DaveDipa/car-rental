import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./prenotazione.css";
import { IconCar } from "@tabler/icons-react";
import Footer from "../../components/footer/Footer";
import OrderRecap from "../../components/order/OrderRecap";

export default function Prenotazione() {
  const [cars, setCars] = useState([]);
  const [choosedCar, setChoosedCar] = useState(-1);
  const [choosedStartDate, setChoosedStartDate] = useState("");
  const [choosedEndDate, setChoosedEndDate] = useState("");
  const [choosedCarPrice, setChoosedCarPrice] = useState(0);
  const [choosedOrder, setChoosedOrder] = useState([]);

  const defaultCarUrl = "http://localhost:8080/api/car";

  /**FETCH ALL CARS */
  const getCarData = async () => {
    await fetch(defaultCarUrl + "/all")
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
      });
  };

  useEffect(() => {
    getCarData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      car: choosedCar,
      rentalDateStart: choosedStartDate,
      rentalDateEnd: choosedEndDate,
      price: choosedCarPrice,
    };
    console.log("handle submit new order " + newOrder);
    console.log(JSON.stringify(newOrder));

    {
      /*** FETCH PER POST ***/
    }

    fetch("http://localhost:8080/api/order/save", {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setChoosedOrder(data);
        console.log("data fetch save:" + data);
      })
      .catch((err) => {
        console.log(err + " Errore");
      });
  };


  return (
    <div>
      <Navbar />
      <div>
        <h1 className="result-ordine">ORDINA LA TUA VETTURA </h1>
      </div>

      <div className="form-container">
        {/**FORM */}
        <form onSubmit={handleSubmit} className="form">
          {/**DROP DOWN MENU PER SCELTA AUTOMOBILI + TARGET PER PRENDERE I VALORI ID E PREZZO */}
          <IconCar className={"icon"} />
          <select
            className="form-item"
            onChange={(e) => {
              console.log(e);
              setChoosedCar(e.target.value);
              setChoosedCarPrice(e.target.valueprice);
            }}
          >
            <option value={-1}>scegli auto</option>
            {cars &&
              cars.map((car) => (
                <option key={car.id} value={car.id} valueprice={car.price}>
                  {car.brand +
                    " - " +
                    car.model +
                    " - prezzo giornaliero: " +
                    car.price +
                    " euro"}
                </option>
              ))}
          </select>
          {/**TARGET VALORI DATE */}
          <label htmlFor="scegliDataInizio">Data ritiro veicolo: </label>
          <input
            value={choosedStartDate}
            onChange={(event) => {
              setChoosedStartDate(event.target.value);
            }}
            className="form-item"
            type="date"
            id="scegliDataInizio"
            name="rent-start"
          />
          <label htmlFor="scegliDataFine">Data consegna veicolo:</label>
          <input
            value={choosedEndDate}
            onChange={(event) => {
              setChoosedEndDate(event.target.value);
            }}
            className="form-item"
            type="date"
            id="scegliDataFine"
            name="rent-end"
          />

          <button className="btn-form-item" type="submit">
            Procedi con l'ordine
          </button>
        </form>
      </div>
      <h1 className="fattura">
        IL TUO ORDINE
        {/* <OrderRecap choosedCar={choosedCar} /> */}
      </h1>
      <div>
        <img
          className="prenotazione-img"
          src="https://images.unsplash.com/photo-1421218108559-eb1ff78357f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt=""
        />
      </div>

      <Footer />
    </div>
  );
}
