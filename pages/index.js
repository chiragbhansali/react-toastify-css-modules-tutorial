import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { toast } from 'react-toastify';

export default function Home() {
	const notify = (msg) => {
		return toast(msg, {
			autoClose: 5000,
		});
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Using React-Toastify with CSS Modules
				</h1>
				<button
					className={styles.btn}
					onClick={() => notify('Toast Clicked')}
				>
					Click Me
				</button>
			</main>
		</div>
	);
}
