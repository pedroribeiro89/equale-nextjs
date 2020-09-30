import Head from 'next/head'
import styles from './layout.module.scss'
import {HEAD_CONFIG} from "./head-config";

// const name = 'Pedro'
// export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <link rel="icon" href={HEAD_CONFIG.icon} />
                <meta name="description" content={HEAD_CONFIG.description} />
                <meta name="og:title" content={HEAD_CONFIG.title} />
            </Head>
            <header className={styles.header}>
                <h1>{HEAD_CONFIG.title}</h1>
            </header>
            <main className={styles.main}>{children}</main>
        </div>
    );
}
