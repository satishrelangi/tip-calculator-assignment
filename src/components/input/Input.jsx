import { useState } from 'react';
import styles from './input.module.css';
const Input = (props) =>{

    const [bill,setBill] = useState();
    const [cust,setCust] = useState();
    const [serv,setServ] = useState();

    const onChangeHandler = (e) =>{
        const billAmout = e.target.value;
        setBill(billAmout);
    }

    const serviceHandler = (e) =>{
        const service = e.target.value;
        setServ(service);
    }

    const nameHandler = (e)=>{
        const custName = e.target.value;
        setCust(custName);
    }

    const onClickHandler = ()=>{
        if (serv === "Excellent"){
            const tip = (Number(bill)/100)*20;
            props.values(tip,cust);
        }
        if (serv === "Moderate"){
            const tip = (Number(bill)/100)*10;
            props.values(tip,cust);
        }
        if (serv === "Bad"){
            const tip = (Number(bill)/100)*5;
            props.values(tip,cust);
        }
    }


    return(
        <div className={styles.inpDiv}>
            <label htmlFor="bill">Enter your Bill Amount</label>
            <br />
            <input 
                type="number" 
                name="bill_amount" 
                id={styles.bill} 
                onChange={onChangeHandler} 
            />
            <hr />
            <div className={styles.inpInsDiv}>
                <label htmlFor="opt">How was the service</label>
                <select name="service" id={styles.opt} onChange = {serviceHandler}>
                    <option value="select">Select</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Bad">Bad</option>
                </select>
                <input 
                    type="text" 
                    name="customerName" 
                    id="name" 
                    className={styles.customer} 
                    placeholder="Customer Name" 
                    onChange = {nameHandler} 
                />
                <button className={styles.btn} onClick = { onClickHandler }> Add Customer </button>
            </div>
        </div>
    )
}

export default Input;