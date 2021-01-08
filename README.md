# Ticketmaster-events

Ticketmaster-events is a mobile app built with React-Native and consumes Ticketmaster API to fetch events.

## Requirements

You need to have `node` and `yarn` installed. After cloning the repository you might want to run `yarn install` on root folder.

## Libraries & Tools

  - Expo
  - React-Navigation
  - Jest
  - React-test-rendderer
  - ESLint (with AirBnB configuration)
  - React Hooks
  - Context API
  - StyleSheet

## Features

  - List Events ordered by Relevance Desc
  - Infinite Scrolling with FlatList component
  - Search Events by Keyword
  - WishList: Add events to WishList

## Instalation

- Clone this repository and run `yarn install` to install dependencies.
- Create a `.env` file on root folder with the following data:
        - `TICKETMASTER_API_KEY=<your_api_key>`

## Commands to run the app

You can run the app through `expo` with the following commands:
- `yarn expo:start` - Will build JS and generate bundle to be loaded through Expo App on your device.
- `yarn web`- Will try to run the app through expo as a Web app. **Some features may not work**.
- `yarn start` - Starts the server that communicates with connected devices.
- `yarn android`- Will run app through Android device or emulator. If it doesn't go as expected, you should see troubleshooting [here](https://reactnative.dev/docs/running-on-device). Make sure the React-native server is started.
- `yarn ios`- Will run app through iOS device or emulator. If it doesn't go as expected, you should see troubleshooting [here](https://reactnative.dev/docs/running-on-device). Make sure the React-native server is started.

### Other useful commands
There are other useful commands about testing, checking lint and creating new commands automatically:
- `yarn test`- Run all tests and prints code coverage. **Current coverage: ~90%**.
- `yarn test:watch`- Run all tests and watches for changes on files to run again automatically.
- `yarn lint` - Checks lint formatting for all js files on project.
- `yarn lint:fix` - Runs lint and try to fix the formatting automatic fixable issues.
- `yarn create:component <component_name>`- Creates a new empty component on components folder, its test file on components/_\_tests_\_ folder and exports it to be used on screens or other components.
