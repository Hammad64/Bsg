import React, { useEffect, useState } from "react";
import group from "../../../assets/images/icon/Group.png";
import { useSelector, useDispatch } from "react-redux";
import {
  financeAppContractAddress,
  financeAppContract_Abi,
  busdTokenAddress,
  busdtokenAbi,
} from "../../../utils/contracts";
import { getpoolDetail, getUserRank } from "../../../Redux/poolInfo/action";
import { getRemaintime } from "../../../Redux/remaintime/action";
import { withdrawInfo } from "../../../Redux/withdrawDetail/action";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
export default function DepositeModal({ show, onHide }) {
  let acc = useSelector((state) => state.connect?.connection);
  let [loader, setloader] = useState(false);
  let [depositandintrest, setdepositandintrest] = useState("50");
  const dispatch = useDispatch();
  
  // deposit amount 
  const depositAmount = async () => {
    try {
        if (acc == "No Wallet") {
            toast.info("No Wallet");
          } else if (acc == "Wrong Network") {
            toast.info("Wrong Wallet");
          } else if (acc == "Connect Wallet") {
            toast.info("Connect Wallet");
          }else{
            
            const web3 = window.web3;
            const contract = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
            if (parseFloat(depositandintrest) >= 50 && parseFloat(depositandintrest) <= 5000) {
                const {maxDeposit, referrer} = await contract.methods.userInfo(acc).call();
            if(parseFloat(depositandintrest) >= parseFloat(web3.utils.fromWei(maxDeposit))){
                if (parseInt(depositandintrest) % 50 === 0) {
                    if (referrer == '0x0000000000000000000000000000000000000000') {
                        toast.error('please Register Account 1st ')
                    }else {
                        setloader(true)
                        const token = new web3.eth.Contract(busdtokenAbi, busdTokenAddress);
                        let value = web3.utils.toWei(depositandintrest);
                        await token.methods.approve(financeAppContractAddress,value).send({
                            from:acc
                        });
                        await contract.methods.deposit(value).send({
                            from:acc
                     })
                     dispatch(getRemaintime())
                     dispatch(getpoolDetail())
                     dispatch(withdrawInfo(acc))
                     onHide();
                     toast.success("Amount Deposited successfully")
                     setloader(false)
                    }
                }
                else {
                    toast.error('please enter value in ratio 50 ')
                }
            }else{
                toast.info(`please enter value ${web3.utils.fromWei(maxDeposit)} or above`)
            }
            }else{
                toast.info('value must be greater then 50 and less then 5000 ')
            }
          }
    } catch (error) {
        setloader(false)
        console.error("error while deposit amount", error.message);
    }
}
  return (
    <>
      {show && (
        <div
          className="container mt-2 p-3"
          style={{
            minHeight: "50vh",
            width: "100vw",
            backgroundColor: "#0C102A",
            position: "absolute",
          }}
        >
          <div className="TcNr flexC fl-cen">
            <div className="Tc-cfN  flexC fl-cen">
              <div className="Tc-czDK">
                <div className="Tc-czBD">
                  <div className="Tc-czBDS flexC fl-bet">
                    <input
                      type="text"
                      placeholder="50"
                      value={depositandintrest}
                      onChange={(e)=>setdepositandintrest(e.target.value)}
                      className="Tc-cfBDSI Huans inputAmount"
                    />
                    <div className="Tc-cfBDSz flexC fl-cen">
                      <img src={group} />
                      <p>USDT</p>
                    </div>
                  </div>
                  <div className="Tc-czBDP">
                    Minimum deposit 50USDT. A ratio of 50 max 2000
                  </div>
                </div>

                <div className="Tc-czDS Huans">
                  <div className="Tc-czDfc">
                    <div className="Tc-czDfcB flexC fl-bet">
                      <h3>
                        <span className="depositAmount">50</span>
                        <span>USDT</span>
                      </h3>
                      <p>+</p>
                      <h3>
                        22.5<span>%</span>
                      </h3>
                      <p>=</p>
                      <h3>
                        <span className="total">61.25</span>
                        <span>USDT</span>
                      </h3>
                    </div>
                    <div className="Tc-czDfcP flexC fl-bet">
                      <p>Deposit</p>
                      <p>Each cycle</p>
                      <p>Deposit and interest</p>
                    </div>
                  </div>
                  <div className="Tc-czDSp">
                    <p>15 days per cycle. 22.5% per cycle</p>
                    <p>
                      You will have to redeposit every time after each cycle. It
                      will have to be either the same amount or bigger amount.
                      Every 2 cycle you deposit 1 extra days will be added
                      without extra interest. Maximum 45 days.
                    </p>
                  </div>
                </div>

                <div className="Tc-cfB flexC fl-end">
                  <a
                    onClick={onHide}
                    className="Tc-cfBa Tc-cfBel flexC fl-cen close"
                  >
                    Cancel
                  </a>
                  <button
                  onClick={depositAmount}
                    className="Tc-cfBa Tc-cfBqd flexC fl-cen depositBut"
                  >
                    {loader ? <ReactLoading type="spin" color="#ffffff" className='mb-2 mx-auto' height={30} width={30} /> : "Confirm"} 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
