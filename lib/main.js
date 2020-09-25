//set window size for object. change here and at bottom of page
// var width = window.innerWidth;
// var height = window.innerHeight;
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

var countries = [
	'China', 
	'India', 
	'Indonesia', 
	'Pakistan', 
	'Bangladesh', 
	'Russia', 
	'Japan', 
	'Philippines', 
	'Thailand', 
	'Myanmar', 
	'South Korea', 
	'Malaysia', 
	'Nepal',
	'North Korea',
	'Australia',
	'Taiwan',
	'Sri Lanka',
	'Cambodia',
	'Papua New Guinea',
	'Laos',
	'Singapore',
	'New Zealand',
	'Fiji',
	'Bhutan',
	'Samoa',
	'Tonga',
	'Cook Islands',
	'Afghanistan',
	'Vanuatu'];
console.log(countries[0]);

var TopicTotal = [
	121608,
	5176,
	1852,
	1504,
	20715,
	7002,
	6929,
	12512,
	11057
];

var ChinaTotals = [
	182,
	331,
	85,
	32,
	39,
	200,
	82,
	134,
	2137
];
	
var IndiaTotals = [
	1721,
	2653,
	2064,
	303,
	649,
	3773,
	1423,
	3366,
	35582
];
	
var IndonesiaTotals = [
	31,
	23,
	26,
	7,
	10,
	109,
	24,
	73,
	638
];
	
var PakistanTotals = [
	244,
	422,
	244,
	56,
	76,
	606,
	266,
	729,
	4800
];
	
var BangladeshTotals = [
	93,
	195,
	222,
	28,
	31,
	362,
	99,
	506,
	1907
];
	
var RussiaTotals = [
	20,
	21,
	4,
	0,
	3,
	11,
	3,
	5,
	85
];
	
var JapanTotals = [
	63,
	167,
	44,
	15,
	13,
	169,
	41,
	85,
	899
];
	
var PhilippinesTotals = [
	288,
	509,
	312,
	38,
	109,
	1682,
	498,
	1422,
	6525
];
	
var ThailandTotals = [
	20,
	45,
	32,
	6,
	4,
	65,
	21,
	54,
	400
];

var MyanmarTotals = [
	24,
	12,
	12,
	3,
	6,
	49,
	9,
	54,
	174
];

var SouthKoreaTotals = [
	17,
	35,
	10,
	3,
	3,
	17,
	10,
	8,
	251,
];

var MalaysiaTotals = [
	75,
	127,
	60,
	35,
	26,
	245,
	106,
	91,
	1996
];

var NepalTotals = [
	59,
	32,
	37,
	11,
	39,
	159,
	37,
	204,
	697
];

var NorthKoreaTotals = [
	4,
	9,
	0,
	3,
	0,
	1,
	1,
	1,
	16	
];

var AustraliaTotals = [
	1307,
	4436,
	2316,
	684,
	477,
	7602,
	2642,
	3055,
	37707
];

var TaiwanTotals = [
	20,
	30,
	16,
	8,
	5,
	64,
	21,
	22,
	541
];

var SriLankaTotals = [
	94,
	101,
	77,
	13,
	15,
	124,
	41,
	129,
	594
];

var CambodiaTotals = [
	9,
	20,
	15,
	3,
	9,
	60,
	20,
	58,
	351
];

var PapuaNewGuineaTotals = [
	2,
	2,
	4,
	0,
	0,
	6,
	3,
	5,
	86
];

var LaosTotals = [
	3,
	6,
	6,
	1,
	1,
	22,
	4,
	12,
	78
];

var SingaporeTotals = [
	63,
	121,
	38,
	12,
	9,
	193,
	64,
	136,
	1179
];

var NewZealandTotals = [
	603,
	1553,
	1022,
	198,
	259,
	4730,
	1362,
	1720,
	21777
];

var FijiTotals = [
	26,
	30,
	49,
	4,
	14,
	195,
	98,
	360,
	1674
];

var BhutanTotals = [
	7,
	3,
	7,
	0,
	10,
	33,
	8,
	37,
	166
];

var SamoaTotals = [
	2,
	3,
	81,
	2,
	2,
	26,
	15,
	40,
	239
];

var TongaTotals = [
	1,
	1,
	0,
	0,
	0,
	6,
	2,
	3,
	49
];

var CookIslandsTotals = [
	45,
	48,
	47,
	0,
	3,
	54,
	48,
	50,
	108
];

var AfghanistanTotals = [
	139,
	110,
	81,
	33,
	36,
	102,
	34,
	100,
	675
];

var VanuatuTotals = [
	14,
	12,
	18,
	6,
	4,
	50,
	20,
	53,
	277
];

//document.getElementById("CountriesText").style.opacity = 1;
document.getElementById("ConflictNumbers").style.opacity = 0;
document.getElementById("ConflictNumbers").style.opacity = 0;
document.getElementById("FragilityNumbers").style.opacity = 0;
document.getElementById("InstabilityNumbers").style.opacity = 0;
document.getElementById("RiskNumbers").style.opacity = 0;
document.getElementById("SurvivalNumbers").style.opacity = 0;
document.getElementById("ViolenceNumbers").style.opacity = 0;
document.getElementById("VulnerabilityNumbers").style.opacity = 0;
document.getElementById("WarfareNumbers").style.opacity = 0;
console.log(document.getElementById("ClimateChange").value);

$(document).ready(function() {
	$('#playAudio').click(function(){
		$(this).finish();
		if($(this).css('opacity') == 0.5){
			$(this).animate({opacity: '0.85'}, 2000);
			$('#planktonMusic')[0].play();
			$('#planktonMusic').animate({volume: '0.85'}, 2000);
		};
		if($(this).css('opacity') == 0.85){
			$(this).animate({opacity: '0.5'}, 2000);
			$('#planktonMusic').animate({volume: '0'}, 2000);
			$('#planktonMusic').delay(2000);
		};
	})
});

$(document).ready(function() {
	$('#Instructions').click(function(){
		$(this).finish();
		$('#InstructionsText').finish();
    
       if($(this).css('opacity') == 0.5){
            $(this).animate({opacity: '0.85'}, 2000);
			$('#InstructionsText').animate({opacity: '0'}, 2000);
			$('#InstructionsText').hide(0);
			//console.log($(this).css('opacity'))
		};
	
		if($(this).css('opacity') == 0.85){
            $(this).animate({opacity: '0.5'}, 2000);
			$('#InstructionsText').show(0);
			$('#InstructionsText').animate({opacity: '0.75'}, 2000);
			//console.log($(this).css('opacity'));
		};
	});
});
function opacityTester(){
	var a = document.getElementById("ClimateChange").value;
	var b = document.getElementById("Conflict").value;
	var c = document.getElementById("Survival").value;
	var d = document.getElementById("Violence").value;
	var e = document.getElementById("Fragility").value;
	var f = document.getElementById("Instability").value;
	var g = document.getElementById("Vulnerability").value;
	var h = document.getElementById("Risk").value;
	var i = document.getElementById("Warfare").value;
	var opacityArray = [a, b, c, d, e, f, g, h, i];
	console.log(opacityArray);
	function testOpacity(test){
		return test == 'off';
	}
	var l = opacityArray.every(testOpacity);
	console.log(opacityArray.every(testOpacity));
	if (l === true){
		
	//$('#CountriesText').delay(5000);
	$('#CountriesText').animate({opacity: '0'}, 2000);
	$('#CountriesText').hide(0);
	//console.log('yes');
	}
}
document.getElementById("ClimateChange").addEventListener("click", function(){
		if(document.getElementById("ClimateChange").value === 'off')
		{
			document.getElementById("ClimateChange").style.cssText = 'color: rgb(0, 255, 0)';
			document.getElementById("ClimateChangeNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').show(0);
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Climate Change"</h2><br>'
				+ countries[0] + " " + ChinaTotals[8] + 
				'<br>' + countries[1] + " " + IndiaTotals[8] + 
				'<br>' + countries[2] + " " + IndonesiaTotals[8] + 
				'<br>' + countries[3] + " " + PakistanTotals[8] + 
				'<br>' + countries[4] + " " + BangladeshTotals[8] + 
				'<br>' + countries[5] + " " + RussiaTotals[8] +
				'<br>' + countries[6] + " " + JapanTotals[8] + 
				'<br>' + countries[7] + " " + PhilippinesTotals[8] + 
				'<br>' + countries[8] + " " + ThailandTotals[8] + 
				'<br>' + countries[9] + " " + MyanmarTotals[8] + 
				'<br>' + countries[10] + " " + SouthKoreaTotals[8] + 
				'<br>' + countries[11] + " " + MalaysiaTotals[8] + 
				'<br>' + countries[12] + " " + NepalTotals[8] + 
				'<br>' + countries[13] + " " + NorthKoreaTotals[8] + 
				'<br>' + countries[14] + " " + AustraliaTotals[8] + 
				'<br>' + countries[15] + " " + TaiwanTotals[8] + 
				'<br>' + countries[16] + " " + SriLankaTotals[8] + 
				'<br>' + countries[17] + " " + CambodiaTotals[8] + 
				'<br>' + countries[18] + " " + PapuaNewGuineaTotals[8] + 
				'<br>' + countries[19] + " " + LaosTotals[8] + 
				'<br>' + countries[20] + " " + SingaporeTotals[8] + 
				'<br>' + countries[21] + " " + NewZealandTotals[8] + 
				'<br>' + countries[22] + " " + FijiTotals[8] + 
				'<br>' + countries[23] + " " + BhutanTotals[8] + 
				'<br>' + countries[24] + " " + SamoaTotals[8] + 
				'<br>' + countries[25] + " " + CookIslandsTotals[8] + 
				'<br>' + countries[26] + " " + AfghanistanTotals[8] + 
				'<br>' + countries[27] + " " + VanuatuTotals[8]);
			});
			document.getElementById("ClimateChange").value = 'on';
		}
		else if(document.getElementById("ClimateChange").value === 'on')
		{
			document.getElementById("ClimateChange").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("ClimateChangeNumbers").style.opacity = 0;
			document.getElementById("ClimateChange").value = 'off';
			
			opacityTester();
		}
});

document.getElementById("Conflict").addEventListener("click", function(){
		if(document.getElementById("Conflict").value === 'off')
		{
			document.getElementById("Conflict").style.cssText = 'color: rgb(255, 0, 0)';
			document.getElementById("ConflictNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').show(0);
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Conflict"</h2><br>'
				+ countries[0] + " " + ChinaTotals[0] + 
				'<br>' + countries[1] + " " + IndiaTotals[0] + 
				'<br>' + countries[2] + " " + IndonesiaTotals[0] + 
				'<br>' + countries[3] + " " + PakistanTotals[0] + 
				'<br>' + countries[4] + " " + BangladeshTotals[0] + 
				'<br>' + countries[5] + " " + RussiaTotals[0] +
				'<br>' + countries[6] + " " + JapanTotals[0] + 
				'<br>' + countries[7] + " " + PhilippinesTotals[0] + 
				'<br>' + countries[8] + " " + ThailandTotals[0] + 
				'<br>' + countries[9] + " " + MyanmarTotals[0] + 
				'<br>' + countries[10] + " " + SouthKoreaTotals[0] + 
				'<br>' + countries[11] + " " + MalaysiaTotals[0] + 
				'<br>' + countries[12] + " " + NepalTotals[0] + 
				'<br>' + countries[13] + " " + NorthKoreaTotals[0] + 
				'<br>' + countries[14] + " " + AustraliaTotals[0] + 
				'<br>' + countries[15] + " " + TaiwanTotals[0] + 
				'<br>' + countries[16] + " " + SriLankaTotals[0] + 
				'<br>' + countries[17] + " " + CambodiaTotals[0] + 
				'<br>' + countries[18] + " " + PapuaNewGuineaTotals[0] + 
				'<br>' + countries[19] + " " + LaosTotals[0] + 
				'<br>' + countries[20] + " " + SingaporeTotals[0] + 
				'<br>' + countries[21] + " " + NewZealandTotals[0] + 
				'<br>' + countries[22] + " " + FijiTotals[0] + 
				'<br>' + countries[23] + " " + BhutanTotals[0] + 
				'<br>' + countries[24] + " " + SamoaTotals[0] + 
				'<br>' + countries[25] + " " + CookIslandsTotals[0] + 
				'<br>' + countries[26] + " " + AfghanistanTotals[0] + 
				'<br>' + countries[27] + " " + VanuatuTotals[0]);
			});
			document.getElementById("Conflict").value = 'on';
		}
		else if(document.getElementById("Conflict").value === 'on')
		{
			document.getElementById("Conflict").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("ConflictNumbers").style.opacity = 0;
			document.getElementById("Conflict").value = 'off';
			
			opacityTester();
		}
});

document.getElementById("Fragility").addEventListener("click", function(){
		if(document.getElementById("Fragility").value === 'off')
		{
			document.getElementById("Fragility").style.cssText = 'color: rgb(150, 100, 255)';
			document.getElementById("FragilityNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').show(0);
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Fragility"</h2><br>'
				+ countries[0] + " " + ChinaTotals[4] + 
				'<br>' + countries[1] + " " + IndiaTotals[4] + 
				'<br>' + countries[2] + " " + IndonesiaTotals[4] + 
				'<br>' + countries[3] + " " + PakistanTotals[4] + 
				'<br>' + countries[4] + " " + BangladeshTotals[4] + 
				'<br>' + countries[5] + " " + RussiaTotals[4] +
				'<br>' + countries[6] + " " + JapanTotals[4] + 
				'<br>' + countries[7] + " " + PhilippinesTotals[4] + 
				'<br>' + countries[8] + " " + ThailandTotals[4] + 
				'<br>' + countries[9] + " " + MyanmarTotals[4] + 
				'<br>' + countries[10] + " " + SouthKoreaTotals[4] + 
				'<br>' + countries[11] + " " + MalaysiaTotals[4] + 
				'<br>' + countries[12] + " " + NepalTotals[4] + 
				'<br>' + countries[13] + " " + NorthKoreaTotals[4] + 
				'<br>' + countries[14] + " " + AustraliaTotals[4] + 
				'<br>' + countries[15] + " " + TaiwanTotals[4] + 
				'<br>' + countries[16] + " " + SriLankaTotals[4] + 
				'<br>' + countries[17] + " " + CambodiaTotals[4] + 
				'<br>' + countries[18] + " " + PapuaNewGuineaTotals[4] + 
				'<br>' + countries[19] + " " + LaosTotals[4] + 
				'<br>' + countries[20] + " " + SingaporeTotals[4] + 
				'<br>' + countries[21] + " " + NewZealandTotals[4] + 
				'<br>' + countries[22] + " " + FijiTotals[4] + 
				'<br>' + countries[23] + " " + BhutanTotals[4] + 
				'<br>' + countries[24] + " " + SamoaTotals[4] + 
				'<br>' + countries[25] + " " + CookIslandsTotals[4] + 
				'<br>' + countries[26] + " " + AfghanistanTotals[4] + 
				'<br>' + countries[27] + " " + VanuatuTotals[4]);
			});
			document.getElementById("Fragility").value = 'on';
		}
		else if(document.getElementById("Fragility").value === 'on')
		{
			document.getElementById("Fragility").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("FragilityNumbers").style.opacity = 0;
			document.getElementById("Fragility").value = 'off';
			
			opacityTester();
		}
});

document.getElementById("Instability").addEventListener("click", function(){
		if(document.getElementById("Instability").value === 'off')
		{
			document.getElementById("Instability").style.cssText = 'color: rgb(255, 200, 0)';
			document.getElementById("InstabilityNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').show(0);
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Instability"</h2><br>'
				+ countries[0] + " " + ChinaTotals[3] + 
				'<br>' + countries[1] + " " + IndiaTotals[3] + 
				'<br>' + countries[2] + " " + IndonesiaTotals[3] + 
				'<br>' + countries[3] + " " + PakistanTotals[3] + 
				'<br>' + countries[4] + " " + BangladeshTotals[3] + 
				'<br>' + countries[5] + " " + RussiaTotals[3] +
				'<br>' + countries[6] + " " + JapanTotals[3] + 
				'<br>' + countries[7] + " " + PhilippinesTotals[3] + 
				'<br>' + countries[8] + " " + ThailandTotals[3] + 
				'<br>' + countries[9] + " " + MyanmarTotals[3] + 
				'<br>' + countries[10] + " " + SouthKoreaTotals[3] + 
				'<br>' + countries[11] + " " + MalaysiaTotals[3] + 
				'<br>' + countries[12] + " " + NepalTotals[3] + 
				'<br>' + countries[13] + " " + NorthKoreaTotals[3] + 
				'<br>' + countries[14] + " " + AustraliaTotals[3] + 
				'<br>' + countries[15] + " " + TaiwanTotals[3] + 
				'<br>' + countries[16] + " " + SriLankaTotals[3] + 
				'<br>' + countries[17] + " " + CambodiaTotals[3] + 
				'<br>' + countries[18] + " " + PapuaNewGuineaTotals[3] + 
				'<br>' + countries[19] + " " + LaosTotals[3] + 
				'<br>' + countries[20] + " " + SingaporeTotals[3] + 
				'<br>' + countries[21] + " " + NewZealandTotals[3] + 
				'<br>' + countries[22] + " " + FijiTotals[3] + 
				'<br>' + countries[23] + " " + BhutanTotals[3] + 
				'<br>' + countries[24] + " " + SamoaTotals[3] + 
				'<br>' + countries[25] + " " + CookIslandsTotals[3] + 
				'<br>' + countries[26] + " " + AfghanistanTotals[3] + 
				'<br>' + countries[27] + " " + VanuatuTotals[3]);
			});
			document.getElementById("Instability").value = 'on';
		}
		else if(document.getElementById("Instability").value === 'on')
		{
			document.getElementById("Instability").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("InstabilityNumbers").style.opacity = 0;
			document.getElementById("Instability").value = 'off';
			
			opacityTester();
		}
});

document.getElementById("Risk").addEventListener("click", function(){
		if(document.getElementById("Risk").value === 'off')
		{
			document.getElementById("Risk").style.cssText = 'color: rgb(255, 0, 255)';
			document.getElementById("RiskNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').show(0);
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Risk"</h2><br>'
				+ countries[0] + " " + ChinaTotals[5] + 
				'<br>' + countries[1] + " " + IndiaTotals[5] + 
				'<br>' + countries[2] + " " + IndonesiaTotals[5] + 
				'<br>' + countries[3] + " " + PakistanTotals[5] + 
				'<br>' + countries[4] + " " + BangladeshTotals[5] + 
				'<br>' + countries[5] + " " + RussiaTotals[5] +
				'<br>' + countries[6] + " " + JapanTotals[5] + 
				'<br>' + countries[7] + " " + PhilippinesTotals[5] + 
				'<br>' + countries[8] + " " + ThailandTotals[5] + 
				'<br>' + countries[9] + " " + MyanmarTotals[5] + 
				'<br>' + countries[10] + " " + SouthKoreaTotals[5] + 
				'<br>' + countries[11] + " " + MalaysiaTotals[5] + 
				'<br>' + countries[12] + " " + NepalTotals[5] + 
				'<br>' + countries[13] + " " + NorthKoreaTotals[5] + 
				'<br>' + countries[14] + " " + AustraliaTotals[5] + 
				'<br>' + countries[15] + " " + TaiwanTotals[5] + 
				'<br>' + countries[16] + " " + SriLankaTotals[5] + 
				'<br>' + countries[17] + " " + CambodiaTotals[5] + 
				'<br>' + countries[18] + " " + PapuaNewGuineaTotals[5] + 
				'<br>' + countries[19] + " " + LaosTotals[5] + 
				'<br>' + countries[20] + " " + SingaporeTotals[5] + 
				'<br>' + countries[21] + " " + NewZealandTotals[5] + 
				'<br>' + countries[22] + " " + FijiTotals[5] + 
				'<br>' + countries[23] + " " + BhutanTotals[5] + 
				'<br>' + countries[24] + " " + SamoaTotals[5] + 
				'<br>' + countries[25] + " " + CookIslandsTotals[5] + 
				'<br>' + countries[26] + " " + AfghanistanTotals[5] + 
				'<br>' + countries[27] + " " + VanuatuTotals[5]);
			});
			document.getElementById("Risk").value = 'on';
		}
		else if(document.getElementById("Risk").value === 'on')
		{
			document.getElementById("Risk").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("RiskNumbers").style.opacity = 0;
			document.getElementById("Risk").value = 'off';
			
			opacityTester();
		}
});

document.getElementById("Survival").addEventListener("click", function(){
		if(document.getElementById("Survival").value === 'off')
		{
			document.getElementById("Survival").style.cssText = 'color: rgb(0, 150, 255)';
			document.getElementById("SurvivalNumbers").style.opacity = 1;
			document.getElementById("Survival").value = 'on';
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').show(0);
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Survival"</h2><br>'
				+ countries[0] + " " + ChinaTotals[6] + 
				'<br>' + countries[1] + " " + IndiaTotals[6] + 
				'<br>' + countries[2] + " " + IndonesiaTotals[6] + 
				'<br>' + countries[3] + " " + PakistanTotals[6] + 
				'<br>' + countries[4] + " " + BangladeshTotals[6] + 
				'<br>' + countries[5] + " " + RussiaTotals[6] +
				'<br>' + countries[6] + " " + JapanTotals[6] + 
				'<br>' + countries[7] + " " + PhilippinesTotals[6] + 
				'<br>' + countries[8] + " " + ThailandTotals[6] + 
				'<br>' + countries[9] + " " + MyanmarTotals[6] + 
				'<br>' + countries[10] + " " + SouthKoreaTotals[6] + 
				'<br>' + countries[11] + " " + MalaysiaTotals[6] + 
				'<br>' + countries[12] + " " + NepalTotals[6] + 
				'<br>' + countries[13] + " " + NorthKoreaTotals[6] + 
				'<br>' + countries[14] + " " + AustraliaTotals[6] + 
				'<br>' + countries[15] + " " + TaiwanTotals[6] + 
				'<br>' + countries[16] + " " + SriLankaTotals[6] + 
				'<br>' + countries[17] + " " + CambodiaTotals[6] + 
				'<br>' + countries[18] + " " + PapuaNewGuineaTotals[6] + 
				'<br>' + countries[19] + " " + LaosTotals[6] + 
				'<br>' + countries[20] + " " + SingaporeTotals[6] + 
				'<br>' + countries[21] + " " + NewZealandTotals[6] + 
				'<br>' + countries[22] + " " + FijiTotals[6] + 
				'<br>' + countries[23] + " " + BhutanTotals[6] + 
				'<br>' + countries[24] + " " + SamoaTotals[6] + 
				'<br>' + countries[25] + " " + CookIslandsTotals[6] + 
				'<br>' + countries[26] + " " + AfghanistanTotals[6] + 
				'<br>' + countries[27] + " " + VanuatuTotals[6]);
			});
		}
		else if(document.getElementById("Survival").value === 'on')
		{
			document.getElementById("Survival").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("SurvivalNumbers").style.opacity = 0;
			document.getElementById("Survival").value = 'off';
			
			opacityTester();
		}
});

document.getElementById("Violence").addEventListener("click", function(){
		if(document.getElementById("Violence").value === 'off')
		{
			document.getElementById("Violence").style.cssText = 'color: rgb(255, 100, 0)';
			document.getElementById("ViolenceNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').show(0);
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Violence"</h2><br>'
				+ countries[0] + " " + ChinaTotals[2] + 
				'<br>' + countries[1] + " " + IndiaTotals[2] + 
				'<br>' + countries[2] + " " + IndonesiaTotals[2] + 
				'<br>' + countries[3] + " " + PakistanTotals[2] + 
				'<br>' + countries[4] + " " + BangladeshTotals[2] + 
				'<br>' + countries[5] + " " + RussiaTotals[2] +
				'<br>' + countries[6] + " " + JapanTotals[2] + 
				'<br>' + countries[7] + " " + PhilippinesTotals[2] + 
				'<br>' + countries[8] + " " + ThailandTotals[2] + 
				'<br>' + countries[9] + " " + MyanmarTotals[2] + 
				'<br>' + countries[10] + " " + SouthKoreaTotals[2] + 
				'<br>' + countries[11] + " " + MalaysiaTotals[2] + 
				'<br>' + countries[12] + " " + NepalTotals[2] + 
				'<br>' + countries[13] + " " + NorthKoreaTotals[2] + 
				'<br>' + countries[14] + " " + AustraliaTotals[2] + 
				'<br>' + countries[15] + " " + TaiwanTotals[2] + 
				'<br>' + countries[16] + " " + SriLankaTotals[2] + 
				'<br>' + countries[17] + " " + CambodiaTotals[2] + 
				'<br>' + countries[18] + " " + PapuaNewGuineaTotals[2] + 
				'<br>' + countries[19] + " " + LaosTotals[2] + 
				'<br>' + countries[20] + " " + SingaporeTotals[2] + 
				'<br>' + countries[21] + " " + NewZealandTotals[2] + 
				'<br>' + countries[22] + " " + FijiTotals[2] + 
				'<br>' + countries[23] + " " + BhutanTotals[2] + 
				'<br>' + countries[24] + " " + SamoaTotals[2] + 
				'<br>' + countries[25] + " " + CookIslandsTotals[2] + 
				'<br>' + countries[26] + " " + AfghanistanTotals[2] + 
				'<br>' + countries[27] + " " + VanuatuTotals[2]);
			});
			document.getElementById("Violence").value = 'on';
		}
		else if(document.getElementById("Violence").value === 'on')
		{
			document.getElementById("Violence").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("ViolenceNumbers").style.opacity = 0;
			document.getElementById("Violence").value = 'off';
			
			opacityTester();
		}
});

document.getElementById("Vulnerability").addEventListener("click", function(){
		if(document.getElementById("Vulnerability").value === 'off')
		{
			document.getElementById("Vulnerability").style.cssText = 'color: rgb(255, 100, 100)';
			document.getElementById("VulnerabilityNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').show(0);
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Vulnerability"</h2><br>'
				+ countries[0] + " " + ChinaTotals[7] + 
				'<br>' + countries[1] + " " + IndiaTotals[7] + 
				'<br>' + countries[2] + " " + IndonesiaTotals[7] + 
				'<br>' + countries[3] + " " + PakistanTotals[7] + 
				'<br>' + countries[4] + " " + BangladeshTotals[7] + 
				'<br>' + countries[5] + " " + RussiaTotals[7] +
				'<br>' + countries[6] + " " + JapanTotals[7] + 
				'<br>' + countries[7] + " " + PhilippinesTotals[7] + 
				'<br>' + countries[8] + " " + ThailandTotals[7] + 
				'<br>' + countries[9] + " " + MyanmarTotals[7] + 
				'<br>' + countries[10] + " " + SouthKoreaTotals[7] + 
				'<br>' + countries[11] + " " + MalaysiaTotals[7] + 
				'<br>' + countries[12] + " " + NepalTotals[7] + 
				'<br>' + countries[13] + " " + NorthKoreaTotals[7] + 
				'<br>' + countries[14] + " " + AustraliaTotals[7] + 
				'<br>' + countries[15] + " " + TaiwanTotals[7] + 
				'<br>' + countries[16] + " " + SriLankaTotals[7] + 
				'<br>' + countries[17] + " " + CambodiaTotals[7] + 
				'<br>' + countries[18] + " " + PapuaNewGuineaTotals[7] + 
				'<br>' + countries[19] + " " + LaosTotals[7] + 
				'<br>' + countries[20] + " " + SingaporeTotals[7] + 
				'<br>' + countries[21] + " " + NewZealandTotals[7] + 
				'<br>' + countries[22] + " " + FijiTotals[7] + 
				'<br>' + countries[23] + " " + BhutanTotals[7] + 
				'<br>' + countries[24] + " " + SamoaTotals[7] + 
				'<br>' + countries[25] + " " + CookIslandsTotals[7] + 
				'<br>' + countries[26] + " " + AfghanistanTotals[7] + 
				'<br>' + countries[27] + " " + VanuatuTotals[7]);
			});
			document.getElementById("Vulnerability").value = 'on';
		}
		else if(document.getElementById("Vulnerability").value === 'on')
		{
			document.getElementById("Vulnerability").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("VulnerabilityNumbers").style.opacity = 0;
			document.getElementById("Vulnerability").value = 'off';
			
			opacityTester();
		}
});

document.getElementById("Warfare").addEventListener("click", function(){
		if(document.getElementById("Warfare").value === 'off')
		{
			document.getElementById("Warfare").style.cssText = 'color: rgb(50, 0, 255)';
			document.getElementById("WarfareNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').show(0);
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Warfare"</h2><br>'
				+ countries[0] + " " + ChinaTotals[1] + 
				'<br>' + countries[1] + " " + IndiaTotals[1] + 
				'<br>' + countries[2] + " " + IndonesiaTotals[1] + 
				'<br>' + countries[3] + " " + PakistanTotals[1] + 
				'<br>' + countries[4] + " " + BangladeshTotals[1] + 
				'<br>' + countries[5] + " " + RussiaTotals[1] +
				'<br>' + countries[6] + " " + JapanTotals[1] + 
				'<br>' + countries[7] + " " + PhilippinesTotals[1] + 
				'<br>' + countries[8] + " " + ThailandTotals[1] + 
				'<br>' + countries[9] + " " + MyanmarTotals[1] + 
				'<br>' + countries[10] + " " + SouthKoreaTotals[1] + 
				'<br>' + countries[11] + " " + MalaysiaTotals[1] + 
				'<br>' + countries[12] + " " + NepalTotals[1] + 
				'<br>' + countries[13] + " " + NorthKoreaTotals[1] + 
				'<br>' + countries[14] + " " + AustraliaTotals[1] + 
				'<br>' + countries[15] + " " + TaiwanTotals[1] + 
				'<br>' + countries[16] + " " + SriLankaTotals[1] + 
				'<br>' + countries[17] + " " + CambodiaTotals[1] + 
				'<br>' + countries[18] + " " + PapuaNewGuineaTotals[1] + 
				'<br>' + countries[19] + " " + LaosTotals[1] + 
				'<br>' + countries[20] + " " + SingaporeTotals[1] + 
				'<br>' + countries[21] + " " + NewZealandTotals[1] + 
				'<br>' + countries[22] + " " + FijiTotals[1] + 
				'<br>' + countries[23] + " " + BhutanTotals[1] + 
				'<br>' + countries[24] + " " + SamoaTotals[1] + 
				'<br>' + countries[25] + " " + CookIslandsTotals[1] + 
				'<br>' + countries[26] + " " + AfghanistanTotals[1] + 
				'<br>' + countries[27] + " " + VanuatuTotals[1]);
			});
			document.getElementById("Warfare").value = 'on';
		}
		else if(document.getElementById("Warfare").value === 'on')
		{
			document.getElementById("Warfare").style.cssText = 'color: rgb:(255, 255, 255)';
			document.getElementById("WarfareNumbers").style.opacity = 0;
			document.getElementById("Warfare").value = 'off';
			
			opacityTester();
		}
});



		

function init() {
	var scene = new THREE.Scene();
	var clock = new THREE.Clock();
	
	// camera
	var camera = new THREE.PerspectiveCamera(
		45, // field of view
		width / height, // aspect ratio
		1, // near clipping plane
		1000 // far clipping plane
	);
	camera.position.z = 30;
	camera.position.x = 0;
	camera.position.y = 0;
	camera.lookAt(new THREE.Vector3(0, 0, 0));
	
	

//particle creators
	var ParticlesMultiplier = 10;
	var cChangeSystem = new particleGenerator(TopicTotal[0]/ParticlesMultiplier, 7, 'rgb(0, 150, 0)');
	var conflictSystem = new particleGenerator(TopicTotal[1]/ParticlesMultiplier, 7, 'rgb(255, 0, 0)');
	var fragilitySystem = new particleGenerator(TopicTotal[2]/ParticlesMultiplier, 7, 'rgb(150, 100, 255)');
	var instabilitySystem = new particleGenerator(TopicTotal[3]/ParticlesMultiplier, 7, 'rgb(255, 200, 0)');
	var riskSystem = new particleGenerator(TopicTotal[4]/ParticlesMultiplier, 7, 'rgb(255, 0, 120)');
	var survivalSystem = new particleGenerator(TopicTotal[5]/ParticlesMultiplier, 7, 'rgb(0, 150, 255)');
	var violenceSystem = new particleGenerator(TopicTotal[6]/ParticlesMultiplier, 7, 'rgb(255, 100, 0)');
	var vulnerabilitySystem = new particleGenerator(TopicTotal[7]/ParticlesMultiplier, 7, 'rgb(255, 100, 100)');
	var warfareSystem = new particleGenerator(TopicTotal[8]/ParticlesMultiplier, 7, 'rgb(50, 0, 255)');
		
	cChangeSystem.name = 'cChangeSystem';
	conflictSystem.name = 'conflictSystem';
	fragilitySystem.name = 'fragilitySystem';
	instabilitySystem.name = 'instabilitySystem';
	riskSystem.name = 'riskSystem';
	survivalSystem.name = 'survivalSystem';
	violenceSystem.name = 'violenceSystem';
	vulnerabilitySystem.name = 'vulnerabilitySystem';
	warfareSystem.name = 'warfareSystem';
	
	cChangeSystem.visible = true;
	conflictSystem.visible = false;
	fragilitySystem.visible = false;
	instabilitySystem.visible = false;
	riskSystem.visible = false;
	violenceSystem.visible = false;
	survivalSystem.visible = false;
	vulnerabilitySystem.visible = false;
	warfareSystem.visible = false;
	
	scene.add(cChangeSystem);
	scene.add(conflictSystem);
	scene.add(fragilitySystem);
	scene.add(instabilitySystem);
	scene.add(riskSystem);
	scene.add(survivalSystem);
	scene.add(violenceSystem);
	scene.add(vulnerabilitySystem);
	scene.add(warfareSystem);
	//console.log(document.getElementById("ClimateChange").value);
	document.getElementById("ClimateChange").addEventListener("click", function(){
		cChangeSystem.visible = !cChangeSystem.visible;		
	}
	);
	document.getElementById("Conflict").addEventListener("click", function(){
		conflictSystem.visible = !conflictSystem.visible;
		
	}
	);
	document.getElementById("Fragility").addEventListener("click", function(){
		fragilitySystem.visible = !fragilitySystem.visible;
	}
	);
	document.getElementById("Instability").addEventListener("click", function(){
		instabilitySystem.visible = !instabilitySystem.visible;
	}
	);
	document.getElementById("Risk").addEventListener("click", function(){
		riskSystem.visible = !riskSystem.visible;
	}
	);
	document.getElementById("Violence").addEventListener("click", function(){
		violenceSystem.visible = !violenceSystem.visible;
	}
	);
	document.getElementById("Survival").addEventListener("click", function(){
		survivalSystem.visible = !survivalSystem.visible;
	}
	);
	document.getElementById("Vulnerability").addEventListener("click", function(){
		vulnerabilitySystem.visible = !vulnerabilitySystem.visible;
	}
	);
	document.getElementById("Warfare").addEventListener("click", function(){
		warfareSystem.visible = !warfareSystem.visible;
	}
	);

	// renderer
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	renderer.shadowMap.enabled = true;
	renderer.setClearColor('rgb(0, 0, 0)');

	var controls = new THREE.OrbitControls( camera, renderer.domElement );

	document.getElementById('webgl').appendChild(renderer.domElement);

	update(renderer, scene, camera, controls, clock);

	return scene;
}


//particle generator function
function particleGenerator(count, radius, color){
	var particleGeo = new THREE.Geometry;
	var particleCount = count;
	var r = radius;
	var a;
	var b;
	for (var i = 0; i < particleCount; i++) {
		a = Math.random()*360;
		b = Math.random()*360;
		
		var posX = r * Math.sin(a*Math.PI/180) * Math.cos(b*Math.PI/180);
		var posY = r * Math.sin(a*Math.PI/180) * Math.sin(b*Math.PI/180);
		var posZ = r * Math.cos(a*Math.PI/180);
		var particle = new THREE.Vector3(posX, posY, posZ);
		
		particleGeo.vertices.push(particle);
	}
	
	var particleMat = new THREE.PointsMaterial({
		color: color,
		size: 0.1,
		map: new THREE.TextureLoader().load('assets/textures/particle.jpg'),
		transparent: true,
		blending: THREE.AdditiveBlending,
		depthWrite: false,
	});
	
	
	var particleSystem = new THREE.Points(
		particleGeo,
		particleMat
	);
	
	return particleSystem;
	
}

//movement
function particleMover(x, y, z, time) {
	var bounds = 10;
	x += (noise.simplex3(x, y, time/Math.PI))/200;
	y += (noise.simplex3(x, time/Math.PI, z))/200;
	z += (noise.simplex3(time/Math.PI, y, z))/200;
	
	if(x > bounds) {
		x = bounds;
	}
	if(x < -bounds) {
		x = -bounds;
	}
	
	if(y > bounds) {
		y = bounds;
	}
	if(y < -bounds) {
		y = -bounds;
	}
	if(z > bounds) {
		z = bounds;
	}
	if(z < -bounds) {
		z = -bounds;
	}
	
	var particles = [x, y, z];
	return particles;
}

//update
function update(renderer, scene, camera, controls, clock) {
	controls.update();
	renderer.render(scene, camera);
	
	var time = clock.getElapsedTime();
	
	var cChangeSystem = scene.getObjectByName('cChangeSystem');
	var conflictSystem = scene.getObjectByName('conflictSystem');
	var fragilitySystem = scene.getObjectByName('fragilitySystem');
	var instabilitySystem = scene.getObjectByName('instabilitySystem');
	var riskSystem = scene.getObjectByName('riskSystem');
	var survivalSystem = scene.getObjectByName('survivalSystem');
	var violenceSystem = scene.getObjectByName('violenceSystem');
	var vulnerabilitySystem = scene.getObjectByName('vulnerabilitySystem');
	var warfareSystem = scene.getObjectByName('warfareSystem');
	
	cChangeSystem.geometry.vertices.forEach(function(particle) {
		
		var ccMover = new particleMover(particle.x, particle.y, particle.z, time);
		
		particle.x = ccMover[0];
		particle.y = ccMover[1];
		particle.z = ccMover[2];
		
		
	})
	conflictSystem.geometry.vertices.forEach(function(particle) {
		
		var ccMover = new particleMover(particle.x, particle.y, particle.z, time);
		
		particle.x = ccMover[0];
		particle.y = ccMover[1];
		particle.z = ccMover[2];
		
		
	})
	fragilitySystem.geometry.vertices.forEach(function(particle) {
		
		var ccMover = new particleMover(particle.x, particle.y, particle.z, time);
		
		particle.x = ccMover[0];
		particle.y = ccMover[1];
		particle.z = ccMover[2];
		
		
	})
	instabilitySystem.geometry.vertices.forEach(function(particle) {
		
		var ccMover = new particleMover(particle.x, particle.y, particle.z, time);
		
		particle.x = ccMover[0];
		particle.y = ccMover[1];
		particle.z = ccMover[2];
		
		
	})
	riskSystem.geometry.vertices.forEach(function(particle) {
		
		var ccMover = new particleMover(particle.x, particle.y, particle.z, time);
		
		particle.x = ccMover[0];
		particle.y = ccMover[1];
		particle.z = ccMover[2];
		
		
	})
	survivalSystem.geometry.vertices.forEach(function(particle) {
		
		var ccMover = new particleMover(particle.x, particle.y, particle.z, time);
		
		particle.x = ccMover[0];
		particle.y = ccMover[1];
		particle.z = ccMover[2];
		
		
	})
	violenceSystem.geometry.vertices.forEach(function(particle) {
		
		var ccMover = new particleMover(particle.x, particle.y, particle.z, time);
		
		particle.x = ccMover[0];
		particle.y = ccMover[1];
		particle.z = ccMover[2];
		
		
	})
	vulnerabilitySystem.geometry.vertices.forEach(function(particle) {
		
		var ccMover = new particleMover(particle.x, particle.y, particle.z, time);
		
		particle.x = ccMover[0];
		particle.y = ccMover[1];
		particle.z = ccMover[2];
		
		
	})
	warfareSystem.geometry.vertices.forEach(function(particle) {
		
		var ccMover = new particleMover(particle.x, particle.y, particle.z, time);
		
		particle.x = ccMover[0];
		particle.y = ccMover[1];
		particle.z = ccMover[2];
		
		
	})
	
	
	cChangeSystem.geometry.verticesNeedUpdate = true;
	conflictSystem.geometry.verticesNeedUpdate = true;
	fragilitySystem.geometry.verticesNeedUpdate = true;
	instabilitySystem.geometry.verticesNeedUpdate = true;
	riskSystem.geometry.verticesNeedUpdate = true;
	survivalSystem.geometry.verticesNeedUpdate = true;
	violenceSystem.geometry.verticesNeedUpdate = true;
	vulnerabilitySystem.geometry.verticesNeedUpdate = true;
	warfareSystem.geometry.verticesNeedUpdate = true;
	
	window.addEventListener( 'resize', onWindowResize, false );
	
	requestAnimationFrame(function() {
		update(renderer, scene, camera, controls, clock);
});


function onWindowResize(){
		//change window size here as well
		// width = window.innerWidth;
		// height = window.innerHeight;
		width = document.documentElement.clientWidth;
		height = document.documentElement.clientHeight;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();

		renderer.setSize( width, height);

	}
	
	

}

var scene = init();
	
