import styles from './custList.module.css';

const CustomerList = (props) =>{

    const { customerList } = props;

    const listItems = customerList.map((list,index)=>(
        <li key={index}>
            {list.CustomerName} offering a tip of {list.tip} rupees.
        </li>)
    )
    return(
        <div className={styles.custDiv}>
            <h2 className={ styles.custHead }> Customer List </h2>
            <div className={ styles.custInnDiv }>
                <ul>
                    { listItems }
                </ul>
            </div>
        </div>
    )
}

export default CustomerList;