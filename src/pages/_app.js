import SmoothScroll from "@/components/lomotive/SmoothScroll";
import "@/styles/globals.css";
import 'remixicon/fonts/remixicon.css'

export default function App({ Component, pageProps }) {
  return (
    <SmoothScroll>
      <Component {...pageProps} />
    </SmoothScroll>
  );
}
