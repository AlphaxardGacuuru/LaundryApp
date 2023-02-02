import TopNav from '@/components/Layouts/Topnav';
import 'bootstrap/dist/css/bootstrap.css';
import 'tailwindcss/tailwind.css'
import '@/styles/light.css'

const App = ({ Component, pageProps }) => {
	return (
		<div>
			<TopNav />
			<Component {...pageProps} />
		</div>
	)
}

export default App
