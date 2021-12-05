import React, { Component, Fragment } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import { Form, Button } from "react-bootstrap";
const config = require("../../config.json");

export default class ProductAdmin extends Component {
	state = {
		newproduct: {
			productname: "",
			id: "",
		},
		products: [],
	};

	handleAddProduct = async (id, event) => {
		event.preventDefault();
		try {
			const params = {
				id: id,
				productname: this.state.newproduct.productname,
			};
			await axios.post(`${config.api.invokeUrl}/products/{id}`, params);
			this.setState({
				products: [...this.this.state.products, this.state.Products],
			});
			this.setState({ newproduct: { productname: "", id: "" } });
		} catch (error) {
			console.log(error);
		}
	};

	handleUpdateProduct = async (id, name) => {
		try {
			const params = {
				id: id,
				productname: name,
			};
			await axios.patch(`${config.api.invokeUrl}/products/{id}`, params);
			const productToUpdate = [...this.state.products].find(
				(product) => product.id === id
			);
			const updatedProducts = [...this.state.products].filter(
				(product) => product.id !== id
			);
			productToUpdate.productname = name;
			updatedProducts.push(productToUpdate);
			this.setState({ products: updatedProducts });
		} catch (error) {
			console.log(error);
		}
	};

	handleDeleteProduct = async (id, event) => {
		event.preventDefault();
		try {
			await axios.delete(`${config.api.invokeUrl}/products/${id}`);
			const updatedProducts = [...this.state.products].filter(
				(product) => product.id !== id
			);
			this.setState({ products: updatedProducts });
		} catch (error) {
			console.log(error);
		}
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
	onAddProductNameChange = (event) =>
		this.setState({
			newproduct: { ...this.state.newproduct, productname: event.target.value },
		});
	onAddProductIdChange = (event) =>
		this.setState({
			newproduct: { ...this.state.newproduct, id: event.target.value },
		});

	componentDidMount = () => {
		this.getData();
	};

	render() {
		return (
			<Fragment>
				<section className="section">
					<div className="container mt-5">
						<div className="row d-flex ">
							<div className="col-6 is-one-third">
								<h1>Dasbord Product</h1>
								<p className="subtitle is-5">
									Anda bisa Menambah dan Mengedit form dibawah ini:
								</p>
								<br />

								<Form
									className="col-10"
									onSubmit={(event) =>
										this.handleAddProduct(this.state.newproduct.id, event)
									}
								>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Nama Product</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter name"
											value={this.state.newproduct.productname}
											onChange={this.onAddProductNameChange}
										/>
									</Form.Group>

									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>Id Product</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter id"
											value={this.state.newproduct.id}
											onChange={this.onAddProductIdChange}
										/>
										<Form.Text className="text-muted">
											Pastikan Anda memasukan id yang berbeda
										</Form.Text>
									</Form.Group>

									<Button variant="primary" type="submit">
										Submit
									</Button>
								</Form>
							</div>
							<div className="col-6 is-two-thirds">
								<div className="tile is-ancestor">
									<div className="d-flex flex-wrap justify-content-around ">
										{this.state.products.map((product, index) => (
											<ProductCard
												isAdmin={true}
												handleUpdateProduct={this.handleUpdateProduct}
												handleDeleteProduct={this.handleDeleteProduct}
												name={product.productname}
												id={product.id}
												key={product.id}
											/>
										))}
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
