## some-webparts

![Auburn SharePoint](https://raw.githubusercontent.com/CodeHeight/TypeScript-Examples/master/images/auburn300x200.jpg)

Demos for presentation on Oct. 3rd, 2017

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
gulp trust-dev-cert
gulp serve
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

```bash
gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
```

### Important cmds

```bash
Fabric React: npm --save install office-ui-fabric-react
gulp trust-dev-cert
yo @microsoft/sharepoint
```

### Azure/CDN cmds

![Azure Storage](https://raw.githubusercontent.com/CodeHeight/TypeScript-Examples/master/images/azure.png)

Create storage account in Azure

```bash
gulp --ship
gulp deploy-azure-storage
gulp bundle --ship
gulp package-solution --ship
```


## Webparts ##

![Webparts Folder](https://raw.githubusercontent.com/CodeHeight/TypeScript-Examples/master/images/webpartsIcons.png)

1) Image Magnifier

![Image Magnifier](https://raw.githubusercontent.com/CodeHeight/TypeScript-Examples/master/images/solarsystem.png)

2) Weather

![Weather](https://raw.githubusercontent.com/CodeHeight/TypeScript-Examples/master/images/weather.png)

3) YouTube Search

![Weather](https://raw.githubusercontent.com/CodeHeight/TypeScript-Examples/master/images/youtube.png)

