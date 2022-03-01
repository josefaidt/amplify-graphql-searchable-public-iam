import { Amplify } from 'aws-amplify'
import awsExports from '../aws-exports'

Amplify.configure(awsExports)

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
