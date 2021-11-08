export const RenderProductPrice = ({
  price,
  comparePrice,
}: {
  price: number;
  comparePrice: number;
}) => {
  if (comparePrice > price) {
    return (
      <p>
        <span className="p-price pr-sp"> Rs. {price}</span>
        <span className="p-price pr-cp">Rs. {comparePrice}</span>
      </p>
    );
  } else {
    return (
      <p>
        <span className="p-price">Rs. {price}</span>
      </p>
    );
  }
};
