export default function OrderRecap({choosedCar}){

    return(
        <div className="orderRecap">
            {choosedCar && (
                <div>
                    {choosedCar.map((car)=>(
                        <div key={car.id}>
                            <div>
                                <h2>id: {car.id}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            

        </div>
    )
       
       
}