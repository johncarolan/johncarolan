
//set window size for object. change here and at bottom of page
// var width = window.innerWidth;
// var height = window.innerHeight;
var width = window.innerWidth;
var height = window.innerHeight;
document.getElementById("ConflictNumbers").style.opacity = 0;
document.getElementById("FragilityNumbers").style.opacity = 0;
document.getElementById("InstabilityNumbers").style.opacity = 0;
document.getElementById("RiskNumbers").style.opacity = 0;
document.getElementById("SurvivalNumbers").style.opacity = 0;
document.getElementById("ViolenceNumbers").style.opacity = 0;
document.getElementById("VulnerabilityNumbers").style.opacity = 0;
document.getElementById("WarfareNumbers").style.opacity = 0;
//console.log(document.getElementById("ClimateChange").value);
document.getElementById("ClimateChange").addEventListener("click", function(){
		if(document.getElementById("ClimateChange").value === 'off')
		{
			document.getElementById("ClimateChange").style.cssText = 'color: rgb(0, 255, 0)';
			document.getElementById("ClimateChangeNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Climate Change"</h2><br>China	10188<br>India	307902<br>Indonesia	2879<br>Pakistan	31886<br>Bangladesh	6270<br>Russia	1567<br>Japan	9561<br>Philippines	41105<br>Thailand	3471<br>Myanmar	1705<br>South Korea	2534<br>Malaysia	20722<br>Nepal	2809<br>North Korea	622<br>Australia	233627<br>Taiwan	5263<br>Sri Lanka	4647<br>Cambodia	1645<br>Papua New Guinea	331<br>Laos	189<br>Singapore	8345<br>New Zealand	141879<br>Fiji	3702<br>Bhutan	687<br>Samoa	503<br>Tonga	113<br>Cook Islands	298<br>Afghanistan	4151<br>Vanuatu	484<br>Solomon Islands	241');
			});
			document.getElementById("ClimateChange").value = 'on';
		}
		else if(document.getElementById("ClimateChange").value === 'on')
		{
			document.getElementById("ClimateChange").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("ClimateChangeNumbers").style.opacity = 0;
			document.getElementById("ClimateChange").value = 'off';
		}
});

document.getElementById("Conflict").addEventListener("click", function(){
		if(document.getElementById("Conflict").value === 'off')
		{
			document.getElementById("Conflict").style.cssText = 'color: rgb(255, 0, 0)';
			document.getElementById("ConflictNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Conflict"</h2><br>China	678<br>India	10241<br>Indonesia	134<br>Pakistan	1820<br>Bangladesh	296<br>Russia	299<br>Japan	518<br>Philippines	1725<br>Thailand	169<br>Myanmar	354<br>South Korea	164<br>Malaysia	636<br>Nepal	203<br>North Korea	90<br>Australia	5989<br>Taiwan	226<br>Sri Lanka	716<br>Cambodia	79<br>Papua New Guinea	5<br>Laos	12<br>Singapore	271<br>New Zealand	2783<br>Fiji	51<br>Bhutan	31<br>Samoa	7<br>Tonga	2<br>Cook Islands	47<br>Afghanistan	818<br>Vanuatu	18<br>Solomon Islands	12');
			});
			document.getElementById("Conflict").value = 'on';
		}
		else if(document.getElementById("Conflict").value === 'on')
		{
			document.getElementById("Conflict").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("ConflictNumbers").style.opacity = 0;
			document.getElementById("Conflict").value = 'off';
		}
});

document.getElementById("Fragility").addEventListener("click", function(){
		if(document.getElementById("Fragility").value === 'off')
		{
			document.getElementById("Fragility").style.cssText = 'color: rgb(150, 100, 255)';
			document.getElementById("FragilityNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Fragility"</h2><br>China	98<br>India	338<br>Indonesia	4<br>Pakistan	33<br>Bangladesh	12<br>Russia	4<br>Japan	13<br>Philippines	43<br>Thailand	6<br>Myanmar	3<br>South Korea	0<br>Malaysia	23<br>Nepal	9<br>North Korea	0<br>Australia	327<br>Taiwan	2<br>Sri Lanka	8<br>Cambodia	5<br>Papua New Guinea	0<br>Laos	0<br>Singapore	8<br>New Zealand	144<br>Fiji	4<br>Bhutan	0<br>Samoa	1<br>Tonga	0<br>Cook Islands	1<br>Afghanistan	9<br>Vanuatu	1<br>Solomon Islands	1');
			});
			document.getElementById("Fragility").value = 'on';
		}
		else if(document.getElementById("Fragility").value === 'on')
		{
			document.getElementById("Fragility").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("FragilityNumbers").style.opacity = 0;
			document.getElementById("Fragility").value = 'off';
		}
});

document.getElementById("Instability").addEventListener("click", function(){
		if(document.getElementById("Instability").value === 'off')
		{
			document.getElementById("Instability").style.cssText = 'color: rgb(255, 200, 0)';
			document.getElementById("InstabilityNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Instability"</h2><br>China	138<br>India	1783<br>Indonesia	25<br>Pakistan	533<br>Bangladesh	69<br>Russia	33<br>Japan	102<br>Philippines	189<br>Thailand	47<br>Myanmar	43<br>South Korea	44<br>Malaysia	196<br>Nepal	102<br>North Korea	29<br>Australia	1943<br>Taiwan	40<br>Sri Lanka	120<br>Cambodia	34<br>Papua New Guinea	2<br>Laos	2<br>Singapore	49<br>New Zealand	579<br>Fiji	11<br>Bhutan	2<br>Samoa	4<br>Tonga	0<br>Cook Islands	0<br>Afghanistan	138<br>Vanuatu	7<br>Solomon Islands	7');
			});
			document.getElementById("Instability").value = 'on';
		}
		else if(document.getElementById("Instability").value === 'on')
		{
			document.getElementById("Instability").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("InstabilityNumbers").style.opacity = 0;
			document.getElementById("Instability").value = 'off';
		}
});

document.getElementById("Risk").addEventListener("click", function(){
		if(document.getElementById("Risk").value === 'off')
		{
			document.getElementById("Risk").style.cssText = 'color: rgb(255, 0, 255)';
			document.getElementById("RiskNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Risk"</h2><br>China	1076<br>India	25168<br>Indonesia	317<br>Pakistan	1678<br>Bangladesh	671<br>Russia	177<br>Japan	1093<br>Philippines	4098<br>Thailand	436<br>Myanmar	222<br>South Korea	158<br>Malaysia	1660<br>Nepal	351<br>North Korea	112<br>Australia	33966<br>Taiwan	375<br>Sri Lanka	500<br>Cambodia	181<br>Papua New Guinea	19<br>Laos	41<br>Singapore	1073<br>New Zealand	24018<br>Fiji	287<br>Bhutan	77<br>Samoa	38<br>Tonga	9<br>Cook Islands	60<br>Afghanistan	449<br>Vanuatu	75<br>Solomon Islands	12');
			});
			document.getElementById("Risk").value = 'on';
		}
		else if(document.getElementById("Risk").value === 'on')
		{
			document.getElementById("Risk").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("RiskNumbers").style.opacity = 0;
			document.getElementById("Risk").value = 'off';
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
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Survival"</h2><br>China	167<br>India	4254<br>Indonesia	30<br>Pakistan	639<br>Bangladesh	122<br>Russia	36<br>Japan	211<br>Philippines	859<br>Thailand	59<br>Myanmar	29<br>South Korea	46<br>Malaysia	464<br>Nepal	68<br>North Korea	47<br>Australia	4596<br>Taiwan	78<br>Sri Lanka	170<br>Cambodia	22<br>Papua New Guinea	5<br>Laos	6<br>Singapore	166<br>New Zealand	2260<br>Fiji	106<br>Bhutan	15<br>Samoa	12<br>Tonga	2<br>Cook Islands	2<br>Afghanistan	85<br>Vanuatu	15<br>Solomon Islands	4');
			});
		}
		else if(document.getElementById("Survival").value === 'on')
		{
			document.getElementById("Survival").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("SurvivalNumbers").style.opacity = 0;
			document.getElementById("Survival").value = 'off';
		}
});

document.getElementById("Violence").addEventListener("click", function(){
		if(document.getElementById("Violence").value === 'off')
		{
			document.getElementById("Violence").style.cssText = 'color: rgb(255, 100, 0)';
			document.getElementById("ViolenceNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Violence"</h2><br>China	286<br>India	15736<br>Indonesia	152<br>Pakistan	2213<br>Bangladesh	617<br>Russia	129<br>Japan	220<br>Philippines	1624<br>Thailand	162<br>Myanmar	300<br>South Korea	45<br>Malaysia	664<br>Nepal	197<br>North Korea	10<br>Australia	12859<br>Taiwan	90<br>Sri Lanka	584<br>Cambodia	298<br>Papua New Guinea	34<br>Laos	14<br>Singapore	191<br>New Zealand	7002<br>Fiji	180<br>Bhutan	21<br>Samoa	104<br>Tonga	5<br>Cook Islands	57<br>Afghanistan	641<br>Vanuatu	29<br>Solomon Islands	22');
			});
			document.getElementById("Violence").value = 'on';
		}
		else if(document.getElementById("Violence").value === 'on')
		{
			document.getElementById("Violence").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("ViolenceNumbers").style.opacity = 0;
			document.getElementById("Violence").value = 'off';
		}
});

document.getElementById("Vulnerability").addEventListener("click", function(){
		if(document.getElementById("Vulnerability").value === 'off')
		{
			document.getElementById("Vulnerability").style.cssText = 'color: rgb(255, 100, 100)';
			document.getElementById("VulnerabilityNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Vulnerability"</h2><br>China	51<br>India	2213<br>Indonesia	21<br>Pakistan	314<br>Bangladesh	173<br>Russia	10<br>Japan	50<br>Philippines	453<br>Thailand	17<br>Myanmar	28<br>South Korea	7<br>Malaysia	78<br>Nepal	74<br>North Korea	0<br>Australia	1300<br>Taiwan	16<br>Sri Lanka	86<br>Cambodia	25<br>Papua New Guinea	1<br>Laos	4<br>Singapore	64<br>New Zealand	971<br>Fiji	84<br>Bhutan	23<br>Samoa	16<br>Tonga	1<br>Cook Islands	2<br>Afghanistan	53<br>Vanuatu	14<br>Solomon Islands	6');
			});
			document.getElementById("Vulnerability").value = 'on';
		}
		else if(document.getElementById("Vulnerability").value === 'on')
		{
			document.getElementById("Vulnerability").style.cssText = 'color: rgb(255, 255, 255)';
			document.getElementById("VulnerabilityNumbers").style.opacity = 0;
			document.getElementById("Vulnerability").value = 'off';
		}
});

document.getElementById("Warfare").addEventListener("click", function(){
		if(document.getElementById("Warfare").value === 'off')
		{
			document.getElementById("Warfare").style.cssText = 'color: rgb(50, 0, 255)';
			document.getElementById("WarfareNumbers").style.opacity = 1;
			$(document).ready(function(){
				$('#CountriesText').finish();
				$('#CountriesText').animate({opacity: '1'}, 2000);
				$('#CountriesText').html('<h2>"Warfare"</h2><br>China	133<br>India	1206<br>Indonesia	4<br>Pakistan	212<br>Bangladesh	33<br>Russia	23<br>Japan	74<br>Philippines	104<br>Thailand	16<br>Myanmar	8<br>South Korea	27<br>Malaysia	64<br>Nepal	8<br>North Korea	10<br>Australia	1312<br>Taiwan	76<br>Sri Lanka	48<br>Cambodia	8<br>Papua New Guinea	1<br>Laos	2<br>Singapore	28<br>New Zealand	206<br>Fiji	6<br>Bhutan	0<br>Samoa	0<br>Tonga	0<br>Cook Islands	45<br>Afghanistan	60<br>Vanuatu	3<br>Solomon Islands	1');
			});
			document.getElementById("Warfare").value = 'on';
		}
		else if(document.getElementById("Warfare").value === 'on')
		{
			document.getElementById("Warfare").style.cssText = 'color: rgb:(255, 255, 255)';
			document.getElementById("WarfareNumbers").style.opacity = 0;
			document.getElementById("Warfare").value = 'off';
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
	var cChangeSystem = new particleGenerator(849326/10, 5, 'rgb(0, 150, 0)');
	var conflictSystem = new particleGenerator(28394/10, 5, 'rgb(255, 0, 0)');
	var fragilitySystem = new particleGenerator(1008/10, 5, 'rgb(150, 100, 255)');
	var instabilitySystem = new particleGenerator(6271/10, 5, 'rgb(255, 200, 0)');
	var riskSystem = new particleGenerator(98397/10, 5, 'rgb(255, 0, 120)');
	var survivalSystem = new particleGenerator(14575/10, 5, 'rgb(0, 150, 255)');
	var violenceSystem = new particleGenerator(44486/10, 5, 'rgb(255, 100, 0)');
	var vulnerabilitySystem = new particleGenerator(6155/10, 5, 'rgb(255, 100, 100)');
	var warfareSystem = new particleGenerator(3718/10, 5, 'rgb(50, 0, 255)');
		
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
		console.log(document.getElementById("ClimateChange").value);
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
		width = window.innerWidth;
		height = window.innerHeight;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();

		renderer.setSize( width, height);

	}
	
	

}

var scene = init();
	
