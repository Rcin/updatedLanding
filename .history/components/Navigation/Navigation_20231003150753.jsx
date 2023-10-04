import React from 'react'
import { CentralNode } from './CentralNode/CentralNode'
import { ChildNodes } from './ChildNodes/ChildNodes'
// import styles from './Navigation.module.css'
import styles from './navigation.module.css'
export const Navigation = () => {
	const CHILD_NODES = 5
	return (
		<>
			<CentralNode />
			<ChildNodes count={CHILD_NODES} />
		</>
	)
}
