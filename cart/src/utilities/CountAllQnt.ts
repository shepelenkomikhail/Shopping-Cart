import { useShoppingCart } from "../context/ShoppingCartContext";

export function CountAllQnt(){
    const {cartItems} = useShoppingCart();
    let count = 0;
    cartItems.map(item => {
        count = item.quantity + count;
    })
    return count;
}