import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = () => {
  const items = useSelector((state) => state.cart.items)

  const cartItems = items.map(el => <CartItem 
    key={el.id}
    item={{
      id: el.id,
      title: el.title,
      price: el.price,
      quantity: el.quantity,
      total: el.totalPrice}
  }
    
    />)
  return <Card className={classes.cart}>
  <h2>Your Shopping Cart</h2>
  <ul>
    {cartItems}
  </ul>
</Card>
}

export default Cart;