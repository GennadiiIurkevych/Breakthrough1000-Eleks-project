// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { cards } from './data/cards'

export default function handler(req, res) {
    res.status(200).json(cards);
}
