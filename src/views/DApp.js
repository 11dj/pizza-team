import Web3 from 'web3'
import abi from '@/abi/projectAbi.json'

class AuctionSystem {
  constructor () {
    this.web3 = new Web3(window.web3.currentProvider)
    this.auction = this.loadSmartContract()
  }

  loadSmartContract () {
    let tokenAddr = '0xD12C54dF4a00Cc33980A90300015877d58e3fEBe'

    let contract = new this.web3.eth.Contract(abi, tokenAddr)

    return contract
  }

  async getCompanyArrayLength () {
    let getCompanyArrayLength = await this.web3.eth.getCompanyArrayLength()
    // let etherAmt = this.web3.utils.toWei(amount.toString())

    // let options = {
    //   from: accounts[0],
    //   value: etherAmt
    // }

    // let balance = await this.bank.methods.deposit().send(options)
    return getCompanyArrayLength
  }
}

export default AuctionSystem