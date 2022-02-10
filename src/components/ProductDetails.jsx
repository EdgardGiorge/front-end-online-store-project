import React from 'react';

class ProductDetails extends React.Component {
  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <div className="teste">
        <span>TEsteeee</span>
      </div>
    );
  }
}

export default ProductDetails;
