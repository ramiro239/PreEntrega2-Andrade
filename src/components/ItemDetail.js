import ItemCount from "./ItemCount"

const ItemDetail = ({ id, title, image, category, description, price }) => {
    return (
      <article className="card-item" style={itemStyles}>
        <header className="header" style={headerStyles}>
          <h2 className="item-header">{title}</h2>
        </header>
        <picture>
          <img src={image} alt={title} className="item-img" style={imageStyles} />
        </picture>
        <section style={infoStyles}>
          <p className="info" style={categoryStyles}>
            Categoría: {category}
          </p>
          <p className="info" style={descriptionStyles}>
            Descripción: {description}
          </p>
          <p className="info" style={priceStyles}>
            Precio: ${price}
          </p>
        </section>
        <footer className="item-footer" style={footerStyles}>
          <ItemCount
            initial={1}
            stock="10"
            onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
          />
        </footer>
      </article>
    );
  };
  
  const itemStyles = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "10px",
    padding: "10px",
    width: "250px", 
    textAlign: "center",
  };
  
  const headerStyles = {
    fontSize: "18px",
    fontWeight: "bold",
  };
  
  const imageStyles = {
    maxWidth: "100%",
    height: "auto",
  };
  
  const infoStyles = {
    marginTop: "10px",
  };
  
  const categoryStyles = {
    fontSize: "16px",
  };
  
  const descriptionStyles = {
    fontSize: "14px",
    color: "#888",
  };
  
  const priceStyles = {
    fontSize: "16px",
  };
  
  const footerStyles = {
    marginTop: "10px",
  };
  

export default ItemDetail