import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/car/Car.css";
import "./components/navbar/Navbar.css";
import "./pages/contatti/contatti.css";
import CarsList from "./components/car/CarsList";
import Navbar from "./components/navbar/Navbar";
import { FadeIn } from "react-slide-fade-in";
import Footer from "./components/footer/Footer";

function Home() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadingDiv = isLoading ? (
    <div className="loadingDiv">
      <h2 className="loading">LOADING...PLEASE WAIT</h2>
    </div>
  ) : (
    ""
  );

  const defaultCarUrl = "http://localhost:8080/api/car";

  useEffect(() => {
    fetchCarHandler();
  }, []);

  const fetchCarHandler = () => {
    setIsLoading(true);
    fetch(defaultCarUrl + "/all")
      .then((response) => response.json())

      .then((data) => {
        setCars(data);
      });
    setIsLoading(false);
  };

  return (
    <>
      {/* HEADER */}
      <div className="home text-center">
        <Navbar />

        <div className="title">
          <div className="title-text">
            <h1 className="car-rental-roma">CAR RENTAL ROMA</h1>

            <FadeIn
              from="right"
              positionOffset={100}
              triggerOffset={100}
              delayInMilliseconds={500}
            >
              <h1>
                Vi offriamo la possibilità di scegliere tra una vasta gamma di
                automobili
              </h1>
            </FadeIn>
          </div>
        </div>
        <div>
          <h1 className="parco-auto-text">Il nostro parco auto</h1>
        </div>
        <FadeIn
          from="bottom"
          positionOffset={200}
          triggerOffset={90}
          delayInMilliseconds={100}
        >
          {/* CARDS */}
          
          <div>
          {loadingDiv}
            <CarsList cars={cars} />
          </div>
        </FadeIn>
      </div>
      <hr />
      <div className="btn-p-container">
        <Link className="link-to-prenotazione" to={"/prenotazione"}>
          PRENOTA LA TUA AUTOMOBILE
        </Link>
      </div>
      <hr />
      {/**HERO */}
      <div className="row hero-cont">
        <h1 className="hero-title">Chi siamo</h1>

        <div id="chi-siamo" className="col p-chi-siamo">
          <FadeIn
            from="bottom"
            positionOffset={200}
            triggerOffset={90}
            delayInMilliseconds={100}
          >
            <div className=" descrizione col ">
              <h5>
                Ciao a tutti! Siamo Roma Car Rental, un'azienda che offre
                servizi di noleggio auto a Roma. Siamo fieri di offrire una
                vasta selezione di veicoli di alta qualità a prezzi convenienti
                per soddisfare le esigenze di ogni nostro cliente. Che tu stia
                pianificando un viaggio di lavoro, una vacanza o un evento
                speciale, abbiamo la soluzione perfetta per te.
              </h5>
              <hr />
              <h5>
                La nostra flotta comprende auto di lusso, SUV, berline e altro
                ancora. Inoltre, offriamo anche pacchetti personalizzati per
                soddisfare le tue esigenze specifiche. Il nostro team di esperti
                è sempre disponibile per consigliarti e aiutarti a scegliere la
                soluzione ideale per te. Inoltre, la nostra attenzione al
                servizio clienti non ha eguali. Siamo sempre pronti a rispondere
                alle tue domande e a fornirti assistenza in qualsiasi momento
                durante il noleggio.
              </h5>
              <hr />
              <h3>
                Vieni a scoprire perché Roma Car Rental è la scelta ideale per
                il noleggio auto a Roma. Ti aspettiamo!
              </h3>
            </div>
          </FadeIn>
        </div>

        <div className="col hero-img-cont">
          <FadeIn
            from="bottom"
            positionOffset={200}
            triggerOffset={90}
            delayInMilliseconds={100}
          >
            <img
              className="col hero-img"
              src="https://images.unsplash.com/photo-1529369623266-f5264b696110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
          </FadeIn>
        </div>
      </div>
      <hr />
      <div className="btn-p-container">
        <Link className="link-to-prenotazione" to={"/prenotazione"}>
          PRENOTA LA TUA AUTOMOBILE
        </Link>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default Home;
