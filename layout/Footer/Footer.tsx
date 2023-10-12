import React, { FC } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
import { ResumeSvg } from "../../assets/customIcons";
import styles from "./Footer.module.scss";

const zoom = keyframes`${zoomIn}`;
const Zoom = styled.div`
	animation: 1.5s ${zoom} alternate infinite;
`;

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.footer__copyright}>
				&copy; {new Date().getFullYear()} Презентация <span>рс иэк</span>
			</p>
			<Zoom>
				<Link
					href='/files/resume_Birulia_Milana.pdf' 
					target="_blank"
				>
					<ResumeSvg />
				</Link>
			</Zoom>
		</footer>
	)
}

export default Footer;