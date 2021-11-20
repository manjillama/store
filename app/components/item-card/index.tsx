import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from '../../interface';
import { RenderProductPrice } from '../commons';

const ItemCard = ({ product }: { product: IProduct }) => (
  <div className="item">
    <Link href={`/products/${product.slug}`}>
      <a>
        <div className="item-image">
          <Image
            layout="fill"
            src={product.images[0].formats.medium.url}
            alt={product.name}
          />
        </div>
        <div className="item-info">
          <div className="i-title">{product.name}</div>
          <div className="i-price">
            <div>
              <RenderProductPrice
                price={product.price}
                comparePrice={product.comparePrice}
              />
            </div>
          </div>
        </div>
      </a>
    </Link>
  </div>
);

export default ItemCard;
