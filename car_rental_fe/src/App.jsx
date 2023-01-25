import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/car/Car.css";
import "./components/navbar/Navbar.css";
import CarsList from "./components/car/CarsList";
import Navbar from "./components/navbar/Navbar";
import { FadeIn } from "react-slide-fade-in";

function App() {
  const [cars, setCars] = useState([]);

  const defaultCarUrl = "http://localhost:8080/api/car";

  useEffect(() => {
    fetchCarHandler();
  }, []);

  const fetchCarHandler = () => {
    fetch(defaultCarUrl + "/all")
      .then((response) => response.json())

      .then((data) => {
        setCars(data);
        console.log(data);
      });
  };

  return (
    <>
      <div className="app text-center">
        <Navbar />
        <div className="title">
          <div className="title-text">
            <FadeIn
              from="left"
              positionOffset={100}
              triggerOffset={200}
              delayInMilliseconds={500}
            >
              <h1>Benvenuti </h1>
            </FadeIn>
            <h1 className="car-rental-roma">CAR RENTAL ROMA</h1>
            <FadeIn
              from="right"
              positionOffset={100}
              triggerOffset={100}
              delayInMilliseconds={2000}
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
          <div>
            <CarsList cars={cars} />
          </div>
        </FadeIn>
      </div>

      {/**HERO */}
      <div className="row hero-cont">
        <h1 className="hero-title">Chi siamo</h1>

        <div className="col p-chi-siamo">
          <FadeIn
            from="bottom"
            positionOffset={200}
            triggerOffset={90}
            delayInMilliseconds={100}
          >
            <p className="col ">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
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
    </>
  );
}

export default App;
