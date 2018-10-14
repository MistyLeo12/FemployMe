# Femploy 
Hack Duke 2018 

## Inspiration
There are many job sites that have proven popular and powerful by providing transparency into the jobs and companies. However, for women, there are many important questions that are rarely asked and rarely answered. For example, questions regarding gender pay differences, equality of treatment, and opportunities for women to advance within a company structure. It is imperative that the answers to these questions are transparent to a female job-seeker, and so we sought to provide this transparency through a platform that will allow women to help women navigate the workforce.

## What it does
Femploy.me collects and analyzes data from anonymous user-inputed reviews from women. We ask for information on pay, gender diversity, and equality of treatment, as well as financial and personal benefits, such as paid maternity leave, health insurance, and flex-time. Using this data, we score each job at a company on a financial satisfaction metric & a gender equality satisfaction metric. Thus, when a women seeking a job clicks on to Femploy.me, they have access to rating, summary of benefits, and reviews by previous and current employees. Through this method, we give women a better sense of whether the job is right for them and what they should expect in the work environment of a specific company.


## How we built it
We used React.js to create the web application. The data from anonymous reviews are stored in a database using Airtable, where the data is then analyzed to compute the financial satisfaction metric and gender equality satisfaction metrics. Node.js is then used to connect our Airtable database to the React front-end.

## Challenges we ran into
We had to learn how to use React and build a web app from scratch, so the initial learning curve was a challenge we had to face. Managing work streams using Git proved to be a challenge at the start as well. 

## Accomplishments that we're proud of
We are proud of learning how to use React in such a short time and being able to implement it to create our web application. In addition, for our metric computations, we were able to analyze many data points, which although complicated the matter, results in a much more reliable metric to rate jobs & companies.

## What we learned
We learned how to build a web app from scratch using React. We learned about how to effectively manage workstreams on Git.

## What's next for Femploy.me
- Improve on the UI
- Add search functionality
- Integrate more data on companies/jobs
