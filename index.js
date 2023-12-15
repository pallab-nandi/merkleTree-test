const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

const { getProof } = require('./merkleTree');
const { verify } = require('./verify');

app.get('/:add', (req, res) => {
  const address = req.params.add;
  console.log(address);

  const proof = getProof(address);

  return res.status(200).send(JSON.stringify({
    data: proof
  }))
})

app.get('/verify/:add', (req, res) => {
  const address = req.params.add;
  console.log(address);

  const bool = verify(address);

  return res.status(200).send(JSON.stringify({
    data: bool
  }))
})


app.listen(8000, () => console.log('App is running....'));