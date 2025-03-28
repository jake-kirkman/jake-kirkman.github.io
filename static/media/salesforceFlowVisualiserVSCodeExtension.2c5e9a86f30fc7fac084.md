Another VSCode extension. This one was around visualising the Salesforce Flow metadata within your VSCode editor. The main drive for this was because during Code Reviews, I often saw the changed XML file but it was sometimes very hard to understand the actual flow of things, especially if there was a lot of changes made. And when you can't easily view the flow in the native editor due to other dependancies like fields or apex classes, it makes verifying the changes a lot more difficult.

Plus, visualising a flow from metadata sounds like a fun challenge! So I took it as a personal challenge to try and get a visualisation of the flow metadata within the VSCode editor itself. Before I get started though, the extension can be found here: [Salesforce Interactive Flow Visualiser](https://marketplace.visualstudio.com/items?itemName=JakeKirkman.salesforce-flow-visualiser)

So, after working on my Apex Notebook extension for VSCode, I had a brief understanding of how VSCode handles these custom webviews in the editor, meaning this extension needed two parts:
1. The VSCode extension side.
2. The Visualisation side.

The Extension side communicates with the editor to read files and will pass it to the visualisation layer - essentially the "server" in a sense. The Visualisation side is essentially a web app that uses HTML/JS/CSS to display the flow that is compiled separately.

Out of these two layers, the visualisation part is definitely the most complex, as it has to deal with the entire rendering of a flow that could be infinitely big and connected in very complex ways. 

I attempted to create my own flow renderer, but given this was a weekend project I couldn't justify the time it would take to get that done. So instead I opted to use `react-flow`. Which meant I needed to get React working properly in a web app. I chose to implement `preact`, which essentially is a realtime browser-based react renderer (rather than the usual server compiler that react normally has).

So, with the visualisation done, I simply had to get the XML parsed correctly, and passed to the visualisation layer in a way that react-flow would understand. With some very basic functionality to make understanding the flow easier, like using the react-flow's native animated arrows feature. And the ability to view XML belonging to a specific node by clicking on the node itself.

Over all, I'm happy with where this extension got with the limited time I had working on it, and would love to extend this extension to support more features, but it's at a point where I find it useful for it's original purpose of helping code review PRs so I've left it here for now. 