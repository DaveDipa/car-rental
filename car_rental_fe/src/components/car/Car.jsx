export default function Car(props) {
  return (
    <div className="col-3 my-3 px-4">
      <div className="card ">
        <img
          className="card-img-top px-3 my-3"
          src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />

        <div className="card-body">
          <div key={props.id}>
            <h3 className="card-text"> {props.brand}</h3>
            <hr />
            <h3 className="card-title"> {props.model}</h3>
            <hr />
            <h4 className="card-text"> {props.engineSize} CV</h4>
            <hr />
            <button className="btn btn-secondary"> AFFITTA</button>
          </div>
        </div>
      </div>
    </div>
  );
}
