import Image from 'next/image';

const ItemCard = () => (
  <div className="item">
    <div className="item-image">
      <Image layout="fill" src="/product/product-1.webp" alt="Product" />
    </div>
    <div className="item-info">
      <div className="i-title">LOGO LEVEL 1 CROWN T-SHIRT</div>
      <div className="i-price">NPR. 1500</div>
    </div>
  </div>
);

export default ItemCard;
