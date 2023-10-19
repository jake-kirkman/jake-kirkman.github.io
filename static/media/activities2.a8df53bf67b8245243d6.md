Standard Salesforce supports Tasks and Events but offer very little in record visibility restrictions and logic whereby the general rule of thumb is that if you can see the record the task is linked to, then you can see the activities associated with it. However we needed a system that had much more flexibility in how it gave access to users, with it being optionally disabled, enable or disable hierarchy sharing, limit access depending on the linked object type etc.

And so we created `Activity` and `Activity Link` and I planned, created, tested and deployed the following tasks:
- Support for sharing the activity with the creator of the record
- Support for transferring all shares from a linked record over to the Activity record (This was a Update/Create/Delete process that compared the new and old shares)
- Support for disabling all sharing logic by making the activity "Private"
- Support for ignoring any "Activity Guarded" records (Essentially a checkbox on the linked record)
- A bespoke recreation of the standard Activity Timeline that uses the newer object model
- A bespoke LWC that renders content based on the Page Layout metadata of the Activity to render fields in the same way, but inject a custom multi-lookup component to allow linking to up to 34 different objects 
- Overnight sharing recalculation batches
- Near 100% unit test coverage for all components and logic involved

The biggest challenge of this project was building the apex in a way that was quick to extend due to us using multiple lookups within the `Activity Link` object (34 of them!), and I didn't want to have to add code in multiple places to add a new Activity supported object. I utilised the schema heavily for this reason and the ultimate result was that to add another object to support activities 2.0, it was a new field on Activity Link, and the addition of the activity timeline LWC onto the object's lightning page and everything else worked seamlessly.