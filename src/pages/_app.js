import SmoothScroller from "@/components/smoothScroll/SmoothScroll";
import Transition from "@/components/transition/Transition";
import "@/styles/globals.css";
import 'remixicon/fonts/remixicon.css'
import { ToastContainer, toast } from 'react-toastify';


export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Transition>
        <SmoothScroller />
        <Component key={router.route} {...pageProps} />
      </Transition>
      <ToastContainer 
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="dark"
      />
    </>
  );
}
