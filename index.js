const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

const { getProof } = require('./merkleTree');

app.get('/:add', (req, res) => {
  const address = req.params.add;
  console.log(address);

  const proof = getProof(address);

  return res.status(200).send(JSON.stringify({
    data: proof
  }))
})


app.listen(8000, () => console.log('App is running....'));