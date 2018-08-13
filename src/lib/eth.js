const windowGlobal = typeof window !== 'undefined' && window;
export let web3 = windowGlobal.Web3 ? new windowGlobal.Web3(windowGlobal.web3.currentProvider) : undefined;

export const isAddress = (hash) => {
    if (typeof hash === 'string') {
      return /^0x([A-Fa-f0-9]{40})$/.test(hash);
    } else {
      return false;
    }
};
  
export const getMetamaskStatus = () => {
    if (!window.Web3) {
      return 'noMetamask';
    }
    if (!web3.eth.accounts[0]) {
      return 'unlockMetamask';
    }
    return 'okMetamask';
};