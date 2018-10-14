import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

const app = express();

app.get('/get', bodyParser.json(), async (req, res) => {
  const key = 'keyWvlXmSn55006bY';
  var resp = await fetch('https://api.airtable.com/v0/app7RMaUfSoIVwdde/user', {
    headers: {
      "Authorization": "Bearer: " + key
    }
  })

  const json = await resp.json()
  const {records} = resp;
  res.json({records});
});

app.use('/', express.static('public'));

app.listen(process.env.PORT || 3000);
