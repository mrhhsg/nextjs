// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

var counter = 0
export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe', counter: counter++ })
  console.log( req.headers )
}
