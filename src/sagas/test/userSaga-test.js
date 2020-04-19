const sinon = require("sinon");
const rootSaga = "../userSaga";
const reduxSaga = require("redux-saga");

test("User Saga Testing", async (assert) => {
  const sagaMiddlewareObj = reduxSaga.createSagaMiddleware();
  sagaMiddlewareObj.run(rootSaga);
});
