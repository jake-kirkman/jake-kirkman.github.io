The goal of this project was to design and create a system that allowed the users of our app to do three things:
- Create Approval Processes whereby a transaction of a certain criteria needed to be reviewed by one to many other users
- Review transactions that have triggered an approval process and needed to be reviewed by an approver
- Manage access to these screens on a per-user basis

This task was to extend an existing React app (which at the time was a very basic read only UI for Statements) and transform it into something capable of doing the above. It was built using Bootstrap CSS in a Typescript React project.

I was the lead developer on this project and made the entire design left to right inside of Figma, working closely with my project manager and the product owner to obtain the information necessary to build a design that best suits the needs of our clients. Once the design was finalised, I created a set of 21 REST API Endpoints that would be required for this app inside of Swaggerhub using the Open API specification, then I set out alongside a junior developer to build these screens inside of this React App as well as rework fundamental parts to support further growth of the app. The backend was hosted on Azure and was built by a backend-focused senior developer who created the endpoints that I had designed in Swagger that we then integrated with in the React app.

Once the development was finished, I worked closely with the Lead QA on the team to ensure every part of the system had a user story and was in close contact to ensure any questions could be answered prompty in order to not affect his testing. Fixing various bugs that were raised and ultimately seeing it through to production release.