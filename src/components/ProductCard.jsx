import './ProductCard.css';

export const ProductCard = ({ product }) => {
    const { id, name, price, image } = product;
    return (
        <div className="product">
            <img src={image} alt={name} />
            <p className="name">{name}</p>
            <div className='action'>
                <p>${price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}
