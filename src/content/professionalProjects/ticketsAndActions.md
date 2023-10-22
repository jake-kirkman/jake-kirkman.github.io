This project was around creating a system whereby our Salesforce users could review potential issues and act upon them, this was done using two objects within Salesforce: Ticket and Action. The idea is that anything that needed to be reviewed is created as a ticket, like a transaction needing to be looked at, and anything that *does* something is created as an action, such as releasing or returning a held transaction.

**Tickets**

Tickets ranged from a Transaction Monitoring alerts to errors in external systems to generic support requests, and came primarily from our systems in Azure, coming in via a custom REST endpoint hosted within the Salesforce environment, with support to create and update all the available types of tickets.

Once the tickets were created and reviewed, I created an LWC quick action that sits on Tickets called `raiseAction` which worked using Custom Metadata and dynamically looked at the current record's fields to determine which Action record types were applicable and displayed them to the user for them to select and subsequently create an action for it. I made this using Custom Metadata primarily so that future types added to Action that may be relevant to different types of tickets can be easily added just by updating the metadata records instead of making code changes.

**Actions**

Actions are the doing part of it, ranging from closing/suspending/unsuspending an account to releasing/returning held funds. Once an Action was created (typically manually by a user viewing a ticket or account using the raiseAction LWC), it was automatically submitted for approval via the trigger, whereby their manager and relevant parties would review that particular action. Once fully approved, the trigger would call a future method to then send this action off to Azure where the action was carried out, containing the details of the action and who approved that particular action for an extra audit trail (which was obtained by looking at the ProcessInstanceStep object in Salesforce).

