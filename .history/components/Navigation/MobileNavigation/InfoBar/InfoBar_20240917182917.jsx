import styles from './InfoBar.module.css'
import { useEffect } from 'react'
function InfoBar(props) {
	useEffect(() => {
		if (props.data) {
			console.log(props.data.getAttribute('data-name'))
		}
	}, [props.data]) // Correctly close useEffect
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.left}>&#x3c;</div>
				<div className={styles.name}>
					<p>
						{props.data &&
							props.data
								.getAttribute('data-name')
								.split('-')
								.map((word) => {
									return (
										word.substring(0, 1).toUpperCase() +
										word.substring(1)
									)
								})
								.join(' ')}
					</p>
				</div>
				<div className={styles.right}>&#x3e;</div>
			</div>
		</div>
	)
}

export default InfoBar