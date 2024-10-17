This project was about creating a small VSCode extension that assists in the creation of Custom Labels in Salesforce whilst working within Apex Classes. 
The extension is actually published on the VSCode marketplace, which you can see here: [https://marketplace.visualstudio.com/items?itemName=JakeKirkman.sfdc-clg](https://marketplace.visualstudio.com/items?itemName=JakeKirkman.sfdc-clg)

I typically store my help messages or error messages at the top of the Apex Class I'm working on as a final static String variable so that the things that are likely to change are easier to get to, however the best practice here is to store these messages in a custom label so that it's accessible to Admins and can be translated.

But I had already written so much code using this principle, and suddenly had 60+ hard coded Strings to change to custom labels, and going through one by one was an incredibly tedious process as the Salesforce UI can be quite slow. So I set out over a weekend to create a VSCode extension, where I can simply highlight the string I want to make a custom label within VSCode, and run a command which does a few things:

1. It will prompt the user for a label name, and any other label metadata (e.g language, description etc)
2. It will navigate to your `force-app/main/default/labels/CustomLabels.labels-meta.xml` file in your current workspace, and add a new custom label with the value of the selected text (XML escaped)
3. Replace your current selected text with `Label.{YOUR_LABEL_NAME}`

Where the user can then deploy the custom labels manually to their current org, and then deploy the apex class. This helped me so much with the project I was working on at the time.