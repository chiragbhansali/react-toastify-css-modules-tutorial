import '../styles/globals.scss';
import '../styles/ReactToastify.scss';
import { ToastContainer, Slide } from 'react-toastify';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer
				position="bottom-right"
				transition={Slide}
				closeButton={false}
			/>
		</>
	);
}
