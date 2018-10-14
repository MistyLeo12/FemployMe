var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyWvlXmSn55006bY'}).base('app7RMaUfSoIVwdde');
//https://airtable.com/app7RMaUfSoIVwdde/api/docs#nodejs/table:company:update
//https://airtable.com/tblVLvb2hdvFBvHGd/viwn02X9OkY80Mu0c/reccj3yBmqmBbmv58
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var answer;
rl.question('input salary:',(answer));
rl.close();
base('user').create({
  "company": [
    "reccj3yBmqmBbmv58"
  ],
  "position": "Software Engineer",
  "salary": 25,
  "age": "24",
  "equal_treatment": 5,
  "bonus": 3,
  "gender_diversity": 4,
  "mobility": 3,
  "maternity": 14,
  "flex": "yes",
  "healthcare": "yes",
  "FourK": "yes",
  "recommend": "yes",
  "Review": ""
}, function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record.getId());
});
