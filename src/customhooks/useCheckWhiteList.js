import { useState, useEffect, useMemo } from 'react';
import Web3 from 'web3';
import { TokenDistributorABI } from '../abi/TokenDistributorABI';

const useCheckWhiteList = (_props) => {
    // Correctly extract `web3` and `UserWalletAddress` from `_props`
    const { web3 } = _props;
    const { UserWalletAddress } = _props;

    const [isWhitelisted, setIsWhitelisted] = useState(false);
    const [dataLoading, setDataLoading] = useState(true);
    const [tokenError, setTokenError] = useState(null);

    // Memoize the contract instance creation to recompute only when `web3` changes
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

    useEffect(() => {
        // Ensure both `UserWalletAddress` and `contract` are properly initialized before proceeding
        if (!UserWalletAddress || !contract) return;

        const checkWhitelisted = async () => {
            try {
                setDataLoading(true);
                const result = await contract.methods.hasReceivedTokens(UserWalletAddress).call();
                setIsWhitelisted(result);
            } catch (error) {
                console.error('Error checking whitelist status:', error);
                setTokenError(error);
            }
            setDataLoading(false);
        };

        checkWhitelisted();
    }, [UserWalletAddress, contract]);  // Depend on `contract` to re-run the effect when it's set

    return { isWhitelisted, dataLoading, tokenError };
};

export default useCheckWhiteList;
