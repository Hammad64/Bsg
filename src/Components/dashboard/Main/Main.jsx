import React from 'react'
import pic1 from "../../../assets/images/pic/dasNu01.png"
import pic2 from "../../../assets/images/pic/dasNu02.png"
import pic3 from "../../../assets/images/pic/dasNu03.png"
import pic4 from "../../../assets/images/pic/dasNu04.png"
import deposite from "../../../assets/images/pic/dasTcI01.png"
import withdraw from "../../../assets/images/pic/dasTcI02.png"
import splite from "../../../assets/images/pic/dasTcI03.png"
import energy from "../../../assets/images/pic/dasTcI04.png"
import star from "../../../assets/images/icon/star01.png"
import helpcircle from "../../../assets/images/icon/help-circle.png"
import dasJia1 from "../../../assets/images/pic/dasJia1.png" 
import dasJia2 from "../../../assets/images/pic/dasJia2.png" 
import dasJia3 from "../../../assets/images/pic/dasJia3.png" 
import group from "../../../assets/images/icon/Group.png"
import north from "../../../assets/images/pic/north_east.png" 
import south from "../../../assets/images/pic/south_east.png" 

function Main() {
  return (
	<>
    <div className="Huans madk flex fl-bet" style={{backgroundColor:"black"}}>
		<div className="madW1">
			<div  className="madbck dasNuz Huans flexC fl-bet">
				<a href="#" className="dasNuzA dasNuzA1 Huans flexC fl-bet">
					<div className="dasNuzI"><img src={pic1}/></div>
					<div className="dasNuzN">
						<h3>
							Players
						</h3><p><span className="totalUser">0</span></p>
					</div>
				</a>
				<a href="#" className="dasNuzA dasNuzA2 Huans flexC fl-bet">
					<div className="dasNuzI"><img src={pic2} /></div>
					<div className="dasNuzN">
						<h3>
							Daily Lucky Pool
						</h3><p className="luckPool">$0.00</p>
					</div>
				</a>
				<a href="#" className="dasNuzA dasNuzA3 Huans flexC fl-bet">
					<div className="dasNuzI"><img src={pic3} /></div>
					<div className="dasNuzN">
						<h3>
							Daily Dimond Pool
						</h3><p className="starPool">$0.00</p>
					</div>
				</a>
				<a href="#" className="dasNuzA dasNuzA4 Huans flexC fl-bets">
					<div className="dasNuzI"><img src={pic4} /></div>
					<div className="dasNuzN">
						<h3>
							Daily Top 3 Pool
						</h3><p className="topPool">$0.00</p>
					</div>
				</a>
			</div>
			
			<div  className="madbck dasTck Huans flexC fl-bet">
				<div className="dasTckN Huans flexC fl-bet">
					<div className="dasTckI"><img src={deposite} /></div>
					<a href="#" className="dasTckNA dasTckA1">
						Deposit
					</a>
				</div>
				<div className="dasTckN Huans flexC fl-bet">
					<div className="dasTckI"><img src={withdraw} /></div>
					<a href="#" className="dasTckNA dasTckA2">
						Withdraw
					</a>
				</div>
				<div className="dasTckN Huans flexC fl-bet">
					<div className="dasTckI"><img src={splite} /></div>
					<a href="#" className="dasTckNA dasTckA3">
						Split account
					</a>
				</div>
				<div className="dasTckN Huans flexC fl-bet">
					<div className="dasTckI"><img src={energy} /></div>
					<a href="#" target="_blank" className="dasTckNA dasTckA4">
						No Energy Required
					</a>
				</div>
			</div>
			<div  className="madbck dasDen Huans flexC fl-bet">
				<div className="dasDenL Huans flexC fl-bet">
					<div className="dasDenLP flexC">
						<h3>
							My level
						</h3>
						<div className="dasDenLs flexC">
							<img className="level" src={star}/>
							<img className="level" src={star}/>
							<img className="level" src={star}/>
							<img className="level" src={star}/>
							<img className="level" src={star}/>
						</div>
						<a href="#" className="dasDenLhp levelCircle">
							<img src={helpcircle} />
							
						</a>
						<p className="levelHint">
							one-star player, two-star player, three-star player, four-star player, five-star player
						</p>
					</div>
					<div className="dasDenLP flexC">
						<h3>
							Income
						</h3>
						<div className="dasDenLPn">$<span className="withdrawn">0.00</span></div>
					</div>
					<div className="dasDenLP flexC">
						<h3>
							Referral
						</h3>
						<div className="dasDenLPn referAddr">...</div>
					</div>
					
				</div>
				<div className="dasDenL Huans flexC fl-bet">
					
					<div className="dasDenLP flexC">
						<h3>
							wUSDT Balance
						</h3>
						<div className="dasDenLPn trxBal">0.00</div>
					</div>
					<div className="dasDenLP flexC">
						<h3>
							USDT Balance:
						</h3>
						<div className="dasDenLPn usdtBal">0.00</div>
					</div>

					<div className="dasDenLP flexC">
						<h3>
							My address
						</h3>
						 <div className="dasDenLPn myAddr">...</div> 
						<input type="text" id="ref-link" style={{background: "transparent",border:"0px",color: "#fff", width: "300px"}}  className="refLink" readonly="readonly" value="" />
						<a href="#" className="dasDenLc copyLink">
							Copy
						</a>
					</div>
				</div>
			</div>
			<div  className="dasJia dasJia1 Huans flexC fl-cen">
				<div className="dasJiaL flexC">
					<div className="dasJiaLI"><img src={dasJia1} /></div>
					<div className="dasJiaLN"><h3>
						Lucky Reward
					</h3><p>
						Time Remaning
					</p></div>
				</div>
				<div className="dasJiaC flexC fl-cen">
					<div className="dasJiaCn hourStart">0</div>
					<div className="dasJiaCn hourEnd">0</div>
					<p>:</p>
					<div className="dasJiaCn minuteStart">0</div>
					<div className="dasJiaCn minuteEnd">0</div>
					<p>:</p>
					<div className="dasJiaCn secondStart">0</div>
					<div className="dasJiaCn secondEnd">0</div>
				</div>
				<div className="dasJiaR flexC fl-end"><p>
					Info
				</p>
				<a href="#" className="dasDenLhp luckCircle">
					<img src={helpcircle} />
				</a>
				<div className="luckHint">
					Daily last 10 depositor shall be rewarded
				</div>
			</div>
			</div>
			<div  className="dasJia dasJia2 Huans flexC fl-cen">
				<div className="dasJiaL flexC">
					<div className="dasJiaLI"><img src={dasJia2} /></div>
					<div className="dasJiaLN"><h3>
						Daily top reward
					</h3><p>
						Time Remaning
					</p></div>
				</div>
				<div className="dasJiaC flexC fl-cen">
					<div className="dasJiaCn hourStart">0</div>
					<div className="dasJiaCn hourEnd">0</div>
					<p>:</p>
					<div className="dasJiaCn minuteStart">0</div>
					<div className="dasJiaCn minuteEnd">0</div>
					<p>:</p>
					<div className="dasJiaCn secondStart">0</div>
					<div className="dasJiaCn secondEnd">0</div>
				</div>
				<div className="dasJiaR flexC fl-end"><p>
					Info
				</p>
				<a href="#" className="dasDenLhp topCircle"><img src={helpcircle} /></a>
				<div className="topHint">
					Top 3 inviter daily shall split the pool daily.
				</div>
			</div>
			</div>
			<div className="dasJia dasJia3 Huans flexC fl-cen">
				<div className="dasJiaL flexC">
					<div className="dasJiaLI"><img src={dasJia3} /></div>
					<div className="dasJiaLN"><h3>
						Daily Dimond Reward
					</h3><p>
						Time Remaning
					</p></div>
				</div>
				<div className="dasJiaC flexC fl-cen">
					<div className="dasJiaCn hourStart">0</div>
					<div className="dasJiaCn hourEnd">0</div>
					<p>:</p>
					<div className="dasJiaCn minuteStart">0</div>
					<div className="dasJiaCn minuteEnd">0</div>
					<p>:</p>
					<div className="dasJiaCn secondStart">0</div>
					<div className="dasJiaCn secondEnd">0</div>
				</div>
				<div className="dasJiaR flexC fl-end"><p>
					Info
				</p>
				<a href="#" className="dasDenLhp starCircle"><img src={helpcircle} /></a>
				<div className="starHint">
					4 star player shall split the daily pool daily.
				</div>
			</div>
			</div>
		</div>
		<div className="madW2">
			<div className="madbck daRiz Huans">
				<div className="daRizT">
					Latest Depositors
				</div>
				<div className="daRizN flexC fl-bet">
					<a href="#" className="daRiza flexC fl-bet">
						<div className="daRizaP latestDeposit">
							Nill
						</div>
						<div className="daRizaW">...</div>
						<div className="daRizaS flexC">
							<img src={group}/><p className="latestAmount" >$0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC fl-bet">
						<div className="daRizaP latestDeposit">
							Nill
						</div>
						<div className="daRizaW">...</div>
						<div className="daRizaS flexC">
							<img src={group}/><p className="latestAmount">$0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC fl-bet">
						<div className="daRizaP latestDeposit">
							Nill
						</div>
						<div className="daRizaW">...</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="latestAmount">$0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC fl-bet">
						<div className="daRizaP latestDeposit">
							Nill
						</div>
						<div className="daRizaW">...</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="latestAmount" >$0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC fl-bet">
						<div className="daRizaP latestDeposit">
							Nill
						</div>
						<div className="daRizaW">...</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="latestAmount">$0.00</p>
						</div>
					</a>

					<a href="#" className="daRiza flexC fl-bet">
						<div className="daRizaP latestDeposit">
							Nill
						</div>
						<div className="daRizaW">...</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="latestAmount">$0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC fl-bet">
						<div className="daRizaP latestDeposit">
							Nill
						</div>
						<div className="daRizaW">...</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="latestAmount">$0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC fl-bet">
						<div className="daRizaP latestDeposit">
							Nill
						</div>
						<div className="daRizaW">...</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="latestAmount" >$0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC fl-bet">
						<div className="daRizaP latestDeposit">
							Nill
						</div>
						<div className="daRizaW">...</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="latestAmount" >$0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC fl-bet">
						<div className="daRizaP latestDeposit">
							Nill
						</div>
						<div className="daRizaW">...</div>
						<div className="daRizaS flexC">
							<img src={group}/><p className="latestAmount">$0.00</p>
						</div>
					</a>
				</div>
			</div>
			<div className="madbck daRiz Huans">
				<div className="daRizT">
					Lucky Player
				</div>
				<div className="daRizN flexC fl-bet">
					<a href="#" className="daRiza flexC">
						<div className="daRizaU">1</div>
						<div className="daRizaM luckUser">
							Nill
						</div>
						<div className="daRizaS flexC">
							<img src={group}/><p className="luckDeposit">0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC">
						<div className="daRizaU">2</div>
						<div className="daRizaM luckUser">
							Nill
						</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="luckDeposit">0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC">
						<div className="daRizaU">3</div>
						<div className="daRizaM luckUser">
							Nill
						</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="luckDeposit">0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC">
						<div className="daRizaU">4</div>
						<div className="daRizaM luckUser">
							Nill
						</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="luckDeposit">0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC">
						<div className="daRizaU">5</div>
						<div className="daRizaM luckUser">
							Nill
						</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="luckDeposit">0.00</p>
						</div>
					</a>

					<a href="#" className="daRiza flexC">
						<div className="daRizaU">6</div>
						<div className="daRizaM luckUser">
							Nill
						</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="luckDeposit">0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC">
						<div className="daRizaU">7</div>
						<div className="daRizaM luckUser">
							Nill
						</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="luckDeposit">0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC">
						<div className="daRizaU">8</div>
						<div className="daRizaM luckUser">
							Nill
						</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="luckDeposit">0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC">
						<div className="daRizaU">9</div>
						<div className="daRizaM luckUser">
							Nill
						</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="luckDeposit">0.00</p>
						</div>
					</a>
					<a href="#" className="daRiza flexC">
						<div className="daRizaU">10</div>
						<div className="daRizaM luckUser">
							Nill
						</div>
						<div className="daRizaS flexC">
							<img src={group} /><p className="luckDeposit">0.00</p>
						</div>
					</a>
				</div>
			</div>
			<div className="madbck daRiz Huans">
				<div className="daRizT">
					Top 3 Player
				</div>
				<div className="daRizNN flexC fl-bet">
					<a href="#" className="daRiza flexC">
						<div className="daRizaU">1</div>
						<div className="daRizaM dayTopUser">
							Nill
						</div>
						<div className="daRizNz"><img src={north} /></div>
					</a>
					<a href="#" className="daRiza flexC">
						<div className="daRizaU">2</div>
						<div className="daRizaM dayTopUser">
							Nill
						</div>
						<div className="daRizNz"><img src={south} /></div>
					</a>
					<a href="#" className="daRiza flexC">
						<div className="daRizaU">3</div>
						<div className="daRizaM dayTopUser">
							Nill
						</div>
						<div className="daRizNz"><img src={north} /></div>
					</a>
				</div>
			</div>
		</div>
	</div>
	</>
  )
}

export default Main