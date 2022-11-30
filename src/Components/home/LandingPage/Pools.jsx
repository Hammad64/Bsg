import React from 'react'
import luckyPoolImg from '../../../assets/images/pic/Indchi01.png'
import diamondPoolImg from '../../../assets/images/pic/Indchi02.png'
import referralPoolImg from '../../../assets/images/pic/Indchi03.png'
function Pools() {
  return (
    <div className="Indchi">
	<div className="IndchiH Indwark Huans flex fl-bet">
		<a href="#" className="IndchiHa">
			<div className="IndchiHI"><img src={luckyPoolImg} /></div>
			<h3>
				Daily Lucky Pool
			</h3>
			<p className="luckPool">$0.00</p>
		</a>
		<a href="#" className="IndchiHa">
			<div className="IndchiHI"><img src={diamondPoolImg} /></div>
			<h3>
				Daily Dimond pool
			</h3>
			<p className="starPool">$0.00</p>
		</a>
		<a href="#" className="IndchiHa">
			<div className="IndchiHI"><img src={referralPoolImg} /></div>
			<h3>
				Daily Referral pool
			</h3>
			<p className="topPool">$0.00</p>
		</a>
	</div>
	<div className="IndchiK Indwark Huans flexC fl-bet">
		<div className="IndchiKL">
			<h3>
				Monthy 45% 
			</h3>
			<a href="dashboard.html" className="IndZhua">
				CONTRIBUTE
			</a>
		</div>
		<div className="IndchiKR">
			<a href="#" className="IndchiKRa flexC">
				<p className="latestDeposit">...</p>
				<span className="latestAmount">$0.00</span>
			</a>
			<a href="#" className="IndchiKRa flexC">
				<p className="latestDeposit">...</p>
				<span className="latestAmount">$0.00</span>
			</a>
			<a href="#" className="IndchiKRa flexC">
				<p className="latestDeposit">...</p>
				<span className="latestAmount">$0.00</span>
			</a>
			<a href="#" className="IndchiKRa flexC">
				<p className="latestDeposit">...</p>
				<span className="latestAmount">$0.00</span>
			</a>
		</div>
	</div>	
</div>
  )
}

export default Pools