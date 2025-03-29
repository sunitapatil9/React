# React course


# parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- file watching algorithams - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing



# Types of testing
- unit testing
- integration testing
- End to End Testing or e2e testing


# steps to configure react testing library which uses Jest
- if your project not created with create react app install npm -i -D @testing-library/react
- install jest npm install -D jest
- install babel dependecies create babel.config.js file add code
- configure babel add code - https://jestjs.io/docs/getting-started
- parcel babel and jest babel.config.js get conflicts so create parcelrc page add code parcel doc https://parceljs.org/languages/javascript/#babel 
- after setup  run command npm run test if output is no test found exitin with code 1 means our jest,react testing library installed successfully
- then install jest -> npx jest --init  why we use npx only? when we need to use package just once.
- install jsdom library 
- install npm i -D @babel/preset-react
- and this libraryb to babel.config.js file
- install npm i -D @testing-library/jest-dom