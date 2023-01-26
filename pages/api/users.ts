// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

//create for the fakeUsers
type Data = {
  name: string;
  email: string;
  phone: string;
  hairColor: string;
  tShirtSize: string;
  visits: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
  const fakeUsers = [
    {
      name: 'George Costanza',
      email: 'georgec@example.com',
      phone: '555-555-5551',
      hairColor: 'Bald',
      tShirtSize: 'Medium',
      visits: 12,
    },
    {
      name: 'Elaine Benes',
      email: 'elaineb@example.com',
      phone: '555-555-5552',
      hairColor: 'Brown',
      tShirtSize: 'Small',
      visits: 8,
    },
    {
      name: 'Kramer',
      email: 'kramer@example.com',
      phone: '555-555-5553',
      hairColor: 'Black',
      tShirtSize: 'Large',
      visits: 15,
    },
    {
      name: 'Newman',
      email: 'newman@example.com',
      phone: '555-555-5554',
      hairColor: 'Red',
      tShirtSize: 'X-Large',
      visits: 7,
    },
    {
      name: 'Frank Costanza',
      email: 'frankc@example.com',
      phone: '555-555-5555',
      hairColor: 'Grey',
      tShirtSize: 'XX-Large',
      visits: 6,
    },
  ];
  res.status(200).json(fakeUsers);
}
