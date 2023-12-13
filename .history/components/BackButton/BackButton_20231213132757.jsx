import styles from './BackButton.module.css'
import { useRouter } from 'next/navigation'
export default function BackButton(props) {
	const router = useRouter()

	const goBack = () => {
		router.back()
	}

	if (props.white) {
		return (
			<div className={styles.container}>
				<div className={`${styles.animatedArrow} ${styles.white}`}>
					<span className={`${styles.theArrow} ${styles.left}`}>
						<span
							className={`${styles.shaft} ${styles.white}`}
						></span>
					</span>
					<span className={styles.main}>
						<span className={styles.text}> </span>
						<span className={`${styles.theArrow} ${styles.right}`}>
							<span className={styles.shaft}></span>
						</span>
					</span>
					<button onClick={goBack} className={styles.backButton}>
						Back
					</button>
				</div>
			</div>
		)
	} else {
		return (
			<div className={styles.container}>
				<div className={styles.animatedArrow}>
					<span className={`${styles.theArrow} ${styles.left}`}>
						<span className={styles.shaft}></span>
					</span>
					<span className={styles.main}>
						<span className={styles.text}>
							{' '}
							<button
								onClick={goBack}
								className={styles.backButton}
							>
								Back
							</button>
						</span>
						<span className={`${styles.theArrow} ${styles.right}`}>
							<span className={styles.shaft}></span>
						</span>
					</span>
				</div>
			</div>
		)
	}
}
