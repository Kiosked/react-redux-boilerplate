# React+Redux boilerplate
> Full React/Redux/React-Router/Actions+Selectors boilerplate application, with Webpack

[![Build Status](https://travis-ci.org/Kiosked/react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/Kiosked/react-redux-boilerplate)

## About
This project is a boilerplate for working with current front-end technologies, such as those in use at [Kiosked](http://www.kiosked.com/). It employs the following technologies and tools:

 * React
 * Redux
 * Pug
 * Webpack (4)
 * SASS
 * styled-components
 * Jest

This project can be used as a base for new projects.

## Development
To get started, ensure that you're running NodeJS version 6 or newer (version 8 is preferrable). Run `npm install` to get started.

To **build and watch** the project, run `npm run dev`. To build for production, run `npm run build`.

To use the application locally, follow these steps:

 1. Install `serve` globally: `npm install serve -g`
 2. Run development building in a new terminal: `npm run dev`
 3. Serve the contents of dist: `sudo serve -p 80 ./dist`
 4. [Browse to the page](http://localhost/) in your browser

## Explanation
The source folder is broken up into many different sections, which are explained in detail below. Each file has in-depth comments for further reading.

### index.js
This is the root of the project, and is where the React side of things is rendered into the DOM on `div#root`. This file is designed to set up a few things:

 * State, using the `<Provider>` component
 * Routing, using the `<ConnectedRouter>` component
 * Routes, using the `<Route path="/" />` format

These items are standard for this type of project, especially `<Provider>`, which comes from React+Redux.

_The `<Fragment>` component is necessary underneath `ConnectedRouter` due to it requiring only a single element below it. `Fragment` is perfect because it can hold many components while only outputting one, and doesn't actually render any components into the DOM._

### redux
The redux directory is used to configure the state system. No state management is performed here, only the initialisation of the components needed to manage state (such as the store itself). The router history is also instantiated here, which is used to track the current route (within the URL as well) in the state.

### components
The components is a collection of tidy React components that make up the application's user interface. They may be pure or a bit complex, taking in some props and callbacks here and there. They should remain as pure as possible by not referencing the state - that's the job of the `containers` directory. Components should be mostly reusable here.

A `<Layout>` component is provided here to give a sense of how component reusability might occur from another angle. You might typically style and program a complex `<Input>` component which you like to reuse, but the `Layout` component provides another feature over this: child rendering. Rendering children in the contents of a custom element is a powerful tool that can be best realised in a layout-like component designed to set up the page's design.

### containers
The containers reference components directory, providing them with state and callbacks (for dispatching usually), and are then used by other components and the router. They use **selectors** to pull the correct state in to the **component**, and use **actions** to dispatch changes to the state when the component performs an action.

### reducers
Reducers are how the state changes from one **pure form** into another. It's important to keep the state pure: Don't think about modifying state, but rather think about making new state _from_ old state. Always create new references where you can.

Each logical part of the application will have its own reducer, and it's own file. The contents of the **reducers**, **selectors** and **actions** directories are determined by the reducers needed.

### actions
Actions are _types_ of state changes that occur. For instance: a reducer may have commands for **setting**, **clearing** and **reordering** values, so you'd expect to have at least 3 actions for that.

The actions directory will have a `types.js` index of all action types. These action types are imported into the various other action files for use with `createAction()`.

### selectors
Selectors are used to pull the required information in the correct form **from the state** to the containers.


## Testing
Simply run `npm t` to execute the tests using Jest.

Jest will run some snapshot tests, which _image_ the components you're testing. If these components change, which they inevitably will, they will fail the snapshot tests. You can update their snapshots **after you confirm they're correct** by running `npm run test:update`.

## Disclaimer
Kiosked and its partners cannot be held responsible for the correct or incorrect use of this project or any side effects that arise from the use of it. You are permitted to use the code under the MIT license.
