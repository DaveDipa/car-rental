import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./prenotazione.css";
import { IconCar } from "@tabler/icons-react";

export default function Prenotazione() {
  const [cars, setCars] = useState([]);
  const [choosedCar, setChoosedCar] = useState(-1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const defaultCarUrl = "http://localhost:8080/api/car";

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
      rentalDateStart: startDate,
      rentalDateEnd: endDate,
    };
    console.log(newOrder);
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
        data && <h1>{data}</h1>;
      })
      .catch((err) => {
        console.log(err.message);
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
            }}
          >
            <option value={-1}>scegli auto</option>
            {cars &&
              cars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.brand + " - " + car.model}
                </option>
              ))}
          </select>

          <label htmlFor="scegliDataInizio">Data ritiro veicolo</label>
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
          <label htmlFor="scegliDataFine">Data consegna veicolo</label>
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

          {/**fare check della disponibilità dell'automobile, nel periodo di tempo selezionato dall'utente */}
          <button className="btn-form-item" type="submit">
            Procedi con l'ordine
          </button>
        </form>
      </div>
    </div>
  );
}
