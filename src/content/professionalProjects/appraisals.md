I worked closely with the Chief of Staff and the CTO of Greengage to create a simple and efficient appraisal process in Salesforce with the aim to have a self-contained and guided process so that users of all experiences can understand what needs to happen and have their say.

So, here's what resulted from this project:
- We had two primary objects, Appraisal and Appraisal Goal
  - Appraisal was the primary object, and consisted of fields that scored the Appraisee and various long text fields to store notes/feedback for audit purposes (e.g notes for meeting, feedback obtained, appraiser agrees to, appraisee agrees to etc)
  - Appraisal Goals were the goals set for the Appraisee, created by the Appraisee and reviewed during the appraisal meeting, and consisted of fields to track what the goal was, why that goal in particular, and the target date
- We needed a way to hand hold the users through this process, which was done through the following ways:
  - I utilised the Path component on the Appraisal lightning page in Salesforce to show relevant fields and a message detailing what needs to be done at a particular stage.
  - Hide fields that weren't relevant yet, this was a time before dynamic forms in Lightning Record Pages, so we opted for the Record Type change trick, whereby there were different layouts for different record types, and the record types were changed via the trigger when a certain stage was met. 
This meant that we could hide fields that weren't relevent for the draft/appraisee prep stages, and show new fields once the appraisal was happening, and more once it was over
- We also needed a way to track anything that came out of that appraisal, such as agreed terms (e.g a payrise or bonus if a goal was met on time), so I created a system where the Appraisee/Appraiser would fill out `Appraisee agrees to`/`Appraiser agrees to` long text fields, and would submit the appraisal record for approval, where the opposing party would accept or reject the terms in a cycle until it was agreed upon. It was this way to primarily fight a possible scenario where they might exaggerate or invent terms that were not discussed, so an approval process ensured that both parties were happy with it.

This went through many different iterations and changes, and I demoed this to multiple users throughout the process to obtain valuable feedback which I would use to improve this system further. 
Once it was approved and deployed, it was rolled out slowly to good feedback starting with the exec team then the other users.

I even had my own appraisal using this system, and demoed the system to the other developers on the team once appraisal season rolled around.