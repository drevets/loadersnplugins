import * as React from "react";
import { hot } from "react-hot-loader";
// @ts-ignore
import { commit, compiledAt } from "../build-information.gen.js";

class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <h1 className="mds-header__title form-header__title">
        {/* sneak preview */}
        {`Hello from Commit: ${commit} and time: ${compiledAt}!`}
      </h1>
    );
  }
}

export default hot(module)(App);
