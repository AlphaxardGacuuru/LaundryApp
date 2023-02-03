import TopNav from '@/components/Layouts/Topnav';
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/light.css'
// import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }) => {
	return (
		<div>
			<TopNav />
			<Component {...pageProps} />
		</div>
	)
}

export default App
