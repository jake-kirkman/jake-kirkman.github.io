I love learning new technologies, and mobile app development always interested me - I worked on a Flutter project way back in my days at Greengage, and well, I wanted to use something that I enjoyed a bit more, being React. So I decided to create a mobile app using React Native this time, working with my Fiancée who designed it in Figma, also settling on the idea together as well.

The topic we chose, was a "Food in Cupboard" app which is essentially a database app tracking things in your kitchen. This app had a few key features that we wanted to implement:
- The ability to scan barcodes to easily add new items to your "database"
- The ability to track amounts of items in different units (Millilitres, Bags, Amount etc)
- The ability to track "recipes" or "meals" that use up certain units or amounts from the ingredients
- The ability to plan dinners or meals over a specific timeframe (e.g plan this weeks meals)
- The ability to output a shopping list based on what you have in your house and what you plan to have this week

So, a fairly ambitious app. Especially given I've not had much experience writing a mobile app, let alone one using React Native and heavily utilising databases. However, I thoroughly enjoyed learning and building this app.

I ultimately got to a point where you can do almost every single item on that feature list, with some limitations or with an ugly UI. However it was functional. And to this day, I'm quite proud of the work I did on it. However, I quickly got burnt out and stopped working on it once things at my day job got pretty busy. But I do plan to return to this idea and get it published on an app store. I think that would be very cool.

I built this utilising an Expo Typescript project, utilising a lot of pre-built packages to assist me in having proper inputs, a theming/style library and support for a SQLite database hosted on the app. However, I only have an iPhone, and so the majority of it was built on the Expo Go app and linking that to the project, meaning I had very little control over native scripts that you sometimes need for certain features which limited my ability to make things as nice as I would have wanted.

However, the introduction of a SQLite database was also an interesting challenge for me, as I had no prior experience with SQL. I had used SOQL in Salesforce, but SQL is quite different in it's capability to directly manage data within the language (whereas SOQL is focused primarily on read-only operations). Regardless of how new the language was to me, I tried to implement a strong framework around running these queries on the app, to allow for data creation and querying whilst having strong SQL-injection prevention around it (well, as much as it matters when the database is hosted within the app itself). I also really enjoyed learning this aspect of the app, and seeing it work with the various CRUD screens within the app was also a real joy.