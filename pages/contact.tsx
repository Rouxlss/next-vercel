import Head from "next/head";
import Link from "next/link";
import {Navbar} from "../components/Navbar";
import styles from "../components/layouts/MainLayout.module.css";
import {MainLayout} from "../components/layouts/MainLayout";

export default function ContactPage() {
	return (
		<MainLayout>
			<h1>Contact Page</h1>
			<h1 className="title">
				Ir a{" "}
				<Link href="/" replace>
					Main
				</Link>
			</h1>
			<p className="description">
				Get started by editing{" "}
				<code className="code">pages/contact.js</code>
			</p>
		</MainLayout>
	);
}
