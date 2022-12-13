<a name="readme-top"></a>

# test-it

A website to test your test frameworks

## About the project

The goal of this project is to create a test website that can be used during training sessions on testing, especially test automation.

You have full control on almost every UI component or element. The following can be adjusted:
- add/remove ui components and elements
- change ui components and elements IDs
- change ui functionalities

<p align="right">[<a href="#readme-top">back to top</a>]</p>

## Requirements

1. [Test-it backend](https://github.com/WouterBeinsberger/test-it-backend) installed
2. [Node.js](https://nodejs.org/en/download/) installed

Node installation guide:
- on [windows](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac#windows)
- on [mac](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac#mac)
  - don't forget to [set NODE HOME in Environment Variable](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac#set)

<p align="right">[<a href="#readme-top">back to top</a>]</p>

## Getting started

### Installation

To install the node packages needed, navigate to the project root folder and use the following command:
```
npm install
```

<p align="right">[<a href="#readme-top">back to top</a>]</p>

## Usage

To start the test-it web application use the following command:
```
npm run serve
```

Once started the app is running on your local network, you can navigate to: http://localhost:8080/

<p align="right">[<a href="#readme-top">back to top</a>]</p>

## Roadmap

- [x] Setup
  - [x] vue
  - [x] Routes frontend
  - [x] Create store
  - [x] Create api connection
- [ ] API
  - [x] Add services to api
  - [x] Create API connection
  - [x] Fetch hero data
  - [x] update hero data
  - [x] Fetch about us data
  - [x] update about us data
  - [x] Fetch services data
  - [x] update services data
  - [x] Fetch likes data
  - [x] update likes data
  - [ ] Fetch contact data
  - [ ] update contact data
- [x] Routes
  - [x] Create home route
  - [x] Create bugs rout
- [ ] Store
  - [x] Create hero store
  - [x] Create about us store
  - [x] Create services store
  - [x] Create likes store
  - [ ] Create contact store
- [x] Views
  - [x] Create home view
  - [x] Create Bugs view
- [ ] Header
  - [x] Create header component
  - [x] Add header component to home view
  - [ ] Refactor header component
- [x] Hero
  - [x] Create hero component
  - [x] Add hero component to home view
  - [x] Create hero bugs component
  - [x] Add hero bugs component to bugs view
- [x] About us
  - [x] Create about us component
  - [x] Add about us component to home view
  - [x] Create about us bugs component
  - [x] Add about us bugs component to bugs view
- [x] Services
  - [x] Create services component
  - [x] Add services component to home view
  - [x] Create services bugs component
  - [x] Add services bugs component to bugs view
- [ ] Likes
  - [ ] Create likes component
  - [ ] Add likes component to home view
  - [ ] Create likes bugs component
  - [ ] Add likes bugs component to bugs view
- [ ] Contact
  - [ ] Create contact component
  - [ ] Add contact component to home view
  - [ ] Create contact bugs component
  - [ ] Add contact bugs component to bugs view
- [ ] Footer
  - [ ] Create footer component
  - [ ] Add footer component to home view
- [ ] Base
  - [x] Create base button component
  - [x] Create base bugs card component
  - [ ] Refactor base button component
  - [ ] Refactor bugs card component

  <p align="right">[<a href="#readme-top">back to top</a>]</p>
