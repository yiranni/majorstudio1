let s = {
	width: window.innerWidth,
	height: window.innerHeight,
	clockImage: null
}

let animationPositions = {
	clock: 400,
	isometric: 3000,
	isometricBreakout: 5000,
	barGraph: 7000,
	preBarGraphHighlightedAverage: 9000,
	barGraphHighlightedAverage: 9200,
	endBarGraphHighlightedAverage: 11200,
	preBarGraphHighlightedMax: 11200,
	barGraphHighlightedMax: 12200,
	endBarGraphHighlightedMax: 15000,
	end: 19000
}

let animations = {
	fadeLength: 500,
	breakapartLength: 1500,
}
let scaleFactor = 2;


let clock = {
	"height": 95 * 5,
	"width": 20 * 5,
	"depth": 4 * 5
}

let realClock = {
	"height": 83.2 * scaleFactor,
	"width": 29.2 * scaleFactor,
	"depth": 14 * scaleFactor
}

let clocks;

let W = clock.width;
let H = clock.height;
let L = clock.depth;
let w = Math.floor(2 * W * Math.cos(Math.PI / 12));
let h = Math.floor(2 * W * Math.sin(Math.PI / 12));
let w2 = Math.floor(2 * L * Math.cos(Math.PI / 12));
let h2 = Math.floor(2 * L * Math.sin(Math.PI / 12));
let x = s.width / 2 + 80;
let y = s.height / 2 - 270;
let xS = s.width;
let yS = s.height;
let xAdd = 300;
let yAdd = 300;
let xCor = -75;

let div = 1;
let mult = 1;

let vectorInfo = {
	up: {
		x1: x - w / div,
		y1: y + h / div,
		x2: x,
		y2: y + h,
		x3: x + w2 / div,
		y3: y + h - h2 / div,
		x4: x - w / div + w2 / div,
		y4: y + h / div - h2 / div
	},
	right: {
		x1: x + w2 / div,
		y1: y + h - h2 / div,
		x2: x + w2 / div,
		y2: y + h - h2 * mult + H,
		x3: x,
		y3: y + h + H,
		x4: x,
		y4: y + h
	},
	left: {
		x1: x - w / div,
		y1: y + h / div,
		x2: x,
		y2: y + h,
		x3: x,
		y3: y + h + H,
		x4: x - w / div,
		y4: y + h * mult + H
	}
}

let WR = realClock.width;
let HR = realClock.height;
let LR = realClock.depth;

let finalVectorInfo = {
	up: { // up
		x1: xS / 2 + xAdd + xCor,
		y1: yS / 2 + LR / 2,
		x2: xS / 2 + WR + xAdd + xCor,
		y2: yS / 2 + LR / 2,
		x3: xS / 2 + WR + xAdd + xCor,
		y3: yS / 2 - LR / 2,
		x4: xS / 2 + xAdd + xCor,
		y4: yS / 2 - LR / 2
	},
	right: { // side
		x1: xS / 2 + LR + xCor,
		y1: yS / 2 - HR / 2,
		x2: xS / 2 + LR + xCor,
		y2: yS / 2 + HR / 2,
		x3: xS / 2 + xCor,
		y3: yS / 2 + HR / 2,
		x4: xS / 2 + xCor,
		y4: yS / 2 - HR / 2
	},
	left: { // front
		x1: xS / 2 - xAdd + xCor,
		y1: yS / 2 - HR / 2,
		x2: xS / 2 + WR - xAdd + xCor,
		y2: yS / 2 - HR / 2,
		x3: xS / 2 + WR - xAdd + xCor,
		y3: yS / 2 + HR / 2,
		x4: xS / 2 - xAdd + xCor,
		y4: yS / 2 + HR / 2
	}
};

let finalAfterBreakout = {
	up: { // up
		x1: xS / 2 + xAdd + xCor,
		y1: yS / 2 + yAdd,
		x2: xS / 2 + WR + xAdd + xCor,
		y2: yS / 2 + yAdd,
		x3: xS / 2 + WR + xAdd + xCor,
		y3: yS / 2 - LR + yAdd,
		x4: xS / 2 + xAdd + xCor,
		y4: yS / 2 - LR + yAdd
	},
	right: { // side
		x1: xS / 2 + LR + xCor,
		y1: yS / 2 - HR + yAdd,
		x2: xS / 2 + LR + xCor,
		y2: yS / 2 + yAdd,
		x3: xS / 2 + xCor,
		y3: yS / 2 + yAdd,
		x4: xS / 2 + xCor,
		y4: yS / 2 - HR + yAdd
	},
	left: { // front
		x1: xS / 2 - xAdd + xCor,
		y1: yS / 2 - HR + yAdd,
		x2: xS / 2 + WR - xAdd + xCor,
		y2: yS / 2 - HR + yAdd,
		x3: xS / 2 + WR - xAdd + xCor,
		y3: yS / 2 + yAdd,
		x4: xS / 2 - xAdd + xCor,
		y4: yS / 2 + yAdd
	}
}

function calculateFinalQuad(startQuad, endQuad, pos, goalPos, duration) {
	if (pos >= goalPos) {
		return endQuad;
	}
	let percentage = (goalPos - pos) / duration;
	let finalQuad = {};

	Object.keys(endQuad).forEach(k => {
		finalQuad[k] = startQuad[k] + (endQuad[k] - startQuad[k]) * (1 - percentage)
	});

	return finalQuad;
}

function calculatePercentage(currPos, startPos, aniDuration, finalPos, mathFunc, mathVal) {
	let percentage;
	if (currPos < (startPos + (finalPos - startPos) / 2)) {
		percentage = (currPos - startPos) / aniDuration;
	} else {
		percentage = mathFunc(mathVal, (finalPos - currPos) / aniDuration);
	}

	if (percentage < 0) {
		return 0;
	}

	if (percentage >= 1) {
		return 1;
	}

	return percentage;
}

function calculatePercentageFadeOut(currPos, startPos, aniDuration, finalPos, mathFunc, mathVal) {
	let percentage;
	if (currPos < (startPos + (finalPos - startPos) / 2)) {
		percentage = 1
	} else {
		percentage = (finalPos - currPos) / aniDuration;
	}

	if (percentage < 0) {
		return 0;
	}

	if (percentage >= 1) {
		return 1;
	}

	return percentage;
}

function preload() {
	let clocksData = 'dist/data/dimension3.json';
	loadJSON(clocksData, (data) => {

		clocks = data;
	});
}

function setup() {
	createCanvas(s.width, s.height);
	s.clockImage = loadImage('dist/img/homepagesample.png');
}

function draw() {
	let pos = window.scrollY;
	clear();

	if (pos > animationPositions.clock && pos < animationPositions.isometric) {
		image(
			s.clockImage,
			s.width / 2 - s.clockImage.width / 2,
			s.height / 2 - s.clockImage.height / 2,
			s.clockImage.width,
			s.clockImage.height
		);
		tint(
			255,
			calculatePercentage(
				pos,
				animationPositions.clock,
				animations.fadeLength,
				animationPositions.isometric,
				Math.max,
				0.5
			) * 255
		)
		push();
	}

	if (pos >= animationPositions.isometric && pos < animationPositions.isometricBreakout) {
		image(
			s.clockImage,
			s.width / 2 - s.clockImage.width / 2,
			s.height / 2 - s.clockImage.height / 2,
			s.clockImage.width,
			s.clockImage.height
		);
		tint(
			255,
			(pos <= (animationPositions.isometricBreakout - animations.fadeLength) ? 0.5 : calculatePercentage(
				pos,
				animationPositions.isometric,
				animations.fadeLength,
				animationPositions.isometricBreakout,
				Math.min,
				0.5
			)) * 255
		)
		push();
	}


	if (pos >= animationPositions.isometric && pos < animationPositions.isometricBreakout) {
		strokeWeight(2)
		stroke(
			`rgba(232,90,79, ${calculatePercentage(
				pos,
				animationPositions.isometric,
				animations.fadeLength,
				animationPositions.isometricBreakout,
				Math.max,
				1
			)})`
		)
		noFill()
		quad(
			vectorInfo.up.x1,
			vectorInfo.up.y1,
			vectorInfo.up.x2,
			vectorInfo.up.y2,
			vectorInfo.up.x3,
			vectorInfo.up.y3,
			vectorInfo.up.x4,
			vectorInfo.up.y4
		);
		quad(
			vectorInfo.right.x1,
			vectorInfo.right.y1,
			vectorInfo.right.x2,
			vectorInfo.right.y2,
			vectorInfo.right.x3,
			vectorInfo.right.y3,
			vectorInfo.right.x4,
			vectorInfo.right.y4
		);
		quad(
			vectorInfo.left.x1,
			vectorInfo.left.y1,
			vectorInfo.left.x2,
			vectorInfo.left.y2,
			vectorInfo.left.x3,
			vectorInfo.left.y3,
			vectorInfo.left.x4,
			vectorInfo.left.y4
		);

	}

	if (pos >= animationPositions.isometricBreakout && pos < animationPositions.barGraph) {
		strokeWeight(2);
		stroke(232, 90, 79);
		noFill()

		let up = calculateFinalQuad(
			vectorInfo.up,
			finalVectorInfo.up,
			pos,
			animationPositions.isometricBreakout + animations.breakapartLength,
			animations.breakapartLength
		)

		let right = calculateFinalQuad(
			vectorInfo.right,
			finalVectorInfo.right,
			pos,
			animationPositions.isometricBreakout + animations.breakapartLength,
			animations.breakapartLength
		)

		let left = calculateFinalQuad(
			vectorInfo.left,
			finalVectorInfo.left,
			pos,
			animationPositions.isometricBreakout + animations.breakapartLength,
			animations.breakapartLength
		)
		// up
		quad(
			up.x1,
			up.y1,
			up.x2,
			up.y2,
			up.x3,
			up.y3,
			up.x4,
			up.y4
		);
		//side
		quad(
			right.x1,
			right.y1,
			right.x2,
			right.y2,
			right.x3,
			right.y3,
			right.x4,
			right.y4
		);
		//front
		quad(
			left.x1,
			left.y1,
			left.x2,
			left.y2,
			left.x3,
			left.y3,
			left.x4,
			left.y4
		);
		push()
		stroke(142, 141, 138)
		line(left.x4, left.y4 + 4, left.x4, left.y4 + 14)
		line(left.x3, left.y3 + 4, left.x3, left.y3 + 14)
		line(left.x2 + 4, left.y2, left.x2 + 14, left.y2)
		line(left.x3 + 4, left.y3, left.x3 + 14, left.y3)
		line(right.x2, right.y2 + 4, right.x2, right.y2 + 14)
		line(right.x2 + 4, right.y2, right.x2 + 14, right.y2)
		line(right.x3, right.y3 + 4, right.x3, right.y3 + 14)
		line(right.x1 + 4, right.y1, right.x1 + 14, right.y1)
		line(up.x1, up.y1 + 4, up.x1, up.y1 + 14)
		line(up.x2, up.y2 + 4, up.x2, up.y2 + 14)
		line(up.x2 + 4, up.y2, up.x2 + 14, up.y2)
		line(up.x3 + 4, up.y3, up.x3 + 14, up.y3)
		pop()
		push()
		noStroke()
		fill(142, 141, 138)
		textSize(14)
		text('width', left.x4 + 14, left.y4 + 28)
		text('29.2 cm', left.x4 + 8, left.y4 + 46)
		text('height', left.x2 + 14, (left.y3 - left.y2) / 2 + left.y2)
		text('83.2 cm', left.x2 + 14, (left.y3 - left.y2) / 2 + left.y2 + 22)
		text('depth', right.x3 - 2, right.y3 + 28)
		text('14 cm', right.x3 - 4, right.y3 + 46)
		text('height', right.x1 + 14, (right.y2 - right.y1) / 2 + right.y1)
		text('83.2 cm', right.x1 + 14, (right.y2 - right.y1) / 2 + right.y1 + 22)
		text('width', up.x1 + 14, up.y1 + 28)
		text('29.2 cm', up.x1 + 8, up.y1 + 46)
		text('depth', up.x3 + 14, (up.y3 - up.y2) / 2 + up.y2)
		text('14 cm', up.x3 + 14, (up.y3 - up.y2) / 2 + up.y2 + 16)
		pop()

	}

	if (pos >= animationPositions.barGraph && pos < animationPositions.preBarGraphHighlightedAverage) {
		strokeWeight(1);
		stroke(`rgba(151,136,115, ${calculatePercentageFadeOut(
			pos,
			animationPositions.barGraph,
			animations.fadeLength,
			animationPositions.preBarGraphHighlightedAverage,
		)})`);
		noFill()
		let up = calculateFinalQuad(
			finalVectorInfo.up,
			finalAfterBreakout.up,
			pos,
			animationPositions.barGraph + animations.breakapartLength,
			animations.breakapartLength
		)

		let right = calculateFinalQuad(
			finalVectorInfo.right,
			finalAfterBreakout.right,
			pos,
			animationPositions.barGraph + animations.breakapartLength,
			animations.breakapartLength
		)

		let left = calculateFinalQuad(
			finalVectorInfo.left,
			finalAfterBreakout.left,
			pos,
			animationPositions.barGraph + animations.breakapartLength,
			animations.breakapartLength
		)

		quad(
			up.x1,
			up.y1,
			up.x2,
			up.y2,
			up.x3,
			up.y3,
			up.x4,
			up.y4
		);
		quad(
			right.x1,
			right.y1,
			right.x2,
			right.y2,
			right.x3,
			right.y3,
			right.x4,
			right.y4
		);
		quad(
			left.x1,
			left.y1,
			left.x2,
			left.y2,
			left.x3,
			left.y3,
			left.x4,
			left.y4
		);

		noFill()
	}

	// plain bargraph 
	if (pos >= animationPositions.barGraph && pos < animationPositions.barGraphHighlightedAverage) {
		let dclocks = [];
		let dcount = 0;
		let sumWidth = 0;
		let sumHeight = 0;
		let sumDepth = 0;
		let averageWidth = 0;
		let averageHeight = 0;
		let averageDepth = 0;

		for (var i = 0; i < clocks.length; i++) {
			if (clocks[i].width != null && clocks[i].depth != null) {
				dclocks.push(clocks[i])
			}
		}
		for (var i = 0; i < dclocks.length; i++) {
			// var thisData = dclocks[i];
			noFill()
			strokeWeight(0.3)
			stroke(
				`rgba(151,136,115, ${calculatePercentage(
					pos,
					animationPositions.barGraph,
					animations.fadeLength,
					animationPositions.barGraph + animations.fadeLength,
					Math.max,
					1
				)})`
			)
			// front face
			rect(xS / 2 - xAdd + xCor, yS / 2 - dclocks[i].height * scaleFactor + yAdd, dclocks[i].width * scaleFactor, dclocks[i].height * scaleFactor)
			// side face
			rect(xS / 2 + xCor, yS / 2 - dclocks[i].height * scaleFactor + yAdd, dclocks[i].depth * scaleFactor, dclocks[i].height * scaleFactor)
			// up face
			rect(xS / 2 + xAdd + xCor, yS / 2 - dclocks[i].depth * scaleFactor + yAdd, dclocks[i].width * scaleFactor, dclocks[i].depth * scaleFactor)
		}
		fill(
			`rgba(151,136,115, ${calculatePercentage(
				pos,
				animationPositions.barGraph,
				animations.fadeLength,
				animationPositions.barGraph + animations.fadeLength,
				Math.max,
				1
			)})`
		);
		noStroke()
		textSize(16)
		// text('FRONT', xS / 2 - xAdd + xCor, yS / 2 - yAdd);
		text('FRONT', xS / 2 - xAdd + xCor + 50, yS - 120);
		// text('SIDE', xS / 2 + xCor, yS / 2 - yAdd);
		text('SIDE', xS / 2 + xCor + 50, yS - 120);
		// text('UP', xS / 2 + xAdd + xCor, yS / 2 - yAdd);
		text('UP', xS / 2 + xAdd + xCor, yS - 120);

		push()
		textSize(14)
		text('height', xS / 2 - xAdd + xCor - 40, yS / 2 - 320 * scaleFactor + yAdd);
		text('width', xS / 2 - xAdd + xCor + 200, yS - 170);
		text('depth', xS / 2 + xCor + 200, yS - 170);
		text('height', xS / 2 + xCor - 40, yS / 2 - 320 * scaleFactor + yAdd);
		text('width', xS / 2 + xAdd + xCor + 200, yS - 170);
		text('depth', xS / 2 + xAdd + xCor - 40, yS - 170 - 120);
		pop()

		for (var i = 0; i < dclocks.length; i++) {
			sumWidth += dclocks[i].width;
			sumHeight += dclocks[i].height;
			sumDepth += dclocks[i].depth
			dcount++;
		}
		averageWidth = sumWidth / dcount;
		averageHeight = sumHeight / dcount;
		averageDepth = sumDepth / dcount;

	}

	// average red fade in
	if (pos >= animationPositions.barGraphHighlightedAverage && pos < animationPositions.endBarGraphHighlightedAverage) {
		let dclocks = [];
		let dcount = 0;
		let sumWidth = 0;
		let sumHeight = 0;
		let sumDepth = 0;
		let averageWidth = 0;
		let averageHeight = 0;
		let averageDepth = 0;

		for (var i = 0; i < clocks.length; i++) {
			if (clocks[i].width != null && clocks[i].depth != null) {
				dclocks.push(clocks[i])
			}
		}
		for (var i = 0; i < dclocks.length; i++) {
			// var thisData = dclocks[i];
			noFill()
			strokeWeight(0.1)
			stroke(
				`rgba(151,136,115, 1)`
			)
			// front face
			rect(xS / 2 - xAdd + xCor, yS / 2 - dclocks[i].height * scaleFactor + yAdd, dclocks[i].width * scaleFactor, dclocks[i].height * scaleFactor)
			// side face
			rect(xS / 2 + xCor, yS / 2 - dclocks[i].height * scaleFactor + yAdd, dclocks[i].depth * scaleFactor, dclocks[i].height * scaleFactor)
			// up face
			rect(xS / 2 + xAdd + xCor, yS / 2 - dclocks[i].depth * scaleFactor + yAdd, dclocks[i].width * scaleFactor, dclocks[i].depth * scaleFactor)
		}
		fill(
			`rgba(151,136,115, 1)`
		);
		noStroke()
		textSize(16)
		// text('FRONT', xS / 2 - xAdd + xCor, yS / 2 - yAdd);
		text('FRONT', xS / 2 - xAdd + xCor + 50, yS - 120);
		// text('SIDE', xS / 2 + xCor, yS / 2 - yAdd);
		text('SIDE', xS / 2 + xCor + 50, yS - 120);
		// text('UP', xS / 2 + xAdd + xCor, yS / 2 - yAdd);
		text('UP', xS / 2 + xAdd + xCor + 50, yS - 120);
		push()
		textSize(14)
		text('height', xS / 2 - xAdd + xCor - 40, yS / 2 - 320 * scaleFactor + yAdd);
		text('width', xS / 2 - xAdd + xCor + 200, yS - 170);
		text('depth', xS / 2 + xCor + 200, yS - 170);
		text('height', xS / 2 + xCor - 40, yS / 2 - 320 * scaleFactor + yAdd);
		text('width', xS / 2 + xAdd + xCor + 200, yS - 170);
		text('depth', xS / 2 + xAdd + xCor - 40, yS - 170 - 120);
		pop()
		for (var i = 0; i < dclocks.length; i++) {
			sumWidth += dclocks[i].width;
			sumHeight += dclocks[i].height;
			sumDepth += dclocks[i].depth
			dcount++;
		}
		averageWidth = sumWidth / dcount;
		averageHeight = sumHeight / dcount;
		averageDepth = sumDepth / dcount;

		red
		strokeWeight(3)
		noFill()
		stroke(
			`rgba(232,90,79, ${calculatePercentage(
				pos,
				animationPositions.barGraphHighlightedAverage,
				animations.fadeLength,
				animationPositions.barGraphHighlightedAverage + animations.fadeLength,
				Math.max,
				1
			)})`
		)
		rect(xS / 2 - xAdd + xCor, yS / 2 - averageHeight * scaleFactor + yAdd, averageWidth * scaleFactor, averageHeight * scaleFactor);
		rect(xS / 2 + xCor, yS / 2 - averageHeight * scaleFactor + yAdd, averageDepth * scaleFactor, averageHeight * scaleFactor)
		rect(xS / 2 + xAdd + xCor, yS / 2 - averageDepth * scaleFactor + yAdd, averageWidth * scaleFactor, averageDepth * scaleFactor);

		push()
		noStroke();
		fill(`rgba(232,90,79, ${calculatePercentage(
			pos,
			animationPositions.barGraphHighlightedAverage,
			animations.fadeLength,
			animationPositions.barGraphHighlightedAverage + animations.fadeLength,
			Math.max,
			1
		)})`)
		text('37.5 cm', xS / 2 - xAdd + xCor + 10, yS / 2 + yAdd + 20);
		text('108.8 cm', xS / 2 - xAdd + xCor + averageWidth * scaleFactor + 12, yS / 2 + averageHeight * scaleFactor);
		text('108.8 cm', xS / 2 + xCor + averageDepth * scaleFactor + 12, yS / 2 + averageHeight * scaleFactor);
		text('21 cm', xS / 2 + xCor, yS / 2 + yAdd + 20);
		text('37.5 cm', xS / 2 + xAdd + xCor, yS / 2 + yAdd + 20)
		text('21 cm', xS / 2 + xAdd + xCor + averageWidth * scaleFactor + 12, yS / 2 + yAdd - averageDepth * scaleFactor / 2)

		pop()
	}

	// plain bargraph 
	if (pos >= animationPositions.endBarGraphHighlightedAverage && pos < animationPositions.barGraphHighlightedMax) {
		let dclocks = [];
		let dcount = 0;
		let sumWidth = 0;
		let sumHeight = 0;
		let sumDepth = 0;
		let averageWidth = 0;
		let averageHeight = 0;
		let averageDepth = 0;

		for (var i = 0; i < clocks.length; i++) {
			if (clocks[i].width != null && clocks[i].depth != null) {
				dclocks.push(clocks[i])
			}
		}
		for (var i = 0; i < dclocks.length; i++) {
			// var thisData = dclocks[i];
			noFill()
			strokeWeight(0.3)
			stroke(
				// `rgba(151,136,115, ${calculatePercentage(
				// 	pos,
				// 	animationPositions.endBarGraphHighlightedAverage,
				// 	animations.fadeLength,
				// 	animationPositions.endBarGraphHighlightedAverage + animations.fadeLength,
				// 	Math.max,
				// 	1
				// )})`
				`rgba(151,136,115,1)`
			)
			// front face
			rect(xS / 2 - xAdd + xCor, yS / 2 - dclocks[i].height * scaleFactor + yAdd, dclocks[i].width * scaleFactor, dclocks[i].height * scaleFactor)
			// side face
			rect(xS / 2 + xCor, yS / 2 - dclocks[i].height * scaleFactor + yAdd, dclocks[i].depth * scaleFactor, dclocks[i].height * scaleFactor)
			// up face
			rect(xS / 2 + xAdd + xCor, yS / 2 - dclocks[i].depth * scaleFactor + yAdd, dclocks[i].width * scaleFactor, dclocks[i].depth * scaleFactor)
		}
		fill(
			`rgba(151,136,115, ${calculatePercentage(
				pos,
				animationPositions.endBarGraphHighlightedAverage,
				animations.fadeLength,
				animationPositions.endBarGraphHighlightedAverage + animations.fadeLength,
				Math.max,
				1
			)})`
		);
		noStroke()
		textSize(16)
		// text('FRONT', xS / 2 - xAdd + xCor, yS / 2 - yAdd);
		text('FRONT', xS / 2 - xAdd + xCor + 50, yS - 120);
		// text('SIDE', xS / 2 + xCor, yS / 2 - yAdd);
		text('SIDE', xS / 2 + xCor + 50, yS - 120);
		// text('UP', xS / 2 + xAdd + xCor, yS / 2 - yAdd);
		text('UP', xS / 2 + xAdd + xCor, yS - 120);

		push()
		textSize(14)
		text('height', xS / 2 - xAdd + xCor - 40, yS / 2 - 320 * scaleFactor + yAdd);
		text('width', xS / 2 - xAdd + xCor + 200, yS - 170);
		text('depth', xS / 2 + xCor + 200, yS - 170);
		text('height', xS / 2 + xCor - 40, yS / 2 - 320 * scaleFactor + yAdd);
		text('width', xS / 2 + xAdd + xCor + 200, yS - 170);
		text('depth', xS / 2 + xAdd + xCor - 40, yS - 170 - 120);
		pop()

		for (var i = 0; i < dclocks.length; i++) {
			sumWidth += dclocks[i].width;
			sumHeight += dclocks[i].height;
			sumDepth += dclocks[i].depth
			dcount++;
		}
		averageWidth = sumWidth / dcount;
		averageHeight = sumHeight / dcount;
		averageDepth = sumDepth / dcount;

	}

	// max red fade in
	if (pos >= animationPositions.barGraphHighlightedMax && pos < animationPositions.endBarGraphHighlightedMax) {
		let dclocks = [];
		let dcount = 0;
		let sumWidth = 0;
		let sumHeight = 0;
		let sumDepth = 0;
		let averageWidth = 0;
		let averageHeight = 0;
		let averageDepth = 0;
		let maxWidth = 0;
		let maxHeight = 0;
		let maxDepth = 0;

		for (var i = 0; i < clocks.length; i++) {
			if (clocks[i].width != null && clocks[i].depth != null) {
				dclocks.push(clocks[i])
			}
		}
		for (var i = 0; i < dclocks.length; i++) {
			// var thisData = dclocks[i];
			noFill()
			strokeWeight(0.1)
			stroke(
				`rgba(151,136,115, 1)`
			)
			// front face
			rect(xS / 2 - xAdd + xCor, yS / 2 - dclocks[i].height * scaleFactor + yAdd, dclocks[i].width * scaleFactor, dclocks[i].height * scaleFactor)
			// side face
			rect(xS / 2 + xCor, yS / 2 - dclocks[i].height * scaleFactor + yAdd, dclocks[i].depth * scaleFactor, dclocks[i].height * scaleFactor)
			// up face
			rect(xS / 2 + xAdd + xCor, yS / 2 - dclocks[i].depth * scaleFactor + yAdd, dclocks[i].width * scaleFactor, dclocks[i].depth * scaleFactor)
		}
		fill(
			`rgba(151,136,115, 1)`
		);
		noStroke()
		textSize(16)
		// text('FRONT', xS / 2 - xAdd + xCor, yS / 2 - yAdd);
		text('FRONT', xS / 2 - xAdd + xCor + 50, yS - 120);
		// text('SIDE', xS / 2 + xCor, yS / 2 - yAdd);
		text('SIDE', xS / 2 + xCor + 50, yS - 120);
		// text('UP', xS / 2 + xAdd + xCor, yS / 2 - yAdd);
		text('UP', xS / 2 + xAdd + xCor + 50, yS - 120);
		push()
		textSize(14)
		text('height', xS / 2 - xAdd + xCor - 40, yS / 2 - 320 * scaleFactor + yAdd);
		text('width', xS / 2 - xAdd + xCor + 200, yS - 170);
		text('depth', xS / 2 + xCor + 200, yS - 170);
		text('height', xS / 2 + xCor - 40, yS / 2 - 320 * scaleFactor + yAdd);
		text('width', xS / 2 + xAdd + xCor + 200, yS - 170);
		text('depth', xS / 2 + xAdd + xCor - 40, yS - 170 - 120);
		pop()
		for (var i = 0; i < dclocks.length; i++) {
			if (dclocks[i].height > maxHeight) {
				maxHeight = dclocks[i].height
			} else {
				i++;
			}
			if (dclocks[i].width > maxWidth) {
				maxWidth = dclocks[i].width;
			} else {
				i++;
			}
			if (dclocks[i].depth > maxDepth) {
				maxDepth = dclocks[i].depth;
			} else {
				i++;
			}
		}
		// averageWidth = sumWidth / dcount;
		// averageHeight = sumHeight / dcount;
		// averageDepth = sumDepth / dcount;

		red
		strokeWeight(3)
		noFill()
		stroke(
			`rgba(232,90,79, ${calculatePercentage(
				pos,
				animationPositions.barGraphHighlightedMax,
				animations.fadeLength,
				animationPositions.barGraphHighlightedMax + animations.fadeLength,
				Math.max,
				1
			)})`
			// `rgba(232,90,79,1)`
		)
		// rect(xS / 2 - xAdd + xCor, yS / 2 - averageHeight * scaleFactor + yAdd, averageWidth * scaleFactor, averageHeight * scaleFactor);
		rect(xS / 2 - xAdd + xCor, yS / 2 - maxHeight * scaleFactor + yAdd, maxWidth * scaleFactor, maxHeight * scaleFactor);
		rect(xS / 2 + xCor, yS / 2 - maxHeight * scaleFactor + yAdd, maxDepth * scaleFactor, maxHeight * scaleFactor)
		rect(xS / 2 + xAdd + xCor, yS / 2 - maxDepth * scaleFactor + yAdd, maxWidth * scaleFactor, maxDepth * scaleFactor);

		push()
		noStroke();
		fill(
			// `rgba(232,90,79, ${calculatePercentage(
			// 	pos,
			// 	animationPositions.barGraphHighlightedMax,
			// 	animations.fadeLength,
			// 	animationPositions.barGraphHighlightedMax + animations.fadeLength,
			// 	Math.max,
			// 	1
			// )})`
			`rgba(232,90,79,1)`
		)
		text('104 cm', xS / 2 - xAdd + xCor + 70, yS / 2 + yAdd + 20);
		text('311 cm', xS / 2 - xAdd + xCor + maxWidth * scaleFactor + 12, yS / 2 + averageHeight * scaleFactor);
		text('311 cm', xS / 2 + xCor + maxDepth * scaleFactor + 12, yS / 2 + averageHeight * scaleFactor);
		text('45 cm', xS / 2 + xCor + 20, yS / 2 + yAdd + 20);
		text('104 cm', xS / 2 + xAdd + xCor + 70, yS / 2 + yAdd + 20)
		text('45 cm', xS / 2 + xAdd + xCor + maxWidth * scaleFactor + 12, yS / 2 + yAdd - averageDepth * scaleFactor / 2)

		pop()
	}

		

}