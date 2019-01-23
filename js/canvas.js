const canvas = document.querySelector("canvas");
// const body = document.querySelector("body");
// console.log(body);
// body.width = window.innerWidth;
//body.height = window.innerHeight;
// const html = document.querySelector("html");
// html.width = window.innerWidth;
// html.height = window.innerHeight;

const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//RECTANGLES
// c.fillRect(100, 200, 50, 50);
c.fillStyle = "rgba(204,204,0,0.6";
// c.fillRect(300, 400, 50, 50);
// c.fillRect(500, 100, 50, 50);

//CONNECTED LINES
// c.beginPath();
// c.moveTo(100,200);
// c.lineTo(500,100);
// c.lineTo(300,400);
// c.lineTo(100,200);
// c.strokeStyle = "grey";
// c.stroke();

//CIRCLE
// c.beginPath();
// c.arc(550, 150, 100, 0, Math.PI*2, false);
// c.strokeStyle = "black";
// c.stroke();

//THIN RECTANGLES
// for (let i=0; i<90; i++) {
// 	let x = Math.random() * window.innerWidth;
// 	let y = Math.random() * window.innerHeight;
// 	let width = Math.random() * 500;
// 	c.fillRect(x,y,width,10);
// }

// //LITTLE CIRCLES
// for (let i = 0; i < 100; i++) {
// 	let x = Math.random() * window.innerWidth;
// 	let y = Math.random() * window.innerHeight;
// 	c.beginPath();
// 	c.arc(x, y, 10, 0, Math.PI*2, false);

// 	let color = ['pink', 'blue', 'yellow', 'black', 'grey', 'grey', 'orange'];
// 	let strokeStyle = color[Math.floor(Math.random() * color.length)];
// 	c.strokeStyle = strokeStyle;

// 	c.stroke();
// }

//  <<BUMPING CIRCLES>>

//ELEGANT BLUE-GREY-YELLOW PALETTE
let colorArray = [
	"#355263",
	"#D5D5D3",
	"#FEFEFE",
	"#FDD24E",
	"#1F313F"
	];

//YELLOW PALETTE
let colorArray2 = [
	"#FCF581",
	"#FAF269",
	"#FFF03B",
	"#FFF7A1",
	"#FFF7BD"
];

//VAPORWAVE PALETTE
let colorArray3 = [
	"#ff71ce",
	"#01cdfe",
	"#05ffa1",
	"#b967ff",
	"#fffb96",
];

//HALLOWEEN PALETTE
let colorArrayH = [
	"#D97904",
	"#D96704",
	"#BF4904",
	"#8C2703",
	"#0D0D0D",
];

//let minRadius = 2;
let maxRadius = 40;

//ŚLEDŹ POZYCJĘ MYSZY
let mouse = {
	x: undefined,
	y: undefined
};
//console.log(mouse);

window.addEventListener("mousemove", function(event) {
	//console.log(event);
	mouse.x = event.x;
	mouse.y = event.y;
	//console.log(mouse);
});

//DOPASUJ WIELKOŚĆ CANVASA DO OKNA PRZEGLĄDARKI (RESPONSIVENESS)
window.addEventListener("resize", function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
});

//KONSTRUKTOR OBIEKTÓW CIRCLE. Przypisuje obiektowi właściwości: współrzędne, prędkość, promień i KOLOR, i rysuje się na ekranie w każdej klatce animacji.
function Circle (x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color= colorArrayH[Math.floor(Math.random()*colorArray.length)];
	//colors = ["orange", "green", "blue"];
	//console.log(actualColor);
	let pumpkin = new Image();
	pumpkin.src="pump.png";
	c.drawImage(pumpkin, this.x, this.y);


	
	this.draw = () => {
		c.fillStyle = this.color;
		//console.log(c.strokeStyle);
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		c.fill();
		// console.log(c.strokeStyle);

	}

	this.update = () => {
		this.draw();

		if (this.x+this.radius > innerWidth || this.x-this.radius < 0) this.dx = -this.dx;
		if (this.y+this.radius > innerHeight || this.y-this.radius < 0) this.dy = -this.dy;

		this.x+=this.dx;
		this.y+=this.dy 

		//ZMIENIAJ WIELKOŚĆ KÓŁ (ZWIĘKSZAJ NA OBSZARZE INTERAKCJI (do osiągnięcia MaxRadius); ZMNIEJSZAJ JEŚLI POZA NIM).
		if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
			if (this.radius < maxRadius)
			this.radius += 1;
		}
		else if (this.radius > this.minRadius)
			this.radius -= 1;
	}
};

//GENEROWANIE quantity OBIEKTÓW CIRCLE O LOSOWYCH WSPÓŁRZĘDNYCH, LOSOWEJ PRĘDKOŚCI w widełkach {-speed, +speed} i o LOSOWYM PROMIENIU o wartości 1-4 px.
let circleArray = [];

function init() {

	let quantity = 800;
	let speed = 2;

	circleArray = [];

	for (let i = 0; i < quantity; i++) {
		let x = Math.random() * innerWidth;
		let y = Math.random() * innerHeight;
		let dx = (Math.random()-0.5) * speed;
		// console.log(dx);
		let dy = (Math.random()-0.5) * speed;
		let radius = Math.random() * 3 + 1; 

		//let colors = ["orange", "black", "pink", "grey", "purple"];
		//let actualColor = colors[Math.floor(Math.random()*colors.length)];
		//c.strokeStyle = color[Math.floor(Math.random() * color.length)];

		circleArray.push(new Circle (x,y,dx,dy,radius));
	}
// console.log(circleArray);
};

const animate = () => {
	requestAnimationFrame(animate);
	c.clearRect(0,0,canvas.width,canvas.height);
	canvas.style.backgroundColor = "rgba(0,0,0,1)";

	for (let i=0; i<circleArray.length; i++) {
		circleArray[i].update();
	}
};

init();
animate();
console.log(innerWidth, innerHeight, document.querySelector("canvas").getContext("2d"));