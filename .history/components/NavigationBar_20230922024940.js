'use client'
import React, { useEffect } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import Image from 'next/image'
import usePage from '../context/pageContext'

export const NavigationBar = () => {
	const { lenis } = usePage()
	useEffect(() => {
		const handleLoad = () => {
			console.log('All resources are loaded')
		}

		// If the document is already loaded, call the handler immediately
		if (document.readyState === 'complete') {
			handleLoad()
		} else {
			// Otherwise, add a listener for the 'load' event
			window.addEventListener('load', handleLoad)

			// Cleanup - remove the event listener on unmount
			return () => {
				window.removeEventListener('load', handleLoad)
			}
		}
	}, [])
	return (
		<div className='navbar'>
			<div className='nav_logo'>
				<Image
					src='/uncertain-universe-logo.svg'
					className='logo'
					height={75}
					width={75}
					alt='Logo'
				></Image>
			</div>
			<div className='nav_menu'>
				<Player
					src='/lottie/orangeMenu.json'
					autoplay
					loop
					className='player'
					onEvent={(event) => {
						if (event === 'load') {
							lenis.start()
						}
					}}
				/>
			</div>
		</div>
	)
}
