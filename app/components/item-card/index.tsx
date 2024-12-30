import Image from "next/image";
import Link from "next/link";
import { RenderProductPrice } from "../commons";
import Product from "../../models/Product";

const ItemCard = ({ product }: { product: Product }) => {
  return <div className="item">
  <Link href={`/products/${product.slug}`} passHref>
    <a>
      <div className="item-image">
        <Image layout="fill" src={product.images[0]} alt={product.name} />
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
};

export default ItemCard;
