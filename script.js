function getRolls(gems, hasVIP, outID) {
	let cost = (hasVIP) ? 40 : 50;
	document.getElementById(outID).innerHTML = Math.floor(gems / cost);
}

function getRate(rolls, rarity, onBanner, outID) {
	let rollOdds = 0;
    if (rarity == "rare") {
		rollOdds = 0.75496;
	} else if (rarity == "epic") {
		rollOdds = 0.2;
	} else if (rarity == "legendary") {
		rollOdds = 0.04;
	} else if (rarity == "mythical") {
		rollOdds = 0.005;
		if (onBanner == "center") {
			rollOdds *= 0.5;
		} else if (onBanner == "side") {
			rollOdds *= 0.2;
		} else if (onBanner == "no") {
			rollOdds *= 0.005;
		}
	} else if (rarity == "secret") {
		rollOdds = 0.00004;
	}
	
	//legendary pity
	if (rarity == "legendary" && rolls > 50) {
		
	}
	
}