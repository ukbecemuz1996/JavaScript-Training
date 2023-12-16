# Week 1
## What is JavaScript

JavaScript is a programming language initially designed to interact with elements of web pages. In web browsers, JavaScript consists of three main parts:

- ECMAScript
- Document Object Model (DOM) for interacting with
- Browser Object Model (BOM) for interacting with Browser API

JavaScript is the programming language that brings interactivity to web pages, ECMAScript is its standard, the DOM is how JavaScript interacts with web page content, and the BOM is how it interacts with the browser itself.

ECMAScript is the specification and JavaScript is the implementation. 

New ECMAScript versions comes with new features.
[ECMAScript Versions](https://www.w3schools.com/js/js_versions.asp).

## Client-side JavaScript
- **Environment**: Runs in a web browser.
- **Main Role**: Enhances user interface and user experience on web pages. It's used for tasks like form validation, interactive features, animations, and handling user events.
- **Access to Browser APIs**: Can interact with the Document Object Model (DOM) to manipulate web page content, and has access to other browser APIs for tasks like making HTTP requests (XMLHttpRequest or Fetch API), storing data locally (LocalStorage, SessionStorage), and more.
- **Resource Utilization**: Uses the resources of the user's device (CPU, memory).
- **Security Constraints**: Has limited access to the user’s system for security reasons. Cannot access the file system directly, and cross-origin requests are restricted.
- **Examples**: Dynamic content changes, form validations, interactive maps, animations.

## Server-side JavaScript
- **Environment**: Runs on a server (commonly using environments like Node.js or Deno).
- **Main Role**: Handles backend tasks such as database interactions, server configuration, authentication, and serving files and data to the client.
- **Access to Server and Database**: Can interact with the file system, databases, and external services. It's used to create, read, update, and delete data (CRUD operations), manage server requests and responses, and more.
- **Resource Utilization**: Uses server resources. Scalability can be an important consideration.
- **Security Considerations**: Must secure the data and manage secure transactions, like handling user authentication and authorization.
- **Examples**: RESTful API services, data processing, server-side rendering of web pages.

## Setup Environment
- Visual Studio Code (VS Code) [download](https://code.visualstudio.com/download)
- Node + NPM (Node Package Manager) [download](https://nodejs.org/en/download)

## JavaScript Basics

- Comments
- Variables
- Data Types
- Template Literal
- Object Literal
- Arrays
- Falsy
- Functions
