import { ActionTypes } from "../types";
import { financeAppContractAddress, financeAppContract_Abi } from "../../utils/contracts";
import moment from 'moment';
import Web3 from "web3";
const web3Supply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/")
export const getLatestDepositors= () => {
    return async (dispatch) => {
        try {
            const web3 = window.web3;
            let financeAppcontractOf = new web3Supply.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
            let depositLength = await financeAppcontractOf.methods.getDepositorsLength().call();
            let dd = {}
            for (let i = 0; i < depositLength; i++) {
                let depositAddress = await financeAppcontractOf.methods.depositors(i).call()
                let next = await financeAppcontractOf.methods.getOrderLength(depositAddress).call()
                dd[depositAddress] = next;
            }
            let objectdata = []
            for (let index = 0; index < Object.keys(dd).length; index++) {
                const elementKey = Object.keys(dd)[index];
                const next = dd[elementKey]
                for (let j = next - 1; j >= 0; j--) {
                    let userinfos = await financeAppcontractOf.methods.orderInfos(elementKey, j).call()

                    let address_here = elementKey?.substring(0, 15) + "..." + elementKey?.substring(elementKey?.length - 15);
                    let reward = web3.utils.fromWei(userinfos.amount)
                    reward = parseFloat(reward).toFixed(3)
                    let newArr = { address: address_here, userinfos1: moment((userinfos?.start * 1) * 1000).format('D MMM YYYY hh:mm:ss a'), userinfos: (userinfos?.start), amount: reward }
                    objectdata.push(newArr)
                }
            }

            let objectdata1 = objectdata.sort(function (left, right) {
                return Number(left?.userinfos) < Number(right?.userinfos) ? 1 : -1
            });
            dispatch({ type: ActionTypes.LATEST_DEPOSIT, payload: {
                isLatest:false,
                latestDeposit:objectdata1
            } });


        } catch (e) {
            console.log(e.message);


        }
  }
}