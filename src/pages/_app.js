import { Layout } from "@/components/layout/Layout";
import ProductContext from "@/components/projectContext/ProjectContext";
import SmoothScroll from "@/components/smoothscroll/SmoothScroll";
import Transition from "@/components/transition/Transition";
import "@/styles/globals.css";
import 'remixicon/fonts/remixicon.css'

export default function App({ Component, pageProps, router }) {
  return (
    <Transition>
      <ProductContext>
        <SmoothScroll>
          <Layout>
            <Component key={router.route} {...pageProps} />
          </Layout>
        </SmoothScroll>
      </ProductContext>
    </Transition>
  );
}
