import React from 'react'
import noEnergy from '../../../assets/images/pic/Indzhu01.png'
import highReturn from '../../../assets/images/pic/Indzhu02.png'
import longevity from '../../../assets/images/pic/Indzhu03.png'
import Booster from '../../../assets/images/pic/Indxin05.png'

function ThirdPage() {
  return (
    <div className="Indzhu">
	<div className="IndzhuN Indwark Huans">
		<div className="IndzhuS">
			<div className="IndzhuI"><img src={noEnergy} /></div>
			<h3>
				With No Energy and Minimum Gas Fee
			</h3>
		</div>
		<div className="IndzhuS">
			<div className="IndzhuI"><img src={noEnergy} /></div>
			<h3>
				100% decentralise with professional audit 
			</h3>
		</div>
		<div className="IndzhuS">
			<div className="IndzhuI"><img src={highReturn} /></div>
			<h3>
				High return
			</h3>
			<p>
				15 days per cycle initialys at
				<span>1.5%, </span>
				per cycle
				<span>22.5%</span>
			</p>
		</div>
		<div className="IndzhuS">
			<div className="IndzhuI"><img src={Booster} /></div>
			<h3>
				Booster
			</h3>
			<p>In a month 4 direct each $1000 you will get boost your ROI 54%</p>
		</div>
		{/* <div className="IndzhuS">
			<div className="IndzhuI"><img src={longevity} /></div>
			<h3>
				Sustainability and longevity is the key for wBSG
			</h3>
		</div>
		<div className="IndzhuS">
			<div className="IndzhuI"><img src={longevity} /></div>
			<h3>
				Your package with insured by wyzth coin
			</h3>
		</div> */}
	</div>	
</div>
  )
}

export default ThirdPage