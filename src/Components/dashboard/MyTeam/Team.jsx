import React from 'react'
import team1 from "../../../assets/images/pic/team01.png" 
import team2 from "../../../assets/images/pic/team02.png" 
import team3 from "../../../assets/images/pic/team03.png" 
import team5 from "../../../assets/images/pic/team05.png" 

function Team() {
  return (
    <div className="Huans madk flex fl-bet">
			<div className="teaBRF flex fl-bet">
				<a href="#" className="teaBRFa flexC">
					<img src={team1}/>
					<div className="teaBRFp">
						<p>
							Sales 
						</p>
						<h3 className="DepC4 totalTeamDeposit">0.00</h3>
					</div>
				</a>
				<a href="#" className="teaBRFa flexC">
					<img src={team2} />
					<div className="teaBRFp">
						<p>
							Downline 
						</p>
						<h3 className="DepC1 totalInvited">0</h3>
					</div>
				</a>
				<a href="#" className="teaBRFa flexC">
					<img src={team3} />
					<div className="teaBRFp">
						<p>
							Performance A area  
						</p>
						<h3 style={{color:"#FA2256"}} className="maxDirectDeposit">0.00</h3>
					</div>
				</a>
	
				<a href="#" className="teaBRFa flexC">
					<img src={team5} />
					<div className="teaBRFp">
						<p>
							Performance B area 
						</p>
						<h3 className="DepC2 otherDirectDeposit">0.00</h3>
					</div>
				</a>
				
			</div>
		</div>
  )
}

export default Team