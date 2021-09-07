import styles from './header.module.css'
const Header = () =>{
    return(
        <div className={styles.Header}>
            <h1 className={styles.heading}>Tip Calcultor</h1>
            <p className={styles.p}>Build in React</p>
        </div>
    )
}

export default Header;