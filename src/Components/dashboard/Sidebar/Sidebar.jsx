import React from 'react'
import scan from "../../../assets/images/icon/scan1.png"
import swap from "../../../assets/images/icon/wyswap.png"

function Sidebar() {
  return (
    <>
    <div className="NavK">
		<ul>
			<li className="Huans"><a href="dashboard.html" className="NavA on flexC"><i className="NavI NavI1"></i><p>
				Dashboard
			</p></a></li>
			<li className="Huans"><a href="myteam.html" className="NavA flexC"><i className="NavI NavI2"></i><p>
				My Team
			</p></a></li>
			<li className="Huans"><a href="depositdet.html" className="NavA flexC"><i className="NavI NavI3"></i><p>
				Deposit Details
			</p></a></li>
			<li className="Huans"><a href="#" className="NavA flexC"><i className="NavI NavI4"></i><p>
				Rules
			</p></a></li>
			<li className="Huans"><a href="https://wyzthscan.org/" className="NavA flexC"><img src={scan} style={{width:"15px",marginRight:"15px"}} /><p>
				WYzthscan
			</p></a></li>
			<li className="Huans"><a href="https://wyzthswap.org/" className="NavA flexC"><img src={swap} style={{width:"15px",marginRight:"15px"}}  /><p>
				WYzthbridge
			</p></a></li>
		</ul>
	</div>
    </>
  )
}

export default Sidebar