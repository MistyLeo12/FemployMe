var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyWvlXmSn55006bY'}).base('app7RMaUfSoIVwdde');
var temp_index;
//https://airtable.com/app7RMaUfSoIVwdde/api/docs#nodejs/table:company:update
base('user').select({
    // Selecting 3 records in Grid view:
    maxRecords: 7,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log(record.get('ID'), record.get('company'), record.get('position'), record.get('salary'), record.get('age') , record.get('equal_treatment'), record.get('401k'));
        var temp_index = (record.get('gender_diversity') + record.get('equal_treatment') + record.get('mobility'));
        console.log(temp_index);


});

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err)} else {
      base('company').select({
          // Selecting the first 3 records in Grid view:
          maxRecords: 100,
          view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          records.forEach(function(record) {
              console.log("hitting here");
              console.log(record.get('user'));
              console.log("getting GES: " + record.get('GES'));
              //

          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();

      }, function done(err) {
          if (err) { console.error(err); return; }
      });

    }
});
