
export default function Car(props) {
  return (

    <div className="col-3 ">
       
      <div className="card ">
        <div className="card-body">
          <div key={props.id}>
            <h3 className="card-text"> {props.brand}</h3>
            <hr />
            <h3 className="card-title"> {props.model}</h3>
            <hr />
            <h4 className="card-text"> {props.engineSize} CV</h4>
            <hr />
            <button className="btn btn-secondary"> AFFITTA</button>
            <hr />
            <a href={props.link} className="card-text">
              Visita il sito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
