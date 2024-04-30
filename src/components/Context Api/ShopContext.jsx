import React, { createContext,useEffect,useState } from 'react'

export const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[]);

    const AddtoCart =(item)=>{
       const isIteminCart = cartItems.find((cartItem) => cartItem.id === item.id)
        if(isIteminCart){
            setCartItems(
                cartItems.map((cartItem)=> cartItem.id === item.id ? {...cartItem , quantity: cartItem.quantity + 1} : cartItem)
            )
        }else{
                setCartItems([...cartItems, {...item, quantity:1}])
            }
    }
    const RemovetoCart = (item)=>{
      const isIteminCart = cartItems.find((cartItem)=> cartItem.id === item.id)
      if(isIteminCart.quantity === 1){
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
      }else{
        setCartItems(
          cartItems.map((cartItem)=> cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1}: cartItem)
        )
      }
    }
    const RemoveSingleItem = (item) => {
      const isIteminCart = cartItems.find((cartItem) => cartItem.id === item.id);
      if (isIteminCart) {
          setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
      } else {
          console.error(`Item with id ${item.id} not found in the cart.`);
      }
  };

    const clearCart = ()=>{
      setCartItems([])
  };

  const getCartTotal = () => {
    return cartItems.reduce((total,item) => total + item.price * item.quantity, 0);
  };
  
  

  const itemQuantity =()=>{
    return(
      cartItems.reduce((total,item)=> total + item.quantity, 0)
    )
  };

  useEffect(()=>{
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
  },[cartItems])
     
  return (
    <CartContext.Provider 
      value={{
        cartItems,
        AddtoCart,
        RemovetoCart,
        RemoveSingleItem,
        clearCart,
        getCartTotal,
        itemQuantity

       }}>
           {children}
    </CartContext.Provider>
  )
}
