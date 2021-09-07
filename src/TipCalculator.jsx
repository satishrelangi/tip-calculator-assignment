import { useState } from "react/cjs/react.development";
import CustomerList from "./components/customer/CustomerList";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Total from "./components/total/Total";

const TipCalculator = ()=>{

    const [customerList,setCustomerList] = useState([]);
    const [totalTip,setTotalTip] = useState(Number(0));
    const [totalCustomer,setTotalCustomer] = useState(Number(0));

    const valuesHandler = (tip,customerName)=>{
        const tempCustomerList = [...customerList];
        const itemObj = {
            tip:tip,
            CustomerName:customerName,
        }
        const temptotalCustomer = totalCustomer + 1;
        setTotalCustomer(temptotalCustomer);
        const temptotalTip = totalTip + Number(tip);
        setTotalTip(temptotalTip);
        tempCustomerList.push(itemObj);
        setCustomerList(tempCustomerList);
    }

    return(
        <>
            <Header />
            <Input values ={valuesHandler} />
            <CustomerList customerList = { customerList }  />
            <Total totalCustomer = {totalCustomer} totalTip = {totalTip}/>
        </>
    )
}

export default TipCalculator;