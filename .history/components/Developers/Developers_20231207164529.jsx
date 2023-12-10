import styles from './Developers.module.css'
export default function Developers() {
	return (
		<footer className='dev_container'>
			<h1 className={styles.header}>Developed By:</h1>
			<div className={styles.textContainer}>
				<p className={`${styles.tag} ${styles.shimmer}`}>Miaoye Que</p>
				<p className={styles.tag}>Miaoye Que</p>
				<p className={styles.tag}>Cindy Hu</p>
				<p className={styles.tag}>Brian Ho</p>
			</div>
		</footer>
	)
}
