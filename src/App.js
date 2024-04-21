import { Provider } from "react-redux";
import {
  createBrowserRouter,
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Switch,
} from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";
import SearchResults from "./components/searchResults";
import Sidebar from "./components/Sidebar";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
      {
        path: "search/:query",
        element: <SearchResults />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Router>
        {" "}
        {/* Use BrowserRouter */}
        <div>
          <Head /> {/* Use Switch to render only one route */}
          <div className="flex">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<MainContainer />} />
              <Route exact path="/watch" element={<WatchPage />} />
              <Route
                exact
                path="/demo"
                render={() => (
                  <>
                    <Demo />
                    <Demo2 />
                  </>
                )}
              />
              <Route exact path="/search/:query" element={<SearchResults />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
