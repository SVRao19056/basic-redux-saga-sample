# basic-redux-saga-sample

This package show cases the integration of redux-saga with redux and react. This is a code sample companion for the article authored by me. click [here]() for the companion article.
# Intent 
This is to provide a scafolding for redux-saga integration. This represents the final version after a number of iterations. I want to share my learnings which may benefit those who are just embarking on this journey.

# Acknowledgements

Shout out to [Jasmine Bamou](https://medium.com/@jasmine.bamou?source=post_page-----32fd89b4ebab----------------------) ! The article [click here](https://medium.com/snacknation-engineering/how-we-built-a-survey-app-from-scratch-using-reactjs-at-snacknation-1-2-32fd89b4ebab) authored by Jasmine Bamou was the source of inspiration for this endeavor. Thank You!

# Introduction

The integration of redux saga is an ochestration between react-saga , redux , react , react-redux libraries . If you are not familar with these libraries , I would strongle encourage you to review the companion article [here]().

## Fundamentals [skip to next section](https://github.com/SVRao19056/basic-redux-saga-sample/blob/master/README.md#usage-details)

Only high level concepts are provided here for a comprehensive review click [here]().

### What is middleware?

Middlleware has different connotations in the software arena. In this context, it acts as a interceptor between the consumer (the application) and the original recipient (API endpoint). The [middleware](https://redux.js.org/advanced/middleware) in this case defers the dispatch to the redux store until the API request is fulfilled.

### The need for middleware.

Since redux is [synchronous](https://redux.js.org/advanced/async-flow) and consuming REST API endpoints with asynchronous requests is the industry trend. The middleware serves to bridge the gap between redux and the deferred API response. Both [redux-thunk](https://github.com/reduxjs/redux-thunk) and [redux-saga](https://github.com/redux-saga/redux-saga) are [middleware](https://redux.js.org/advanced/middleware).

### What is redux saga?

![saga introduction](./read-me-files/Saga-intro.jpg?raw=true "Saga Introduction")

### How does saga work?

![How does saga work](./read-me-files/how-does-saga-work.png?raw=true "How does saga work")

### What are saga effects?

![What is a saga effect](./read-me-files/what-is-saga-effect.png?raw=true "What is a saga effect")

# Usage Details [skip to next section](https://github.com/SVRao19056/basic-redux-saga-sample/blob/master/README.md#code-walk-through)

The intent is to provide flavor of the scafolding for a saga-redux integration. Some aspects will probably need to be adjusted to meet your organization standards and conventions.

## Steps
1. Clone the repository to a local folder
1. Run npm install 
1. Run npm run on your terminal.
When all goes well you should see something similar to the below screenhot.
![npm run screenshot](./read-me-files/npm-start.png?raw=true "What is a saga effect")

# Code Walk Through 

## Orchestration steps
###  Step 1  [source code: App.js](./src/App/App.js) 
![Step1](./read-me-files/codeSeg-App.png?raw=true "Step 1 ") |
###  Step 2  [source code: reducer/index.js](./src/reducer/index.js) 
|![Step2](./read-me-files/step2-reducers.png?raw=true "Step 2 ") |
###  Step 3  [source code: sagas/userSaga.js](./src/sagas/userSaga.js) 
|![Step3](./read-me-files/step3-saga-effects.png?raw=true "Step 3 ") |
###  Step 4  [source code: store/config .js](./src/sagas/userSaga.js) 
|![Step4](./read-me-files/step4-saga-integration.png?raw=true "Step 4") |





