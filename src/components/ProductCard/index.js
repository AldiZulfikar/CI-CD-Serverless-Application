import React, { Component, Fragment } from "react";
import { Button, Card } from "react-bootstrap";

class ProductCard extends Component {
  state = {
    isEditMode: false,
    isAdmin: true,
    updatedproductname: this.props.name,
  };

  handleProductEdit = (event) => {
    event.preventDefault();
    this.setState({ isEditMode: true });
  };

  handleEditSave = (event) => {
    event.preventDefault();
    this.setState({ isEditMode: false });
    this.props.handleUpdateProduct(
      this.props.id,
      this.state.updatedproductname
    );
  };

  onAddProductNameChange = (event) =>
    this.setState({ updatedproductname: event.target.value });

  render() {
    return (
      <div className="tile is-child box notification is-success">
        {this.props.isAdmin && (
          <Fragment>
            <a href="/" onClick={this.handleProductEdit} className="btn-edit">
              <i className="fas fa-edit ">edit</i>
            </a>
            <button
              onClick={(event) =>
                this.props.handleDeleteProduct(this.props.id, event)
              }
              className="delete"
            >
              X
            </button>
          </Fragment>
        )}
        {this.state.isEditMode ? (
          <div>
            <p>Edit product name</p>
            <input
              className="input is-medium"
              type="text"
              placeholder="Enter name"
              value={this.state.updatedproductname}
              onChange={this.onAddProductNameChange}
            />
            <p className="product-id">id: {this.props.id}</p>
            <button
              type="submit"
              className="button is-info is-small"
              onClick={this.handleEditSave}
            >
              save
            </button>
          </div>
        ) : (
          <div>
            <Card style={{ width: "14rem", marginTop: ".6rem" }}>
              <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>id: {this.props.id}</Card.Text>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    );
  }
}

export default ProductCard;
