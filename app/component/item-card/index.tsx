import Image from 'next/image';
import Link from 'next/link';

const ItemCard = () => (
  <div className="item">
    <Link href="/products/1">
      <a>
        <div className="item-image">
          <Image
            layout="fill"
            src={`/assets/product/product-${Math.round(Math.random())}.webp`}
            alt="Product"
          />
        </div>
        <div className="item-info">
          <div className="i-title">Logo Level 1 Crown T-Shirt</div>
          <div className="i-price">NPR. 1500</div>
        </div>
      </a>
    </Link>
  </div>
);

export default ItemCard;
