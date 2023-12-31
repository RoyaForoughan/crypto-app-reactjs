import styles from './Layout.module.css'

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>My Crypto React App</p>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Contact me 📱 </p>
    </footer>
    </>
  )
}

export default Layout