import CartWidget from "./CartWidget";


function NavBar() {

    return (
        <div style={nav}>
            <div id="brand" style={brandStyle}>
                <a href="../../public/index.html">ShopNow</a>
            </div>
            <div className="navbar-menu" style={menuStyle}>
                <button>
                    Categoria1
                </button>
                <button>
                    Categoria2
                </button>
                <button>
                    Categoria3
                </button>
            </div>
            <div style={CartWidgetStyle}>
                <CartWidget />
            </div>
        </div>
    )
}

const nav = {
    padding: "20px",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center",
}

const brandStyle = {
    flexGrow: 1,
}

const menuStyle = {
    display: "flex",
    gap: "10px",
}

const CartWidgetStyle ={
    marginLeft: "10px"
}

export default NavBar;