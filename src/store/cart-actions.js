import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const sendCartData = (cart) => {
    return async (dispatch) => {
    dispatch(
        uiActions.setNotification({
        status: 'pending',
        title: 'Pending...',
        message: 'Pending data to the server.'
      }));
      const sendRequest = async () => {
        const responce = await fetch('https://foodapp-d2748-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
            method: 'PUT',
            body: JSON.stringify(cart)
          })
          if (!responce.ok) {
            throw new Error('Failed fetching data!')
          }
      }
      try{
            await sendRequest();
            dispatch(uiActions.setNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent data successfully!'
          }));

      }
      catch(error){
        dispatch(uiActions.setNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending data failed!'
          }));
      }
}
}

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const responce = await fetch('https://foodapp-d2748-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
            if(!responce.ok){
                throw new Error('Error fetching data!')
            }
            const data = responce.json()
            return data
        }
        try{
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
              items: cartData.items || [], totalQuantity: cartData.totalQuantity || 0
            }))
        }
        catch(error){
            dispatch(uiActions.setNotification({
            status: 'error',
            title: 'Error!',
            message: 'Fetching data failed!'
          }));
        }
    }
}