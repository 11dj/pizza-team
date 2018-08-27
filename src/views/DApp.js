import Web3 from 'web3'
import abi from '@/abi/projectAbi.json'
import { endianness } from 'os';

let v;


class AuctionSystem {
  constructor () {
    this.web3 = new Web3(window.web3.currentProvider)
    this.auction = this.loadSmartContract()
    this.web3.eth.defaultAccount = web3.eth.accounts[0];
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
      console.log('>>>', ok.toString())
       v = parseInt(ok)

      totalC = ok.toString()
      return totalC
    })
    console.log("oo"+v)
    console.log("gg"+getCompanyArrayLength)

    return v
  }

  async createProject(name, desc, start, end, close, budget) {
    this.auction.createProject(name, desc, start, end, close, budget, function (err, ok) {
      console.log('Error create  !!!')
    })
  }

  async changeStatusCompany(companyid, projName, status) {
    if (status === 0) { // waiting
      this.auction.changeStatusCompany(companyid, projName, 0, function (err, ok) {
        console.log('Error create  !!!')
      })
    } else if (status === 1) { // rejected 
      this.auction.changeStatusCompany(companyid, projName, 1, function (err, ok) {
        console.log('Error create  !!!')
      })
    } else if (status === 2) { // approved
      this.auction.changeStatusCompany(companyid, projName, 2, function (err, ok) {
        console.log('Error create  !!!')
      })
    } 
  }

  async getCompanyStatusByProjectID(projName) {
    let ll
    let list = this.auction.getCompanyStatusByProjectID(this.web3.eth.defaultAccount, projName, function (err, ok) {
      console.log('table', ok.toString())
      ll = ok.toString()
      return ll
    })
  }

  async getTotalProject() {
    let ss 
    let list = this.auction.getTotalProject(function (err, ok) {
      console.log('table', ok)
      // ss = parseInt(ok)
      return ok
    })
  }
}

export default AuctionSystem