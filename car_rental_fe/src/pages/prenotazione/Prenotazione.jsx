import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./prenotazione.css";
import { IconCar } from "@tabler/icons-react";
import Footer from "../../components/footer/Footer";

export default function Prenotazione() {
  const [cars, setCars] = useState([]);
  const [choosedCar, setChoosedCar] = useState(-1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [prices, setPrices] = useState();
  const [choosedCarPrice, setChoosedCarPrice] = useState();
  const [choosedOrder, setChoosedOrder] = useState([]);

  const defaultCarUrl = "http://localhost:8080/api/car";

  const getCarData = async () => {
    await fetch(defaultCarUrl + "/all")
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
      });
  };
  // const getCarPrice = async () => {
  //   await fetch(defaultCarUrl + "/price")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPrices(data);
  //     });
  // };

  useEffect(() => {
    getCarData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      car: choosedCar,
      rentalDateStart: startDate,
      rentalDateEnd: endDate,
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
          {/**drop down menu per scelta automobili */}
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
                  {car.brand + " - " + car.model + " - prezzo: " + car.price}
                </option>
              ))}
          </select>

          <label htmlFor="scegliDataInizio">Data ritiro veicolo: </label>
          <input
            value={startDate}
            onChange={(event) => {
              setStartDate(event.target.value);
            }}
            className="form-item"
            type="date"
            id="scegliDataInizio"
            name="rent-start"
          />
          <label htmlFor="scegliDataFine">Data consegna veicolo:</label>
          <input
            value={endDate}
            onChange={(event) => {
              setEndDate(event.target.value);
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
      <h1 className="fattura">ORDINE: {} </h1>
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
