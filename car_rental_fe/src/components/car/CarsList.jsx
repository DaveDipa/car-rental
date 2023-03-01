import Car from "./Car";


const CarsList = (props) => {
  return (
    <div className="container">
      
      <ul  className="row g-3 py-4 justify-content-center">
        {props.cars.map((car) => (
          
          <Car
            key={car.id}
            id={car.id}
            model={car.model}
            brand={car.brand}
            engineSize={car.engineSize}
            link={car.link}
            price = {car.price}
          />
        ))}
      </ul>
     
    </div>
  );
};

export default CarsList;
