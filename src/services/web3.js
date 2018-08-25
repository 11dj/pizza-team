let x;
export default class Web3Service {
  constructor(options) {
    this.Web3 = options.Web3;
  }
  initialWeb3() {
    if (typeof window.web3 !== 'undefined') {
      x = new this.Web3(window.web3.currentProvider);
    } else {
      const httpProvider = new this.Web3.providers.HttpProvider('https://mainnet.infura.io/iT7hWgNoY7XT2BXIVAhq');
      x = new this.Web3(httpProvider);
    }
    return x;
  }
}
