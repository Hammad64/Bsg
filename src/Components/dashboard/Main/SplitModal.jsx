import React,{useState} from 'react'
import {Modal, Button} from "react-bootstrap";
import group from "../../../assets/images/icon/Group.png"
import {useDispatch, useSelector} from "react-redux"
function SplitModal({show,onHide}) {
	let acc = useSelector((state) => state.connect?.connection);
	let [amount, setAmount] = useState('')
	let [stdAmount, setsdtAmount] = useState('')
	let [recieverAdress, setRecieverAdress] = useState('')
	const [getsplit_Value, setgetsplit_Value] = useState("")
	const [depositcheck, setdepositcheck] = useState(1);
	const [loader, setloader] = useState(false)
	
  return (
    <>
   
    {show && <div className='container mt-2 p-3' style={{minHeight:"50vh", width:"100vw", backgroundColor:"#0C102A",  position:"absolute"}}>
    <div class="TcNr flexC fl-cen">
		<div class="Tc-cfN  flexC fl-cen">
			<div class="Tc-cfBK">
				<div class="Tc-cfBD flex">
					<div class="Tc-cfBDH">USDT</div>
					<div class="Tc-cfBDS flex">
						<input type="text" placeholder="50" readonly="true" value="0" class="Tc-cfBDI Huans freezingAmt" />
					</div>
				</div>
				<div class="Tc-cfBD flex">
					<div class="Tc-cfBDH">
						Amount
					</div>					
					<div class="Tc-cfBDS flex">
						<input type="text" placeholder="" value="" class="Tc-cfBDSI Huans tAmount" />
						<div class="Tc-cfBDSz flexC fl-cen"><img src={group} /><p>USDT</p></div>
						<div class="Tc-Word">
							The ratio of 50
						</div>
					</div>
				</div>
				<div class="Tc-cfBD flex">
					<div class="Tc-cfBDH">
						Receiver address
					</div>
					<div class="Tc-cfBDS flex">
						<input type="text" placeholder="" value="" class="Tc-cfBDSI Huans receiver" />
					</div>
				</div>	
				<div class="Tc-cfBmz flexC fl-end">
					<a href="JavaScript:;" class="Tc-cfBza Tc-cfBza1 depositFreezing">
						Deposit
					</a>
					<a href="JavaScript:;" class="Tc-cfBza Tc-cfBza2 transferFreezing">
						Transfer
					</a>
				</div>
			</div>
			
		
		</div>
	</div>
 </div>}
 </>
  )
}

export default SplitModal