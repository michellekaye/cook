import App, { AppContext } from "next/app";
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { fetchAPI } from "./api/api";
import { getStrapiMedia } from "./api/media";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// MyApp.getInitialProps = async (ctx: AppContext) => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(ctx);
//   // Fetch global site settings from Strapi
// 	const globalRes = await fetchAPI("/recipes?populate=*");
//   // Pass the data to our page via props
// 	return { ...appProps, pageProps: { global: { recipes: globalRes.data } } };
// };

export default MyApp;
