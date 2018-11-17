# Digibee App Consumidor

React native app using HOC pattern (with recompose), styled-components, redux and others.

## How to install

First install NodeJs, React Native, Watchman, Android Studio and xCode for iOS development, then run those commons commands:

```sh
$ cd opsico-mobile
$ npm install
```

#### Android

Then create a file 'android/local.properties' and insert your android sdk path as bellow example:

```txt
sdk.dir = /Users/{nameUser}/Library/Android/sdk
```

#### iOS

For iOS development you will need to download Facebook SDK and place it's contents inside the path: "~/Documents/FacebookSDK".

## How To run

Finally just run those commands to start the app:

#### Android

```sh
$ npm start -- --reset-cache
$ react-native run-android
```

#### iOS

```sh
$ npm start -- --reset-cache
$ react-native run-ios
```

## How to deploy

First you need to install [Fastlane](https://fastlane.tools/), then follow these steps for each platform:

#### Android

Access android folder and run these commands:

Beta release:

```sh
$ fastlane beta
```

Production release:

```sh
$ fastlane release
```

#### iOS

Access ios folder and run these commands:

Beta release:

```sh
$ fastlane beta
```

Production release:

```sh
$ fastlane release
```
