import React from 'react'
import logo from "../../../assets/images/icon/logo.png"
import contract from "../../../assets/images/icon/hdMI01.png"
import platform from "../../../assets/images/icon/hdMI02.png"
import income from "../../../assets/images/icon/hdMI03.png"
import deposite from "../../../assets/images/icon/hdMI04.png"
import en from "../../../assets/images/pic/en.png"
import cn from "../../../assets/images/pic/cn.png"

function Header() {
  return (
    <header className="header Huans flexC">
		<a href="#" className="hdlogo flexC"><img src={logo} /></a>
		<div className="hdFS flexC fl-bet">
			<div className="hdFSN flexC">
				<img src={contract}/>
				<p>
					Contract address:
				</p>
				&nbsp;
				<div className="hdFSNp contractAddress">...</div>
			</div>
			<div className="hdFSN flexC">
				<img src={platform} />
				<p>
					Platform Running time:
				</p>
				&nbsp;
				<div className="hdFSNp runTime">...</div>
			</div>
			<div className="hdFSN flexC">
				<img src={income}/>
				<p>
					Income:
				</p>
				&nbsp;
				<div className="hdFSNp">
					15 days per cycle. Monthly 45% 
				</div>
			</div>
			<div className="hdFSN flexC">
				<img src={deposite} />
				<p>
					Deposit time:
				</p>
				&nbsp;
				<div className="hdFSNp depositCountDown">...</div>
			</div>
		</div>
		<div className="hdR flexC">
			<div className="hdREn">
				<a href="#" className="hdREna flexC"><p className="langAbbr">EN</p><img className="flagImg" src={en} /><i></i></a>
				<div className="hdREnK Huans">
					<a href="#" className="hdREnA flexC en"><p>EN</p><img src={en} /></a>
					<a href="#" className="hdREnA flexC cn"><p>CN</p><img src={cn} /></a>
				</div>
			</div>	
			<a href="#" className="hdLik linkWallet">
				Connect
			</a>
		</div>              
	</header>
  )
}

export default Header