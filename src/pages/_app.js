import SmoothScroller from "@/components/smoothScroll/SmoothScroll";
import Transition from "@/components/transition/Transition";
import "@/styles/globals.css";
import 'remixicon/fonts/remixicon.css'


export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Transition>
        <SmoothScroller />
        <Component key={router.route} {...pageProps} />
      </Transition>
    </>
  );
}
