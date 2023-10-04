import { useState, useEffect } from 'react'
export const ChildNodes = (props) => {
	const centralCircleDiameter = 200
	const childNodeDiameter = 30
	const radius = (centralCircleDiameter + childNodeDiameter) / 2
	const [child_xy, setChild_xy] = useState([])
	useEffect(() => {
		setChild_xy(positionNodes(props.count))
	}, [props.count])

	function positionNodes(n) {
		const positions = []
		for (let i = 0; i < n; i++) {
			const angle = (i / n) * 2 * Math.PI
			const x =
				centralCircleDiameter / 2 +
				radius * Math.cos(angle) -
				childNodeDiameter / 2
			const y =
				centralCircleDiameter / 2 +
				radius * Math.sin(angle) -
				childNodeDiameter / 2

			// const node = document.createElement('div')
			// node.className = 'child-node'
			positions.push([x, y])
			// node.style.left = `${x}px`
			// node.style.top = `${y}px`
			// node.style.backgroundColor = 'randomColorForVisualization' // Replace with any color or logic
			// container.appendChild(node)
		}
		return positions
	}

	child_xy.map((index) => {
		return (
			<h1
				key={index}
				style={{ left: child_xy[i][0], right: child_xy[i][1] }}
			>
				hi
			</h1>
		)
	})
}
