%%TOC%%


# The difference between this package and nodered-typescript-essentials (READ THIS!)

We provide another Node-RED and TypeScript-related npm package named *nodered-typescript-essentials* on our GitHub account:

https://github.com/geonet-mrn/nodered-typescript-essentials

The two packages are *closely related*, but they do *different things*. Please read this section carefully, it is important to understand in order to make the best use of the two projects and get started quickly and without unnecessary confusion.

*node-red-typescript-template*, the package for which you are currently reading the README, is an example/template for a Node-RED extension using TypeScript. It uses the other package, *nodered-typescript-essentials* as a dependency.

*nodered-typescript-essentials* is a library that provides "building blocks" to create Node-RED extensions with TypeScript quickly and easily. However, it is *NOT* a project/package template on its own.

The idea behind this is to be able to include *nodered-typescript-essentials* as an external dependency in many different Node-RED extension projects. By keeping the library as an external dependency, it can be developed independently of actual Node-RED extension packages, and the projects that use it can automatically benefit from additions and improvements to it.