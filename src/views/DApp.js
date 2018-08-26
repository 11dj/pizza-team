import Web3 from 'web3'
import abi from '@/abi/projectAbi.json'
import { promisify } from 'util';

let v;

class AuctionSystem {
  constructor () {
    this.web3 = new Web3(window.web3.currentProvider)
    this.auction = this.loadSmartContract()
    this.regist = this.loadRegisterContract()
  }

  loadSmartContract () {
    let tokenAddr = '0xfC05be131e58C6096F137CCa199E84d9ECD26435'

    // let contract = new this.web3.eth.Contract(abi, tokenAddr)
    var TestContractContract = this.web3.eth.contract(abi);
    var TestContract = TestContractContract.at(tokenAddr);
    return TestContract
  }
  loadRegisterContract (){
    let rtokenAddr = '0xfC05be131e58C6096F137CCa199E84d9ECD26435'

    // let contract = new this.web3.eth.Contract(abi, tokenAddr)
    var RTestContractContract = this.web3.eth.contract(abi);
    var RTestContract = TestContractContract.at(tokenAddr);
    return RTestContract
  }
  async getCompanyArrayLength () {
  //   return new Promise(function (resolve, reject) {
  //     this.auction.getCompanyArrayLength(function(error, result){
  //       if(error) return reject(error);
  //       return resolve(result);
  //     })
  // });

    let getCompanyArrayLength = this.auction.getCompanyArrayLength(function (err, ok) {
      console.log("ok2s"+ok.toString())
      return ok.toString()
    })

  //   const getCompanyArrayLength = () => {return new Promise((resolve, reject) => {
  //     this.auction.getCompanyArrayLength(function (err, ok) {
  //       if (err) {
  //         reject(new Error('Unable'))
  //       } else {
  //         // result = Object.assign({}, result, ok.toString())
  //         // console.log(ok)
  //         v = ok.toNumber()
  //         resolve(ok.toNumber())
  //       }
  //     })
  //   })
  // }
  //   getCompanyArrayLength().then ( result =>{
  //     console.log(result)
      
  //   })

  //   // console.log("oo"+v+"asdf"+totalC)
  //   console.log("gg"+getCompanyArrayLength)

  //   return getCompanyArrayLength
  // }
  }
  // async registerCompanyToProject (_company, _name) {
  //   this.auction.methods.registerCompanyToProject(_company, _name)
  // }

  async register(_user, _name) {
    this.regist.register(_user, _name)
  }

  async getCompanyStatusByProjectID () {
    this.auction.register(_company, _nameProject)
  }




}

export default AuctionSystem
// module.exports = {
//   getCompanyArrayLength
// }