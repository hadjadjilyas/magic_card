import styles from "./magiccard.module.css"
const Magiccard = () => {
    return ( 
    <div className={styles.card}>
        Magic Card
        <a className={styles.a} xlinkHref="https://mythrillfiction.com/" target="_blank">Mythrill</a>
    </div>
   
     );
}
 
export default Magiccard;