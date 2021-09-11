import { Layout } from '../components/layout/layout'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
              <Component {...pageProps} />
          </Layout>
}

export default MyApp
