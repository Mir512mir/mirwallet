import React from 'react';
import { useState } from 'react';
import './transaction.scss';
import transactionStore from './TransactionStore';
import { useEffect } from 'react';
import Footer from '../../partials/footer/Footer';
import axios from 'axios';
import iconSearch from "./../../../../assets/search_icon.png";
import NavBtn from '../../../designComponents/Navbtn';
import TransactionItem from './TransactionItem';

function Transactions(props) {
    const [activeBtn, setActiveBtn] = useState("Incomes");

    useEffect(() => {
        const token = localStorage.getItem("jwt");

        axios.get("http://49.13.31.246:9191/me", {
            headers: {
                "x-access-token": token
            }
        })
            .then((response) => {
                console.log("transactions", response.data.transactions);
                transactionStore.addTransaction(response.data.transactions);
            })
            .catch((error) => {
                console.error('Error', error);
            });

    }, []);

    const handleButtonClick = (text) => {
        transactionStore.setViewIn(text === "Incomes");
        setActiveBtn(text)
    };
    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-2'>
                </div>
                <div className='col-8 text-center'>
                    <p className='&title' 
                    style={{fontSize: "18px", fontWeight: "bold"
                    }}>Transactions</p>
                </div>
                <div className='col-2'>
                    <img src={iconSearch} alt='search'
                        className="search"
                        style={{width: "18px",height: "18px"}} />
                </div>
                <hr />
            </div>
            <div className='row text-center'>
                <div className='col-6'>
                    <NavBtn
                        onClick={handleButtonClick}
                        text={"Incomes"}
                        active={activeBtn === "Incomes"} />
                </div>
                <div className='col-6'>
                    <NavBtn onClick={handleButtonClick}
                        text={"Expenses"}
                        active={activeBtn === "Expenses"} />
                </div>
            </div>
            <div className="list">
                {transactionStore.filteredTransactions.slice().reverse().map((item) => {
                    if (item.trType === "in" || item.trType === "out") {
                        return (
                            <TransactionItem 
                            _id={item._id}
                            userName={item.userName}
                            userAvatar={item.userAvatar}
                            trDate={item.trDate}
                            trType={item.trType}
                            amount={item.amount} />
                        )
                    }
                })}
            </div>
            <Footer />
        </div>
    );
}

export default Transactions;