'use client'
import React from 'react'
import { CentralNode } from './CentralNode/CentralNode'
import { ChildNodes } from './ChildNodes/ChildNodes'
// import EnterButton from './EnterButton/EnterButton'
import styles from './navigation.module.css'

export const Navigation = (props) => {
	const CHILD_NODES = props.child_nodes.length
	console.log(props.child_nodes)
	return (
		<>
			<CentralNode title={props.title} />
			<ChildNodes nodes={props.child_nodes} count={CHILD_NODES} />
		</>
	)
}