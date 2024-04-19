import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import logo from "../../img/aventislogo.png";
import '../../css/navbar/navbar.css';

const accountShortener = (str) => {
    return str ? str.substring(0, 6) + "..." + str.substring(str.length - 4) : "Not connected";
};

function Navbar( {handler, accountHandler} ) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [web3, setWeb3] = useState(null);
    const [userAccount, setUserAccount] = useState(null);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    //Use Effect Statements
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(()=>{
        console.log(web3);
        handler(web3);
        accountHandler(userAccount);
    },[web3])



    const initializeBlockchain = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3Instance = new Web3(window.ethereum);

                setWeb3(web3Instance);

                setUserAccount(accounts[0]);

                console.log("Blockchain initialized. Account:", accounts[0]);
            } catch (error) {
                console.error("User denied account access or an error occurred:", error);
                alert("Failed to initialize blockchain. Check console for details.");
            }
        } else {
            alert("Please install MetaMask!");
        }
    };

    return (
        <nav className={`nav ${isScrolled ? 'affix' : ''}`}>
            <div className="container">
                <div className="logo">
                    <a href="/#">
                        <img src={logo} width="default" height="50" alt="Aventis Metaverse" />
                    </a>
                </div>
                <div className="main_list">
                    <ul className="navlinks">
                        {userAccount ? (
                            <li className="addresstext"><medium>Address: {accountShortener(userAccount)}</medium></li>
                        ) : (
                            <li><button onClick={initializeBlockchain} className="login-button">Login</button></li>
                        )}
                    </ul>
                </div>
                <span className="navTrigger">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
    );
}

export default Navbar;
