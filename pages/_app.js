import '../styles/globals.css'

var counter = 0

function MyApp({ Component, pageProps }) {
  counter ++
  pageProps['counter'] = counter
  console.log('here we go: ' + counter )
  return <Component {...pageProps} />
}

export default MyApp
