// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string;
  name: string;
  sizes: { size: string; stock: number }[];
  price: number;
  comparePrice: number;
  description: string;
  images: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      id: '1',
      name: 'LOGO LEVEL 1 CROWN HOODIE',
      sizes: [
        { size: 'S', stock: 4 },
        { size: 'M', stock: 4 },
        { size: 'L', stock: 4 },
      ],
      images: [
        '/assets/product/product-2.webp',
        '/assets/product/product-3.webp',
        '/assets/product/product-4.webp',
      ],
      price: 1500,
      comparePrice: 1800,
      description: `
      Our comfortable pullover hoodie with a famous MV Agusta crown logo on the chest and a big one on the back. Features a spacious front kangaroo pocket. Crafted from premium cotton. Pair with LL1 matching sweatpants and you’re good to go.

      Adjustable hood
      Ribbed cuffs and hem
      Small printed MV Agusta crown logo on the chest
      Big printed MV Agusta crown logo on the back
      Front kangaroo pocket
      Regular fit`,
    },
  ]);
}
