# File Manager

Simple project with one single class named "FS".
Stores the content in filename within the given directory, returns the content from the filename.

Author: Eszter Weiszné Szabó

## Run the app

1. ensure [NodeJS](https://nodejs.org/en/download/) (v5.2.0 or above) is installed on the dev machine
2. get dependencies using `npm install`
3. Use the well-known `npm start`

## Dev guidelines

1. use [VSCode IDE](https://code.visualstudio.com/)
2. add [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension
3. before editing this README, add (markdownlint) extension

### Formatting

`npm run lint` - shows you the possible cracks in your formatting,
`npm run lint-autofix` even fixes the warns / errors for you

## Dev know-how

Check this [doc](https://www.mailslurp.com/blog/fastest-way-to-start-a-typescript-project/) to see how this project was initialized

## npm packages

used [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) to ensure import correctness for paths / names

## DevOps & Deployment

### Continuous Integration/Continuous Deployment (CI/CD)

1. Ensure your source code is present on Github / BitBucket
2. The code has to compile to be ready for deployment, include the `npm run tsc` as one of the very first steps of your pipeline
3. Trigger the pipeline on code changes in the repository - for example when a new merge / pull request is completed and changes are added to master / main branch

### Deployment

One of my projects is deployed to [Digital Ocean](https://digitalocean.com/) through [Azure DevOps](https://azure.microsoft.com/en-us/products/devops)

Setting up droplets, manipulating the cloud environment etc. is outside of my expertise, but check out [these steps](https://www.bradcypert.com/deploying-from-azure-devops-to-digitalocean/#:~:text=Deploying%20from%20Azure%20DevOps%20to%20DigitalOcean%20isn't%20as%20difficult,of%20their%20build%20pipelines%20feature.) completed by the other dev on that project.
