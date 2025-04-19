import { Component } from 'react';
import './index.css';

class PlaceOrder extends Component {
    state = {
        productDetails: {},
        quantity: 1,
    }

    componentDidMount() {
        this.getProductDetails()
    }

    getProductDetails = async () => {
        const {id} = this.props;

        const response = await fetch(`http://localhost:5000/api/Allproducts/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            this.setState({ productDetails: data });
        } else {
            console.error('Failed to fetch product:', data);
        }
    }

    placeOrderBtn = async () => {

    }

    render() {
        const { quantity,productDetails } = this.state;
        const {price} = productDetails
        const priceBasedOnQuantity = price * quantity;
        return (
            <div className="place-order-container">
                <div>
                    <h2 className="order-name">{this.state.productDetails.name}</h2>
                </div>
                <div className='placeOrder-card-container'>
                    <div className="placeOrder-card">
                        <img src={this.state.productDetails.imageurl} alt={this.state.productDetails.name} className="placeorder-img" />
                        <div className="placeOrder-info">
                            <p className="product-price">Price: {this.state.productDetails.price}/- per {this.state.productDetails.unit}</p>
                            <p className="product-stock">Stock: {this.state.productDetails.stock} {this.state.productDetails.unit}</p>
                            <p className="product-rating">Rating: 4.5</p>
                        </div>
                        <div className='placeOrder-quantity'>
                            <label htmlFor="quantity">Quantity:</label>
                            <input className="quantity" type="number" id="quantity" value={quantity} min="1" max={productDetails.stock} onChange={(e) => this.setState({ quantity: e.target.value })} />
                            <p className="total-price">Total Price: {priceBasedOnQuantity}/-</p>
                            <button className="place-order-button" onClick={this.placeOrderBtn}>Place Order</button>
                        </div>
                    </div>    
                    <div className='placeOrder-description'>
                        <p>Sweet, nutritious, and rich in potassium — Bananas are one
                        of the most popular fruits around the world. Ideal for breakfast,
                        snacking, or smoothies, they are naturally fat-free and packed with energy.
                        </p>
                        <p>These fresh bananas are sourced directly from local farms,
                        ensuring top quality and great taste. Each dozen contains firm,
                        bright yellow bananas with minimal spots and excellent shelf life.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlaceOrder;