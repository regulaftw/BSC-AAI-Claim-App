import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import Web3 from 'web3';

import '../../css/banner/banner.css';

//image imports
import tokenimage from '../../img/avtmlogo.jpeg'
import aai_token from '../../img/AAIToken.png'

//Import Popups
import ErrorPopup from '../popup/errorPopup';
import LoadingPopup from '../popup/loadingPopup';

//Import Hooks
import useCheckWhiteList from '../../../customhooks/useCheckWhiteList';

//Import ABI
import { TokenDistributorABI } from '../../../abi/TokenDistributorABI';

function Banner({ _props }) {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    let web3 = _props.web3;

    let UserWalletAddress = _props.UserWalletAddress;

    const { isWhitelisted, dataLoading, tokenError } = useCheckWhiteList(_props);

    //Contraction Initiation
    const contract = useMemo(() => {
        // Ensure `web3` is initialized and the ABI and address are correctly referenced
        if (web3 && TokenDistributorABI.length > 0 && TokenDistributorABI[0].networks["56"]) {
            return new web3.eth.Contract(
                TokenDistributorABI[0].abi,
                TokenDistributorABI[0].networks["56"].address  // Contract address on the Mumbai testnet
            );
        }
        return null;
    }, [web3]);

    const distributeTokens = async (_address) => {
        console.log(_address);
        if (!isWhitelisted) {
            setLoading(true);
            try {
                const gasPrice = await web3.eth.getGasPrice(); // Dynamically obtain gas price
                const updatedGasPrice = parseInt(gasPrice) + 5 * 1e9; // Increase the gas price to speed up the transaction

                const gasEstimate = await contract.methods.distributeTokens(_address).estimateGas({ from: UserWalletAddress });
                // It's important to estimate gas to avoid transaction failures due to out of gas exceptions

                contract.methods.distributeTokens(_address)
                    .send({ from: UserWalletAddress, gas: gasEstimate, gasPrice: updatedGasPrice })
                    .on("transactionHash", (hash) => {
                        console.log("Success", hash);
                        setLoading(false);
                    })
                    .on('receipt', (receipt) => {
                        console.log('Transaction receipt', receipt);
                    })
                    .on('error', (error) => {
                        console.log('Transaction error:', error);
                        setLoading(false);
                        setError(true);
                    });
            } catch (e) {
                console.log(e);
                setLoading(false);
                setError(true);
            }
        } else {
            console.log("Address has claimed");
            setError(true);
        }
    }


    useEffect(() => {
        console.log("Props Changed : \n" + _props.web3)
    }, [_props])

    return (
        <div className="prompt-container">

            <ErrorPopup showError={error} />
            <LoadingPopup loading={loading}/>

            <h1>Claim AAI Tokens with AAI Tracker NFTs</h1>
            <p>
                <b>
                Make sure you are connected to BSC network and simply receive your AAI Token airdrop by clicking Claim 
                </b>
            </p>
            
            <div class="arrow-container">
            <div><img src={aai_token} className='images' /></div>
            </div>
           
            <button className="centered-button" onClick={(e) => { distributeTokens(UserWalletAddress); console.log("Reached + " + error) }}>Claim</button>
        </div>
    );
}

export default Banner;