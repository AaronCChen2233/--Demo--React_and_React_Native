import { NextApiRequest, NextApiResponse } from 'next'
// req: request data, res: response data
export default (req: NextApiRequest, res: NextApiResponse) => {
  // post - hello
  // save data (req.body) to your database (cloud function, etc...)
  res.status(200).json({ name: 'Derrick', city: 'Vancouver' })
}
