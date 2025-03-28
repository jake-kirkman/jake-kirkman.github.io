I typically have various scripts and SOQLs that I will write when working on a ticket or investigating an issue, and I always hated the idea of spreading these out into multiple files, or one big text file which can get quite hard to maintain. So after some investigating, I settled on the idea of utilising the Notebook Extension API in VSCode to have a series of cells that contain either apex scripts or SOQLs that you could run inside of your VSCode.

So over a few weekends, I created the Apex Notebook VSCode extension which did exactly that. A series of cells that can have a language of `anon-apex` or `soql`, with the run button executing these cells directly in your default salesforce org! 

It is written in typescript like my other extensions, and integrates heavily with the existing Salesforce packages that Salesforce use themselves in the official VSCode extensions in order to execute both the scripts and soql statements.

The apex cells will output the debug log directly returned from the execution of the script. And the SOQL will display the results in a table format similarly to the developer console (just without the interactivity). The extension 

The extension can be viewed here: [Anonymous Apex Notebook](https://marketplace.visualstudio.com/items?itemName=JakeKirkman.anonymous-apex-notebook). It is by far my most downloaded extension, and one I've used extensively in my own work as a great way to keep everything organised and easily referenced later on.