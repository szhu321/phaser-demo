# Learn Phaser
This document will contain tutorials on Phaser related topics.

## Phaser 3 with Typescript
In this section we will see how we can set up phaser 3 with typescript. I will be using [VS code](https://code.visualstudio.com/) as my IDE of choice.

### NPM
Before we start we need to download npm (node package manager), which we will use to manage our packages. You can download it [here](https://nodejs.org/en/). Downloading Node.js will also download npm.

### Phaser 3 
Now we can start downloading our packages.
1. To start open up VS Code or your editor of choice.
2. Create an empty folder called phaser-project.
3. Open up a terminal inside the phaser-project folder.
4. Inside the terminal run the following:
```bash
npm init -y
npm i phaser
```

### Webpack
Webpack is a bundler that combines all of our source files into a single Javascript file.  
To install run:
```bash
npm i webpack webpack-cli ts-loader -D
```
The -D option will install the packages as dev dependencies. The webpack-cli allows us to run webpack in the terminal. The ts-loader allows webpack to complie ts files.

### Using Webpack
The next step is to get webpack up and running. 
1. Before we do this let us create a src and dist folder in the root folder.
2. Next create a file called index.html and add it to the dist folder. The code for index.html is shown below.
```html
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Phaser</title>
    </head>
    <body>

        <script src="bundle.js"></script>
    </body>
</html>
```

3. Next, create a file called app.ts and put that inside the src folder. 
```Typescript
console.log('Hello Phaser!');
```

4. Now we will create webpack's config file to control webpack's behavior. Create a new file called webpack.config.js in the root folder.
```Javascript
const path = require('path');

module.exports = {
    mode: 'development', // development build or production build
    devtool: 'inline-source-map', // source maps provide useful information durning development
    entry: './src/app.js', // Webpack will initilally look here
    output: {
        path: path.resolve(__dirname, 'dist'), // The output file path
        filename: 'bundle.js' // Output file name
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"],
        // Add support for TypeScripts fully qualified ESM imports.
        extensionAlias: {
            ".js": [".js", ".ts"],
            ".cjs": [".cjs", ".cts"],
            ".mjs": [".mjs", ".mts"]
        }
    },
    module: {
        rules: [
            // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }
        ]
    },
    watch: true // Reload when changes have been made to the source code.
}
```

5. Following the webpack.config.js file we will create a tsconfig.json file. This file will be used to add functionality when using TypeScript.
```json
{
    "compilerOptions": {
        "noImplicitAny": true,
        "target": "ES6",
        "module": "CommonJS",
        "moduleResolution": "node",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "sourceMap": true
    }
}
```
The reference page for the config above can be found [here](https://www.typescriptlang.org/tsconfig).
Note: CommonJS may cause problems with 

6. We are now going to add a new script in our package.json file.
```json
"build": "webpack"
```
7. Once we have the script added we can run it by running the following in the terminal.
```bash
npm run build
```
8. As the final step run index.html in the dist folder with a web server of your choice. I used Live Server, which can be found as an extension in VScode.