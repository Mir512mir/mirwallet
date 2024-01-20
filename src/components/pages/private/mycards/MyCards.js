import React from "react";
import { observer } from "mobx-react";

const MyCards = observer(() => {
    return (
        <div className="container">
            <form>
                <div className="row mb-3">
                    <p className="form-label">Cardholder Name</p>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="row mb-3">
                    <p className="form-label">Card Number</p>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="row">
                    <div className="col-6 mb-3">
                        <p className="form-label">cvv\cvc</p>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="col-6 mb-3">
                        <p className="form-label">Exp. Date</p>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
                <button>delete</button>
            </form>
        </div>



    )

})

export default MyCards;