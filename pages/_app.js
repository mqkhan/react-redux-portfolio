import "@/styles/globals.css";
import { store } from "../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const theme = useSelector((state) => state.theme.value);
  useEffect(() => {
    document.getElementsByTagName("html")[0].classList.toggle("dark");
  }, [theme]);

  return <Component {...pageProps} />;
}

export default ({ Component, pageProps }) => (
  <Provider store={store}>
    <MyApp Component={Component} pageProps={pageProps} />
  </Provider>
);

// export default function App({ Component, pageProps }) {
//   const theme = useSelector((state) => state.theme.value);
//   console.log(theme);
//   useEffect(() => {
//     document.getElementsByTagName("html")[0].classList.toggle("dark");
//   }, [1]);

//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }
