import Web3 from 'web3'
import abi from '@/abi/projectAbi.json'

let v;

class AuctionSystem {
  constructor () {
    this.web3 = new Web3(window.web3.currentProvider)
    this.auction = this.loadSmartContract()
  }

  loadSmartContract () {
    let tokenAddr = '0xfC05be131e58C6096F137CCa199E84d9ECD26435'

    // let contract = new this.web3.eth.Contract(abi, tokenAddr)
    var TestContractContract = this.web3.eth.contract(abi);
    var TestContract = TestContractContract.at(tokenAddr);
    return TestContract
  }

  async getCompanyArrayLength () {
    let totalC, cc;
    let getCompanyArrayLength = this.auction.getCompanyArrayLength(function (err, ok) {
      console.log("sdf"+ok.toString())
       v = ok
      console.log(v.toNumber());
      console.log(JSON.stringify(ok))
      // v = JSON.stringify(ok)
      totalC
      return totalC
    })
    console.log("oo"+v)
    console.log("gg"+getCompanyArrayLength)

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