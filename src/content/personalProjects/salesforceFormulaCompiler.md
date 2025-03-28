I often come across huge Salesforce Formulas within Flows, Workflows, Fields and other places that are completely unreadable due to everything being squished into one line (or formatted weirdly), and I would often have to spend multiple minutes to format these formulas just to understand them which adds up over time.

So I wanted to build something that could parse a salesforce formula and eventually format it! And well, what's more interesting than trying to learn how you programmatically understand a formula to begin with.

So I went down this big rabbit hole of learning about compilers and how Abstract Syntax Trees (AST) are built, and ultimately created a NodeJS project built in Typescript that takes a text input and converts it into an AST that I could then use to output a formatted version of the formula! I was following a guide on how someone creates a parser for their own programming language which was written in C#. Which meant I had to both understand what it was doing, and also convert it to Typescript.

The end result was a NPM package called `salesforce-formula-ast-generator`, it takes in a string which is a formula, and parses it into an AST, with the option to then output it as a string which is the formatted version. The code for this package can be found [here](https://github.com/jake-kirkman/salesforce-formula-ast-generator).

With something like a formula that could change widely based on what it's for, I knew it was very important to have detailed tests to ensure different types of formulas are formatted and processed correctly. And in doing this I found many bugs myself by seeing what the output was from passing it a flow formula vs a field formula. So I utilised Jest tests to have a series of tests I can run after each change to verify nothing had broken.

Now, at the time of creating this project, I was still very new to Jest tests, so didn't have quite the knowledge I have now, but this was a key part of learning Jest and how it works and how it can be used to verify the project is correctly working.

I eventually used this to create a VSCode extension to have "unofficial" support of formulas in VSCode to make writing them easier (given I typically write formulas in VSCode due to the features that you can use), but I'll write about that in a different post.