import Image from 'next/image';

const ItemCard = () => (
  <div className="item">
    <div className="item-image">
      <Image
        layout="fill"
        src={`/product/product-${Math.round(Math.random())}.webp`}
        alt="Product"
      />
    </div>
    <div className="item-info">
      <div className="i-title">Logo Level 1 Crown T-Shirt</div>
      <div className="i-price">NPR. 1500</div>
    </div>
  </div>
);

export default ItemCard;
