import { AxiosResponse } from 'axios';
import { ICtaCarousel } from '../interface';
import { get } from '../utils/axios';

export const getHomePageCarousel = (): Promise<AxiosResponse<ICtaCarousel>> => {
  return get(`/home-carousels`);
};
