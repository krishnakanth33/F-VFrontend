import { Component } from "react";
import { Link } from "react-router-dom";
import './index.css';

const apiResultList = {
    initial: 'INITIAL',
    progress: 'PROGRESS',
    success: 'SUCCESS',
    failed: 'FAILED',
  }

class Home extends Component {
    state = { allProducts: [], searchItem: '', apiStatus: apiResultList.initial }

    componentDidMount(){
        this.getAllproducts();
    }

    getAllproducts = async () => {
        const response = await fetch('http://localhost:5000/api/Allproducts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if (response.ok) {
            this.setState({ allProducts: data });
        } else {
            console.error('Failed to fetch products:', data);
        }
    }

    searchItem = async (event) => {
        this.setState({ searchItem: event.target.value });
    }

    render() {
        const {allProducts,searchItem} = this.state
        const filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchItem.toLowerCase()));
        
        return (
            <div className="home-container">
                <div className="search-bar-container">
                    <input type="search" placeholder="Search..." className="search-bar" value={searchItem} onChange={this.searchItem} />
                    <button className="search-button">Search</button>
                </div>
                <ul className="product-list">
                    {filteredProducts.map((product) => (
                        <Link to={`/placeorder/${product.id}`} className="product-link" key={product.id}>
                            <li key={product.id} className="product-item">
                                <img src={product.imageurl} alt={product.name} className="product-image" />
                                <div className="product-details">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-price">Price: {product.price}/- per {product.unit}</p>
                                    <p className="product-stock">Stock: {product.stock} {product.unit}</p>
                                    <p className="product-rating">Rating: 4.5</p>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Home