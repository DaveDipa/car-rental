import Car from "./Car";

const CarsList = (props) => {
  return (
    <div>
      <ul className="row mx-5">
        {props.cars.map((car) => (
          <Car
            model={car.model}
            brand={car.brand}
            engineSize={car.engineSize}
          />
        ))}
      </ul>
    </div>
  );
};

export default CarsList;
