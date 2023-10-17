I wanted to create a VSCode extension due to it being my primary IDE, and so I set out to create an extension that would integrate with the project management software we were using at Greengage: [Wrike](https://www.wrike.com/), with the aim to allievate some of the admin work where I could update and create tasks from within my code editor itself.

The primary purpose was to create a set of very specific tasks in Wrike that conforms to the way that we structered our branches. And so I set out to create an extension that could do the following:
- Authenticate with Wrike via an OAuth flow using a Wrike API App which would be handled via VSCodes built in authentication handler
- Obtain a list of projects and tasks from a given folder permalink
    - Including displaying of all child tasks with the option of opening within wrike at a click of a button
- Create new tasks in the format we expected at Greengage through VSCodes command pallette
    - This included finding the newest "branch", incrementing the number, creating two new tasks with the new identifier. Which was expanded on when you wanted to add a new version, which would find the relevant version, increment the number of your choice and create the task.

This included integrating with many different Wrike APIs via REST in order to obtain the list of tasks under a specific folder, create new tasks, update various tasks, generating hyperlinks and obtaining authentication.

I mainly did this to learn VSCodes extension API, help my colleagues, and just build something fun, entirely out of my own time.