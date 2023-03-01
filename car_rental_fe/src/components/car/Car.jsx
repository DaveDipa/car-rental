export default function Car(props) {

  return (
    <div className="col-lg-4 col-sm-12 card-container" key={props.id}>
      <div className="card ">
        <div className="card-body">
          <div key={props.id}>
            <h3 className="card-text"> {props.brand}</h3>
            <hr />
            <h3 className="card-title"> {props.model}</h3>
            <hr />
            <h4 className="card-text"> {props.engineSize} CC</h4>
            <hr />
            <h5 className="card-text">Prezzo giornaliero {props.price} €</h5>
            <hr />
            <button className="btn btn-secondary">
              <a href={props.link} className="card-text">
                Visita il sito
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
