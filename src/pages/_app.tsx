import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Nav from "../Components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Nav />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
