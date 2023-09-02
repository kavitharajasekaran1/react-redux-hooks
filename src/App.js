import "./styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import UserContainer from "./components/userContainer";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <UserContainer />
      </div>
    </Provider>
  );
}
