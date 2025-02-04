import "tailwindcss/tailwind.css";
import "@/styles/main.css";


import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
