This is what you're currently viewing, being [jake-kirkman.github.io](jake-kirkman.github.io) which I created as a way to showcase my previous projects and as a way to practice my skills with React.

It was built using React, Bootstrap CSS and Typescript, hosted on github pages, meaning you can see the source code [here](https://github.com/jake-kirkman/jake-kirkman.github.io)

Whenever I approach a project, I always try to ensure that extensibility is thought about at each step of the development process, and this project was no different, especially given that I will be updating this frequently as I build more and more things down the line. Because of this, most of this site is generalised whereby it works off of JSON "metadata" and Markdown files so that it's fairly easy to add new projects to it.

Why Markdown? I'm fairly used to writing markdown for my code reviews, readmes and various notes that I take, and it allows basic functionality like displaying lists and headers, so was a pretty easy choice. I'm using `react-markdown` to display the markdown string that's obtained through a callout to github page resource that contains the markdown file. The JSON was just to store information that I can programmatically display in a different fashion, like the tags, date or title.

Given I have the JSON metadata containing some filterable types, I do plan on extending this site to support a search, tag filtering and sorting - but I'll have to find the time for that.