import React, { Component, Fragment } from "react";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
const config = require("../../config.json");

export default class Products extends Component {
  state = {
    newproduct: null,
    products: [],
  };

  getData = async () => {
    // ambil data dari api yang tadi udh diambil
    try {
      const res = await axios.get(`${config.api.invokeUrl}/products`);
      this.setState({ products: res.data });
    } catch (error) {
      console.log(`eror ${error}`);
    }
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container mt-3">
            <h1>Energy Products</h1>
            <p className="subtitle is-5">
              Invest in a clean future with our efficient and cost-effective
              green energy products:
            </p>
            <br />
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="d-flex flex-wrap justify-content-between ">
                    {this.state.products && this.state.products.length > 0 ? (
                      this.state.products.map((product) => (
                        <ProductCard
                          name={product.productname}
                          id={product.id}
                          key={product.id}
                        />
                      ))
                    ) : (
                      <div className="tile notification is-warning">
                        No products available
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
