## HotelsAPP

HotelsAPP, project created in NodeJS and MongoDB for the backEnd, and a frontEnd created in React Native.

## API(NodeJS)

The API is in the hotelsAPi folder.

In the project directory, you can run:

### `npm install`

Install node_modules for run the project

### `nodemon src/server.js`
Runs the app in the development mode for consume from APP.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## APP(React Native)

The APP is in the hotelsAPP folder.

### `npm install`

Install node_modules for run the project

### `Setting URL API`

 go to src/services/dataUrl.js

 ```javascript
 export const urlService = 'http://your-IP-MACHINE:3000/hotels';
 ```

### `Run in IOS`

if you want run the app in IOS is important run the next command because the App has MAPS.

```javascript
cd ios
```

```javascript
pod install
```
```javascript
cd ../
```

```javascript
 react-native run-ios
```

### `Run in Android`

```javascript
 react-native run-android
```

### `npm run test`

Launches the test runner in JEST

### `npm test -- --coverage`

Launches the coverage

### `This project contains unit tests`