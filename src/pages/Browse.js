import React from 'react';

import Gallery from '../components/Gallery';
import Filter from '../components/Filter';

import { ProductsConsumer } from '../context/ProductsContext';

import './Browse.css';

class BrowsePage extends React.Component {
  render() {
    let { filters, setFilters, selected, addToCart } = this.props.products;
    return (
      <div className="browse-page">
        <Filter 
          filters={filters}
          setFilters={setFilters}
          />
        <Gallery list={selected} handleClick={addToCart} btnName="Add To Cart"/>
      </div>
    )
  }
}

export default ProductsConsumer(BrowsePage);
