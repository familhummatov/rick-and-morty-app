import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";

import { AppProvider } from "./common/context";

import Header from "../components/Header";
import { Characters, Episodes, Locations, MyWatchList } from "./pages";

import { routes } from "./routes";

const App = () => {
  return (
    <AppProvider>
      <div>
        <Header />
        <Container>
          <hr />
          <Switch>
            <Route path={routes.characters} component={Characters} exact />
            <Route path={routes.episodes} component={Episodes} />
            <Route path={routes.locations} component={Locations} />
            <Route path={routes.myWatchList} component={MyWatchList} />
          </Switch>
        </Container>
      </div>
    </AppProvider>
  );
};

export default App;
