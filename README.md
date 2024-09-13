This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!
```
TodolistApp/
│
├── test/
│   ├── AddTodo.test.tsx
│   ├── App.test.tsx
│   ├── TodoItem.test.tsx
│   ├── TodoList.test.tsx
│   └── useTodoStore.test.ts
│
├── .bundle/
├── node_modules/
│
├── android/
|     |–– app/
|     |     | src/
|     |     |–– debug/
|     |     |–– release/
|     |     └–– build.gradle
├─– ios/
|     |–– TodoListApp/
|     |–– Podfile
|     |–– Podfile.lock
├── props/
│   ├── common.ts
│   └── theme.ts
│
├── src/
│   ├── components/
│   │   ├── AddTodo.tsx
│   │   ├── FilterTodos.tsx
│   │   ├── TodoItem.tsx
│   │   └── TodoList.tsx
│   │
│   ├── screens/
│   │   └── HomeScreen.tsx
│   │
│   ├── store/
│   │   └── useTodoStore.ts
│   │
│   └── utils/
│
├── .eslintrc.js
├── .gitignore
├── .prettierrc.js
├── .watchmanconfig
├── app.json
├── App.tsx
├── babel.config.js
├── Gemfile
├── index.js
├── jest.config.js
├── jest.setup.js
├── metro.config.js
├── package-lock.json
├── package.json
├── README.md
├── setup.d.ts
└── tsconfig.json
```

# Tech Stack
```
@react-native-async-storage/async-storage    : Local Storage, Simple and lightweight storage
react-native-gesture-handler                 : Library for handling gesture function on react native to reads correctly the gesture event
react-native-reanimated                      : Animation Library used for animating component when action triggered
react-native-vector-icons                    : Clean and details icons, easy to implement
zustand                                      : State management library,easy to use and simple implementation
```


# Test Result
```
 PASS  __test__/AddTodo.test.tsx
 PASS  __test__/useTodoStore.test.ts
 PASS  __test__/TodoList.test.tsx
 PASS  __test__/App.test.tsx
 PASS  __test__/TodoItem.test.tsx

Test Suites: 5 passed, 5 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        1.521 s
Ran all test suites.
```

# Demo
![Demo Video](demo.mp4)