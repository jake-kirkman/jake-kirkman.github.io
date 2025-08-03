This project was around rebuilding the existing Sales process which was originally built in Aura components back in 2019 and make it into a more modern experience for the sales agents, utilising the latest technology that Salesforce offers.

We built the tool using Screen Flows, with standard screen components for simpler things like simple form captures, and then Custom Lightning Web Components to fill in the more complex areas.

During the course of my time working on this project (over 8 months), I built, modified and maintained over 7 lightning web components, some examples include:
- A component to capture Bank Details on a per Gas/Electricity meter basis with the ability to add a new bank account
- A component to display the Quotes the agent is able to sell
- A component to capture Address History
- A component to search Experian's Business Targeter API
- A component to display Gas and Electricity meters they are able to sell quotes for

And in addition to these bigger components, I also made a variety of smaller components to help speed up the development of the bigger components due to their reusability. Examples include:
- A `lightning-card` inspired Accordion component utilising the `onslotchange` events on `<slot>` tags to dynamically expand and collapse different sections
- An input component that acts as a search bar, showing multiple results based on the search term that the parent component can dictate - results support a name, an icon and some meta-text
- A component that renders a series of steps with loading spinners, each with a description, task and labels related to it. This was used to give efficient feedback to the user that a multi-step process is happening.
- I revamped a utility component that was used across almost all components to better log errors, handle wire results and house any other general utility functions
- A `MixIn` component that allows for a super easy way to apply a global errorCallback handling that links into Bionic's logging infrastructure
- A `MessageService` helper component to allow for easier setup of cross-component communication
- A "dummy component" that can sit on a flow screen, make itself "change" therefore allowing a Screen Flow to run it's Validate formula and display a message if possible. This was necessary as Picklists in Screen Flows do not support validation formulas, so this was a workaround that I created for the admins and myself to use in specific scenarios. 

And many more that I'm sure I've missed!

This project also included many integrations via REST api with Experian, GBG, Companies House and our own private APIs - most of which I helped implement or modify. 

Something that was incredibly important to me during this project, was to define and implement a strong monitoring and reporting solution for the tool. As the legacy tool had next to no monitoring and constantly had "invisible" issues that we won't know about until the agents told us. So for this project, I did the following:
- I was extremely vocal at every refinement and discussion about the project to ensure we had planning and availability around implementing a strong monitoring and reporting solution
- Ensured that every single node within all of the flows had a fault path - each of these fault paths would create a log record, and display an error message to the user with the Id of the logger for easier debugging.
- I implemented additional logging frameworks for Flows, Lightning Web Components and Apex to allow developers and admins to create logs far easier than before
- I also implemented these logging frameworks in all components that I worked on, and assisted other developers and admins to also ensure they had logs created for all errors as well.
- I built a Salesforce Report on the Logs grouped by source and method/node, sorted by created date. Along with a chart that displayed this information for a quick glance check.

This resulted in a really strong monitoring and reporting solution, where we were able to spot issues straight away in both QA and UAT, as well as in production once it started rolling out, often before any issues were raised in the hypercare chats. This also set a strong precedent within the business for future projects to implement strong monitoring and reporting due to it's success.

Before this project, I hadn't really used LWCs within a Screen Flow outside of a simple input/output component, so building such a diverse set of components has really helped solidify my knowledge in this area. Throughout development, I also hosted several "Tech Demo Time" sessions with the other members of the Salesforce community at Bionic, and went through the technical details of the components and screenflows, as well as discuss the quirks of ScreenFlows that I had discovered.