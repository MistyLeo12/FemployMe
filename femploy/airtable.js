var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyWvlXmSn55006bY'}).base('app7RMaUfSoIVwdde');

base('user').select({
    // Selecting 3 records in Grid view:
    maxRecords: 7,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log(record.get('ID'), record.get('company'), record.get('position'), record.get('salary'), record.get('age') , record.get('equal_treatment'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
