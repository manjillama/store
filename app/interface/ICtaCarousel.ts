export interface ICtaCarousel {
  id: number;
  title: string;
  caption: string;
  cta?: {
    name: string;
    link: string;
  };
  image: {
    caption: string;
    url: string;
  };
}
