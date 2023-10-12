import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import classNames from "classnames"

import styles from "./Header.module.scss";

const Header: React.FC = () => {
	const [home, setHome] = useState<boolean>(false);
	const [sitPanel, setSitPanel] = useState<boolean>(false);
	const [efficiency, setEfficiency] = useState<boolean>(false);

	useEffect(() => {
		const loc = location.pathname.split("/").pop()!
		if (loc.length > 0) {
			if (loc === "situational-panel") {
				setSitPanel(true);
			}
			if (loc === "efficiency") {
				setEfficiency(true);
			}
		} else {
			setHome(true);
		}
	}, [home, sitPanel, efficiency]);

	return (
		<header className={styles.header}>
			<div className={styles.header__navContainer}>
				<Link href='/' className={styles.header__logo}>
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={68}
            height={48}
            priority
          />
				</Link>
				<nav className={styles.header__nav}>
					<ul className={styles.header__navLinks}>
						<li>
							<Link 
								href='/' 
								className={classNames(
									styles.header__navLink,
									{
										[styles.header__navLink_active]: home,
									},
									)}
								>
                Карточка проекта
							</Link>
						</li>
						<li>
							<Link 
								href='/efficiency' 
								className={classNames(
									styles.header__navLink,
									{
										[styles.header__navLink_active]: efficiency,
									},
								)}
							>
                Энергоэффективность
							</Link>
						</li>
						<li>
							<Link 
								href='/situational-panel' 
								className={classNames(
									styles.header__navLink,
									{
										[styles.header__navLink_active]: sitPanel,
									},
									)}
								>
                Ситуационное управление
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header;