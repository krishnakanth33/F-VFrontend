import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class TrackOrder extends Component {
    render() {
        return(
            <div className="track-order-container">
                <h1>Track Your Order</h1>
                <form className="track-order-form">
                    <label htmlFor="order-id">Order ID:</label>
                    <input type="text" id="order-id" name="order-id" required />
                    <button type="submit">Track Order</button>
                </form>
                <Link to="/" className="link">Back to Home</Link>
            </div>
        )
    }
}

export default TrackOrder;