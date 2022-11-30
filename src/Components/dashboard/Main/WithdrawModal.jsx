import React,{useState, useEffect} from 'react'
import ReactLoading from 'react-loading';
import { financeAppContractAddress, financeAppContract_Abi } from '../../../utils/contracts';
import {withdrawInfo} from '../../../Redux/withdrawDetail/action'
import { toast } from 'react-toastify';
import {useSelector,useDispatch}  from "react-redux"
function WithdrawModal({show,onHide}) {
    const dispatch = useDispatch()
    let acc = useSelector((state) => state.connect?.connection);
    let {withdrawDetail,all_val, status} = useSelector((state)=>state.withDrawInfo);
      const [loader, setLoader] = useState(false);
      const [toatlWithdraw, settotalWithdraw] = useState(0);
      const getDetail = async () => {
        try {
         if (acc == "No Wallet") {
            console.log("No Wallet");
          } else if (acc == "Wrong Network") {
            console.log("Wrong Wallet");
          } else if (acc == "Connect Wallet") {
            console.log("Connect Wallet");
          }else{
            dispatch(withdrawInfo(acc));
            }
            } catch (e) {
                console.log("error while get detiail",e);
            }

    }
    const withdrawAmount = async () => {
        try {
            if (acc == "No Wallet") {
                toast.info("No Wallet");
              } else if (acc == "Wrong Network") {
                toast.info("Wrong Wallet");
              } else if (acc == "Connect Wallet") {
                toast.info("Connect Wallet");
              }else{
                setLoader(true)
                console.log("available_withdraw",typeof toatlWithdraw);
                if(all_val> 0 ){

                    const web3 = window.web3;
                    let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
                    await financeAppcontractOf.methods.withdraw().send({
                        from: acc 
                    });
                    getDetail()
                    onHide()
                    setLoader(false)
                    dispatch(withdrawInfo(acc));
                    toast.success("successfully withdraw");
                }else{
                    setLoader(false);
                    toast.info("You don't have any reward yet!")
                }
            }
        }
        catch (e) {
            setLoader(false)
            console.log(e);
    }
}
    
    useEffect(() => {
        getDetail()
    }, [acc]);
  return (
    <>
   
   {show && <div className='container mt-2 p-3' style={{minHeight:"50vh", width:"100vw", backgroundColor:"#0C102A",  position:"absolute"}}>
   <div className="TcNr flexC fl-cen">
		<div className="Tc-qkN  flexC fl-cen">
			<div className="Tc-qkDK">
				<div className="Tc-qkNz flexC fl-bet">
					<h4 style={{color:"#fff",fontSize:"20px",paddingLeft:"30%"}}><u>All Income 300%</u></h4>
				</div>
				
				
				<div className="Tc-qkNz flexC fl-bet">
				
					<div className="Tc-qkNH">
						
						Unlock principal
					</div>
					<div className="Tc-qkNS"><span className="unfreezed">{withdrawDetail.unlock}</span>USDT</div>
				</div>
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						Cycle reward
					</div>
					<div className="Tc-qkNS"><span className="staticReward">{withdrawDetail.statics}</span>USDT</div>
				</div>
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						1st level
					</div>
					<div className="Tc-qkNS"><span className="directReward">{withdrawDetail.directs}</span>USDT</div>
				</div>
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						2-5 level
					</div>
					<div className="Tc-qkNS"><span className="level4Reward">{withdrawDetail.level4Released}</span>USDT</div>
				</div>
				
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						6-20 level
					</div>
					<div className="Tc-qkNS"><span className="level5Reward">{withdrawDetail.level5Released}</span>USDT</div>
				</div>
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						Freezing
					</div>
					<div className="Tc-qkNS"><span className="level5Freezed">{withdrawDetail.level4Freezed}</span>USDT</div>
				</div>
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						Diamond reward
					</div>
					<div className="Tc-qkNS"><span className="luckReward">{withdrawDetail.diamond}</span>USDT</div>
				</div>
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						Double Diamond reward
					</div>
					<div className="Tc-qkNS"><span className="starReward">{withdrawDetail.doubleDiamond}</span>USDT</div>
				</div>
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						Top player reward
					</div>
					<div className="Tc-qkNS"><span className="topReward">{withdrawDetail.top}</span>USDT</div>
				</div>			
			</div>
			<div className="Tc-qkNF flexC fl-bet">
				<div className="Tc-qkNH">
					Available withdrawal
				 
					 
				</div>
				<div className="Tc-qkNS"><span className="totalReward">{all_val}</span>USDT</div>
			</div>
			
			<div className="Tc-qkb fl-end flexC">
				<a href="JavaScript:;" className="Tc-qkBut withdrawBut">
					Withdraw
				</a>
                <a onClick={onHide}className="Tc-cfBa Tc-cfBel flexC fl-cen close btn-danger">
						Cancel
					</a>
			</div>
		
		</div>
	</div>
</div>}
</>
   
  )
}

export default WithdrawModal