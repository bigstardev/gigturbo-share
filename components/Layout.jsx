import styles from "../styles/Layout.module.css"
import Nav from "./Nav"
export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Nav />
                {children}

            </main>

        </div>
    )
}
