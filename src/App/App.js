import React from "react";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import LocaleData from "../locale/en-EN";
import { connect } from "react-redux";
import "../stylesheets/App.css";
import { getUsers } from "../actions";
import UserList from "../containers/UserList";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import configureStore from "../store/config";
import initialState from "../store/initialState";

const store = configureStore(initialState);

const mapDispatchToProps = (dispatch) => {
  return {
    actionToDispatch: () => dispatch(getUsers()),
    dispatch,
  };
};

class Providers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <IntlProvider locale={props.locale} messages={props.messages}>
        <Provider store={props.store}>{this.props.children};</Provider>
      </IntlProvider>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.store || `App no props `);
  }
  render() {
    return (
      <Providers locale="en" messages={LocaleData}>
        <AppContainer>
          <App>
            <Container>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Typography variant="h1" gutterBottom>
                  User Profile Application
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.props.actionToDispatch}
                >
                  Get users
                </Button>
                <div>
                  <UserList />
                </div>
              </Grid>
            </Container>
          </App>
        </AppContainer>
      </Providers>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
export { Providers, App };
