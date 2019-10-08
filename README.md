# react-changelog
React and Express changelog notifier

## Feature Overview & Requirements
**Overview**: Build a simple "changelog notifier" app that notifies a user of new features 
<br/>
<br/>
**Requirements**: 
- Consume a markdown file that lives on Github as a Gist
- Display the file to the user as a Modal when user clicks the notification icon on their avatar 
- Use React and a web server such as Express

## Stack Highlights & Dependencies
- **Server**: Node, Express (using express generator), node-fetch, express-async-await  
- **Client**: React, react-dom, react-router-dom, node-sass

## API Breakdown 
- **changelogRouter**: 
  - GET '/api/changelog': makes async request to github API, sends relevant file to client as response
  - Uses node-fetch and async/await with a try/catch to avoid silent errors
- **indexRouter**: default express generator Router for index
- **usersRouter**: default express generator Router for users

## Component Breakdown
**Pages**:
- **HomePage**: App renders HomePage component on '/'
- **ChangeLog**: App renders ChangeLog component on '/changelog' <br/>

**Containers (stateful)**:
- **App**: Renders Header, Modal, and HomePage/ChangeLog
  - State: 
    - **fileContent**: Array<string> - Parsed from fetch to server
    - **showModal**: boolean - Flag for Modal Component mount/unmount
  - Methods:
    - **componentDidMount()** - Calls fetchAPI, parses response and sets fileContent state
    - **fetchAPI(url: string)** - takes in endpoint and returns JSON data
    - **createCollections(content: Array<string>)** - takes in array of Markdown strings, returns array of (changelog) collections
    - **handleToggleModal()** - Toggles showModal State

**Components (stateless/functional)**:
- **Header**: Renders header navigation, logo, user Avatar, notification count
  - Props: logo: string, title: string, userIcon: string, notifications: number, toggleModal: function
- **Modal**: Renders a Card component for each collection it receives
  - Props: collections: Array<{header: string, date: string, description: string}>
- **Card**: Renders props in JSX
  - Props: header: string, description: string, date: string
  
