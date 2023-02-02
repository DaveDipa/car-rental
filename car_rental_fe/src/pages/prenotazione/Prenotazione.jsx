import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./prenotazione.css";

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

    console.log("L'automobile scelta è " + choosedCar);
    console.log("il periodo scelto è dal: " + startDate + " al " + endDate);

  };

  return (
    <div>
      <Navbar />

      <div className="form-container">
        {/**FORM */}
        <form onSubmit={handleSubmit} className="form">
          {/**drop down menu per scelta automobili */}
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

          {/**gestire min e max nelle date */}
          {/**form per la scelta della data di inizio e fine del noleggio */}
          <input
            value={startDate}
            onChange={(event) => {
              setStartDate(event.target.value);
            }}
            className="form-item"
            type="date"
            id="scegliDataInizio"
            name="rent-start"
            placeholder="scegli la data iniziale"
          />

          <input
            value={endDate}
            onChange={(event) => {
              setEndDate(event.target.value);
            }}
            className="form-item"
            type="date"
            id="scegliDataInizio"
            name="rent-end"
            placeholder="scegli la data finale"
          />

          {/**fare check della disponibilità dell'automobile, nel periodo di tempo selezionato dall'utente */}
          <button className="btn-form-item" type="submit">
            Prenota
          </button>
        </form>
      </div>
    </div>
  );
}
