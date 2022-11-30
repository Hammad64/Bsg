import React from 'react'
import helpcircle from "../../../assets/images/icon/help-circle.png"
function Deposite() {
  return (
    <div className="Huans madk flex fl-bet" style={{height:"100vh",backgroundColor:"black"}}>
		<div className="depDK">
			<div className="depTit Huans flexC fl-bet">
				<div className="depTitH">
					Deposit details 
				</div>
			</div>
			<table width="100%" border="0" cellspacing="0" cellpadding="0" className="DepTab">
				<tr>
					<th scope="col">
						Amount 
					</th>
					<th scope="col">
						Deposit Date 
					</th>
					<th scope="col">
						Unfreeze Time 
					</th>
					<th scope="col">
						Reward 
					</th>
					<th scope="col" className="DepTabB fl-cen flexC">
						Order Status 
						&ensp;<a href="#" className="dasDenLhp"><img src={helpcircle} /></a>
						<div className="DepTabBN">
							<p className="DepC1">
								* Freezing: Unmaturity of deposit 
							</p>
							<p className="DepC3">
								* Completed: unfreeze and withdrawal completed 
							</p>
							<p className="DepC6">
								* Available withdraw: Withdrawable 
							</p>
						</div>
					</th>
				</tr>

			</table>
		
		</div>
		
	</div>
  )
}

export default Deposite