import React, { useState, useEffect } from "react";

import group from "../../../assets/images/icon/Group.png";
import { toast } from "react-toastify";
// import toast,{Toaster} from 'react-hot-toast';
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import {
  financeAppContractAddress,
  financeAppContract_Abi
} from "../../../utils/contracts";
function RegisterModal({ show, onHide }) {
  let acc = useSelector((state) => state.connect?.connection);
  console.log("acc", acc);
  let [regisdterAdress, setRegisdterAdress] = useState("");
  let [loader, setloader] = useState(false);
  const registerAddress = async () => {
    try {
      setloader(true);
      const web3 = window.web3;
      const contract = new web3.eth.Contract(
        financeAppContract_Abi,
        financeAppContractAddress
      );
      await contract.methods.register(regisdterAdress).send({
        from: acc,
      });
      onHide();
      toast.success("user registerd successfully");
      setloader(false);
    } catch (error) {
      setloader(false);
      console.error("error while register address", error.message);
    }
  };
  const newRegister = async () => {
    try {
      if (acc == "No Wallet") {
        toast.info("No Wallet");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Wallet");
      } else if (acc == "Connect Wallet") {
        toast.error(`Connect Wallet`);
      } else {
        const web3 = window.web3;
        const contract = new web3.eth.Contract(
          financeAppContract_Abi,
          financeAppContractAddress
        );
        const refAddress = await contract.methods.defaultRefer().call();
        if (refAddress == regisdterAdress) {
          registerAddress();
        } else {
          const { maxDeposit } = await contract.methods
            .userInfo(regisdterAdress)
            .call();
          if (maxDeposit > 0) {
            registerAddress();
          } else {
            toast.error("Invalid referral");
          }
        }
      }
    } catch (error) {
      console.error("error while new register", error.message);
    }
  };
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
                      placeholder="Enter Referral Address"
                      className="Tc-cfBDSI Huans inputAmount"
                      onChange={(e)=>{setRegisdterAdress(e.target.value)}}
                    />
                    <div className="Tc-cfBDSz flexC fl-cen">
                      <p>Register</p>
                    </div>
                  </div>
                </div>

                <div className="Tc-cfB flexC fl-end">
                  <button
                    onClick={onHide}
                    className="Tc-cfBa Tc-cfBel flexC fl-cen close text-dark"
                  >
                    Cancel
                  </button>
                  <button
                    className="Tc-cfBa Tc-cfBqd flexC fl-cen depositBut"
                    onClick={newRegister}
                  >
                    {loader ? (
                      <ReactLoading
                        type="spin"
                        color="#ffffff"
                        className="mb-2 mx-auto"
                        height={30}
                        width={30}
                      />
                    ) : (
                      "Confirm"
                    )}
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

export default RegisterModal;
