import Slider from 'react-slick';

type Settings = {
  dots?: boolean;
  fade?: boolean;
  infinite?: boolean;
  autoplay?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  responsive?: {}[];
  nextArrow?: any;
  prevArrow?: any;
  centerMode?: boolean;
};

const Carousel = ({
  children,
  settings,
}: {
  children: JSX.Element[] | JSX.Element;
  settings: Settings;
}) => {
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
