import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/style.css'

function App({ Component, pageProps }) {
  return (
    <>
    	<Head>
			<title>Default Homepage title</title>
			<meta name="description" content="Default description" />
			<meta name="keywords" content="default keyword1, default keyword 2" />
      </Head>
    
		<div className="theme-wrapper" theme-data="mb">
			<Header />
			<main>
				<Component {...pageProps} />
			</main>
			<Footer />
		</div>
	 </>
  )
}

export default App
