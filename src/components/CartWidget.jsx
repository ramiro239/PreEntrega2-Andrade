function CartWidget () {
    const itemsCarrito = 5;

    return (
        <div className="cart-widget">
        <i className="fas fa-shopping-cart"></i> 
        <span>{itemsCarrito}</span> 
      </div>
    )
}

export default CartWidget;