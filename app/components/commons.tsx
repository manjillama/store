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

const Loader = (): JSX.Element => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      minWidth: 40,
      minHeight: 40,
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="spi" />
    </div>
  </div>
);

export default Loader;
