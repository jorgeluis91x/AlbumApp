# React Native Template

This project is a test for media monks

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-native-async-storage](https://github.com/react-native-async-storage/async-storage) as storage solution.
- [react-toolkit](https://github.com/reduxjs/redux-toolkit) standar way to write Redux logic.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for icons .
- [styled-components](https://styled-components.com/docs/basics#react-native) as styling solution.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.

## Usage

You can start by cloning this repository and using [AlbumApp](https://github.com/jorgeluis91x/AlbumApp). In the current state of this project, it should give you no issues at all.

After that you should proceed as with any javascript project:

- Go to your project's root folder and run `npm install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --`repo-update`
- Run `npm run ios` or `npm run android` to start your application!

(Using yarn: `yarn ios` or `yarn android`)

## Folder structure

This project  follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `actions`: This folder contains all actions that can be dispatched to redux.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `config`: Folder to store any kind of constant that you have.
  - `navigation`: Folder to store the navigators.
  - `screens`: Folder that contains all your application ex: screens/Home.
  - `selectors`: Folder to store your selectors for each reducer.
  - `utils`: Folder that contains utils functions.
  - `state`: Folder to put all redux middlewares and the store, and actions.
  - `App.tsx`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.


