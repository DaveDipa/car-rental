import Car from "./Car";


const CarsList = (props) => {
  return (
    <div className="container">
      
      <ul className="row g-3 py-3 justify-content-center">
        {props.cars.map((car) => (
          
          <Car
            model={car.model}
            brand={car.brand}
            engineSize={car.engineSize}
            link={car.link}
          />
        ))}
      </ul>
     
    </div>
  );
};

export default CarsList;
