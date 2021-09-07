import { useState } from 'react';
import styles from './total.module.css';

const Total = (props) =>{

    const [tocus,setTocus] = useState(0);
    const [totip,setTotip] = useState(0);


    const totalHandler = () =>{
        setTotip(props.totalTip);
        setTocus(props.totalCustomer);
    }

    return(
        <div className={styles.totalDiv}>   
            <button 
                className={styles.totalh2}
                onClick ={ totalHandler }
            >
                Calculate total Tips & Customers
            </button>
            <table border="1">
                <thead>
                    <tr>
                        <th className={styles.totalCustomer}>Total customer</th>
                        <th className={styles.totalTips}>Tips</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{tocus}</td>
                        <td>{totip}</td>
                    </tr>
                </tbody>
            </table>
            <h3 className={styles.footer}>@2021 TIP-CALCULTOR</h3>
        </div>
    )
}

export default Total;