# Test for Merlin

## Automation Project

This repo contains Merlin Test Automation Project, with the tests written in Cypress for the frontend web page interaction and supertest for API interaction.

---

## Getting Started

### Pre-requisites

#### 1. Install Git:

_(if you have already installed it, skip this step)_

You can download it in this [link](https://git-scm.com/downloads)

#### 2. Install Node JS:

_(if you have already installed it, skip this step)_

You can download it in this [link](https://nodejs.org/en).

#### 3. Install IDE software:

_(if you have already installed it, skip this step)_

Here is a [list of IDEs](https://www.keycdn.com/blog/best-ide) that you can view. For a better user experience it is recommended to install [Visual Studio Code](https://code.visualstudio.com/download).

### Setup

#### 1. Clone the Test Automation repo:

Clone the Test Automation repo and navigate to the cloned directory

```
git clone https://github.com/NelsonTorres9933/pruebaMerlin
cd pruebaMerlin
```

#### 2. Install repo modules:

Install the dependencies to the local _node_modules_ folder. By default, `npm install` will install all modules listed as dependencies in `package.json` [file](https://github.com/NelsonTorres9933/pruebaMerlin/blob/master/package.json).

```
npm install
```

## Automation of a web site

The automation of the web site is located in the Cypress folder.

To run the Cypress tests use the following command:

```
npx cypress run
```

The test performs the screenshot found in the path [cypress/screenshots/](cypress/screenshots/)

Two screenshots are created:

1. Screenshot of the text fragment where it says which was the first automated process
2. Screenshot of the complete Wikipedia.org website

## Data processing in APIs

The files created for the API treatment tests are located in the [test folder](test/)

The apiScript.js file contains all the tests made for the APIs treatment.

To execute them the Mocha dependency was implemented, the following command has been created to be able to execute them:

```
npm run test
```

The file petsNumber.js contains the class implemented to know which pets were obtained from the pets sold service, it has the same name

The tests create json files with the outputs of each specific test.

The created files are located in the [fixtures folder](fixtures)

1. userInfoToCreate.json: user information to use in the user creation service
2. userInfoCreated.json: response from the user creation service
3. petsSold.json: list of pets sold with the structure {id, name}
4. numberOfPets.json: list of pet names sold with the number of times they are repeated
