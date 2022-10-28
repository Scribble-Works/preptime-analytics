# Preptime Analytics

Frontend React application for the Preptime Analyzer.

## Getting Started

This repository contains the resources and instructions that will get you a copy of the project up and running on your local machine for development and testing purposes, and also with notes on how to deploy the project on a live system.

### Prerequisites

This project uses Google APIs and therefore requires you to create a project on Google Cloud Platform (assuming you already have a google account and you're signed in). See the [documentation](https://cloud.google.com/resource-manager/docs/creating-managing-projects) on how to create a Google Cloud Project. After creating the Google Cloud project, navigate to the APIs & Services page and enable the following APIs;

* Apps Script API
* Gmail API
* Google Drive API
* Google Forms API
* Google Sheets API

A step by step guide on how to enable Google APIs can be found [here](https://support.google.com/googleapi/answer/6158841?hl=en). The next thing to do now is to create your access credentials which are; API Keys, OAuth client ID, and a Service account. On the same APIs & Services page, click on "Credentials" on the sidebar menu on the left. This serves you a page where you can create new credentials by clicking on the "Create Credentials" button on the top left of the page. You can see the guide on how to create these credentials [here](https://developers.google.com/workspace/guides/create-credentials).

In addition to that, you will also need to create a new [Google App Script project](https://script.google.com) and copy the code in this [App script project](https://script.google.com/home/projects/1QShlUGMc11-f3q_ADp00WRILV4XEyV9YgB1FFIC_ZV1RNLy98_uMtqxD/edit) which is used by the original Preptime project. Link your Google cloud project to the App script project by following this [guide](https://developers.google.com/apps-script/guides/cloud-platform-projects).

To get the project started, there are some tools you need to install on your local machine. The list of tools you need to install have been provided with a guide on how to install these tools.

##### `Install git`

For users on Mac, the best way to install git is by using [Homebrew](https://brew.sh/). To install Homebrew, open your shell and run the following command:

```
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After the command is done running, check if Homebrew is successfully installed by running:

```
$ brew --version
```

If Homebrew is successfully installed, the version will be logged to the screen. Now proceed to install git using Homebrew with the following command:

```
$ brew install git
```

For users on Windows, download the [latest version](https://git-scm.com/downloads) of Git and choose the 64/32 bit version. After the file is downloaded, install it in the system. Once installed, select Launch the Git Bash, then click on finish. After that, check for a successful installation by opening your terminal and logging the version of git with:

```
$ git --version
```

##### `Install Node.js`

For users on Mac, install Node.js with Homebrew using the following command:

```
$ brew update
$ brew install node
```

For users on Windows, download and install the [Node.js](https://nodejs.org/en/download/) .msi installer. Follow the guide on the installer and node.js should be installed successfully on your local machine. After that, check for a successful installation by logging the version of Node.js with:

```
$ node --version
```

### Installation

Now that you have installed the tools required to start the project locally, we provide a step by step series of examples that tell you how to get a development environment running. Before you can get the dev environment running, you need to download the project resources (files) from the github repository using git (which you installed earlier). To do this, you simply need to run the following command:

```
$ git clone https://github.com/Scribble-Works/preptime-analytics.git
```

After git is done cloning the project repository, move into the project folder and install the dependencies:

```
$ cd preptime-analytics
$ npm install -g yarn    // project uses yarn
$ yarn install        // or simply "yarn"
```

You will then have to create your environment variables in a .env file with the following variables:

* REACT_APP_STRAPI_BASE_URI - URL for the CMS (https://admin.preptimeanalytics.com).
* REACT_APP_GOOGLE_API_KEY - Your Google API Key
* REACT_APP_GOOGLE_CLIENT_ID - Your Google client_id
* REACT_APP_SCRIPT_URL - Your Google Script deployment URL
* REACT_APP_API_URL - Base URL for the API endpoints (this refers to the deployed preptime [backend application](https://github.com/Scribble-Works/preptime-api).)

Now start the development server with the following command:

```
$ yarn start
```

## Available Scripts
In the project directory, you can run:

##### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment

The original project is deployed and hosted on Amazon Web Service. But developers are encouraged to deploy or host it on any other service they prefer. The recommended method for building this project for production is by using Docker.

## Built With

* [React](https://reactjs.org/) - The frontend framework used
* [Yarn](https://yarnpkg.com/) - Dependencies and package management

## Contributing

Please read [CONTRIBUTING.md](https://github.com/Scribble-Works/preptime-analytics/blob/main/Contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [git](https://git-scm.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Scribble-Works/project/tags). 

## Authors

* **Scribble Works** - *Initial work* - [Scribble Works](https://github.com/Scribble-Works)

See also the list of [contributors](https://github.com/Scribble-Works/preptime-analytics/graphs/contributors) who participated in this project.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE.md](LICENSE.md) file for details
