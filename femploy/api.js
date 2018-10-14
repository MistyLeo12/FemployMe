var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyWvlXmSn55006bY'}).base('app7RMaUfSoIVwdde');
var temp_index;
//https://airtable.com/app7RMaUfSoIVwdde/api/docs#nodejs/table:company:update

base('company').find('reccj3yBmqmBbmv58', function(err, record) {
    if (err) { console.error(err); return; }
    //console.log(record);
    var salary = record.get('salary');
    console.log('Average Salary:' + salary);
    var company_salary = record.get('company_salary');
    console.log('Company Salary:' + company_salary);
    var industy_salary = record.get('industy_salary');
    console.log('Industry Salary:' + industy_salary);
    var ges = record.get('GES');
    console.log('GES:' + ges);
    var fes = record.get('FES');
    console.log('FES:' + fes);
    var rec = record.get('rec_index');
    console.log('Recommendation Index:' + rec);
});
