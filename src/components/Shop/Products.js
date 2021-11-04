import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id = 'p1'
          key='p1'
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          id = 'p2'
          key = 'p2'
          title='Test 2'
          price={11}
          description='This is a second product is amazing too!'
        />
      </ul>
    </section>
  );
};

export default Products;