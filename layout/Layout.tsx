import React, { useEffect } from "react";
import Head from "next/head";
import classnames from "classnames";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.scss";

interface ILayoutProps {
  children?: any
	title?: string
	desc?: string
	ogTitle?: string
}

const Layout: React.FC<ILayoutProps> = ({ children, title, desc, ogTitle }) => {
	const [isArrowUp, setIsArrowUp] = React.useState<boolean>(false);

	useEffect(() => {
		const checkScrollTop = () => {
			if (!isArrowUp && window.pageYOffset > 400) {
				setIsArrowUp(true)
			} else if (isArrowUp && window.pageYOffset <= 400) {
				setIsArrowUp(false)
			}
		};
		checkScrollTop();
		window.addEventListener("scroll", checkScrollTop);
		return () => window.removeEventListener("scroll", checkScrollTop)
	}, [isArrowUp]);

	
	const scrollTop = () =>{
		window.scrollTo({top: 0, behavior: 'smooth'})
	}

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={desc} />
				<meta name='og:title' content={ogTitle} />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.page}>
				<div className={styles.root}>
					<Header/>
					<Main>
						{children}
					</Main>
					<Footer/>
					<button 
						className={classnames(styles.upButton,
							{[styles.upButton_visibility]: isArrowUp })}
						onClick={scrollTop}
					>
					</button>
				</div>
			</div>
		</>
	)
}

export default Layout;