
var IsoBlock = IsoBlock || {};

IsoBlock.makeFigure = function(options) {

	// extract options
	var canvasId = options.canvas;
	var blocks = options.blocks;
	var shouldSortBlocks = (options.sortBlocks == undefined) ? true : options.sortBlocks;
	var shouldDrawAxes = options.drawAxis;
	var shouldDrawPlane = options.drawPlane;
	var axisLen = options.axisLen;
	var silhouette = options.silhouette;

	// set canvas and context.
	var canvas = document.getElementById(canvasId);
	var ctx = canvas.getContext('2d');

	// extract scale and origin (camera attributes)
	var scale = (options.scale && options.scale(canvas.width,canvas.height)) || (canvas.height / 8);
	var origin = (options.origin && options.origin(canvas.width,canvas.height)) || {x: canvas.width/2, y: canvas.height };

	// compute appropriate axis length (assuming origin is horizontally centered)
	if (!axisLen) {
		// make sure the axis extends to the edge of the canvas
		axisLen = Math.floor((canvas.width - origin.x) / scale / Math.cos(Math.PI/6)) - 0.5;
	}

	// Get horizontal axis' vertical displacement from origin.
	var hAxisV = origin.y/scale - 1;

	// create camera and painter.
	var camera = new IsoBlock.Camera(origin, scale);
	var painter = new IsoBlock.Painter(camera);

	// draw the xy grid
	function drawGrid() {

		// grid step
		var step = 1;

		// grid range
		var maxx = 15;
		var maxy = 15;

		// plot x lines
		ctx.beginPath();
		for (x=-maxx; x<=maxx; x+=step) {
			painter.moveTo(ctx, {x:x, y:-maxy});
			painter.lineTo(ctx, {x:x, y:maxy});
		}

		// plot y lines
		for (y=-maxy; y<=maxy; y+=step) {
			painter.moveTo(ctx, {x:-maxx, y:y});
			painter.lineTo(ctx, {x:maxx, y:y});
		}

		// draw grid lines
		ctx.strokeStyle = "#d7d7d7";
		ctx.lineWidth = 1;
		ctx.stroke();

	};

	// draw the xy axes and range bars for each block.
	function drawAxes() {

		var axisColor = "#444";
		ctx.lineWidth = 1;
		ctx.strokeStyle = axisColor;
		ctx.fillStyle = axisColor;
		var arrowSize = 0.3;

		// draw x,y axes (and h axis if silhouette)
		var xAxisStart = camera.spaceToIso({x:-axisLen, y:0});
		var xAxisEnd = camera.spaceToIso({x:axisLen, y:0});
		var yAxisStart = camera.spaceToIso({x:0, y:-axisLen});
		var yAxisEnd = camera.spaceToIso({x:0, y:axisLen});
		var hAxisStart = {h:yAxisEnd.h, v:hAxisV};
		var hAxisEnd = {h:xAxisEnd.h, v:hAxisV};
		ctx.beginPath();
		painter.moveTo(ctx, xAxisStart);
		painter.lineTo(ctx, xAxisEnd);
		painter.moveTo(ctx, yAxisStart);
		painter.lineTo(ctx, yAxisEnd);
		if (silhouette) {
			painter.moveTo(ctx, hAxisStart);
			painter.lineTo(ctx, hAxisEnd);
		}
		ctx.stroke();

		// draw x-axis arrow
		ctx.beginPath();
		painter.moveTo(ctx, {x:axisLen, y:0});
		painter.lineTo(ctx, {x:axisLen-arrowSize, y:-arrowSize});
		painter.lineTo(ctx, {x:axisLen-arrowSize, y:arrowSize});
		ctx.closePath();
		ctx.fill();

		// draw y-axis arrow
		ctx.beginPath();
		painter.moveTo(ctx, {y:axisLen, x:0});
		painter.lineTo(ctx, {y:axisLen-arrowSize, x:-arrowSize});
		painter.lineTo(ctx, {y:axisLen-arrowSize, x:arrowSize});
		ctx.closePath();
		ctx.fill();

		// draw h-axis arrow
		if (silhouette) {
			ctx.beginPath();
			painter.moveTo(ctx, hAxisStart);
			painter.lineTo(ctx, {h:hAxisStart.h+arrowSize, v:hAxisV+arrowSize});
			painter.lineTo(ctx, {h:hAxisStart.h+arrowSize, v:hAxisV-arrowSize});
			ctx.closePath();
			ctx.fill();
			ctx.beginPath();
			painter.moveTo(ctx, hAxisEnd);
			painter.lineTo(ctx, {h:hAxisEnd.h-arrowSize, v:hAxisV+arrowSize});
			painter.lineTo(ctx, {h:hAxisEnd.h-arrowSize, v:hAxisV-arrowSize});
			ctx.closePath();
			ctx.fill();
		}

		// draw axis labels
		var p = painter.transform({x:axisLen-1, y:-1});
		ctx.font = "italic 1em serif";
		ctx.textBaseline='middle';
		ctx.textAlign='right';
		ctx.fillText("x",p.x,p.y);
		p = painter.transform({x:-1, y:axisLen-1});
		ctx.textAlign='left';
		ctx.fillText("y",p.x,p.y);
		if (silhouette) {
			p = painter.transform({h:hAxisEnd.h, v:hAxisV-1});
			ctx.textAlign='right';
			ctx.fillText("h",p.x,p.y);
		}
		
		// draw axis ranges for each block
		var i,len,bounds,color,rgb,minp,maxp;
		var s = 0.25;
		for (i=0, len=blocks.length; i<len; i++) {
			bounds = silhouette ? camera.getIsoBounds(blocks[i]) : blocks[i].getBounds();
			color = blocks[i].color.medium;
			rgb = hexToRgb(color);
			tcolor = "rgba("+rgb+",0.7)";

			// alternate which side of the axis the range bar is on.
			s*=-1;

			// draw x axis range
			painter.fillQuad(ctx,
				{x:bounds.xmin, y:0},
				{x:bounds.xmin, y:s},
				{x:bounds.xmax, y:s},
				{x:bounds.xmax, y:0},
				tcolor
			);

			// draw y axis range
			painter.fillQuad(ctx,
				{x:0, y:bounds.ymin},
				{x:s, y:bounds.ymin},
				{x:s, y:bounds.ymax},
				{x:0, y:bounds.ymax},
				tcolor
			);

			if (silhouette) {
				painter.fillQuad(ctx,
					{h:bounds.hmin, v:hAxisV+s},
					{h:bounds.hmax, v:hAxisV+s},
					{h:bounds.hmax, v:hAxisV},
					{h:bounds.hmin, v:hAxisV},
					tcolor
				);
			}
		}
	}

	// draw a pseudo-shaded isometric block.
	function drawBlock(block) {

		var color = block.color;

		// get aliases for each of the block's vertices relative to camera's perspective.
		var b = camera.getIsoNamedSpaceVerts(block);

		if (silhouette) {
			var rgb = hexToRgb(color.medium);
			var tcolor = "rgba("+rgb+",0.7)";
			ctx.beginPath();
			painter.moveTo(ctx, b.frontDown);
			painter.lineTo(ctx, b.leftDown);
			painter.lineTo(ctx, b.leftUp);
			painter.lineTo(ctx, b.backUp);
			painter.lineTo(ctx, b.rightUp);
			painter.lineTo(ctx, b.rightDown);
			ctx.fillStyle = tcolor;
			ctx.fill();
		}
		else {

			// fill in the grout for the inside edges
			var lineWidth = 1;
			var groutColor = color.medium;
			painter.line(ctx, b.leftUp, b.frontUp, groutColor, lineWidth);
			painter.line(ctx, b.rightUp, b.frontUp, groutColor, lineWidth);
			painter.line(ctx, b.frontDown, b.frontUp, groutColor, lineWidth);

			// Do not add line width when filling faces.
			// This prevents a perimeter padding around the hexagon.
			// Nonzero line width could cause the perimeter of another box
			// to bleed over the edge of a box in front of it.
			lineWidth = 0;

			// fill each visible face of the block.

			// left face
			painter.fillQuad(ctx, b.frontDown, b.leftDown, b.leftUp, b.frontUp, !silhouette ? color.dark : color.medium, lineWidth);

			// top face
			painter.fillQuad(ctx, b.frontUp, b.leftUp, b.backUp, b.rightUp, !silhouette ? color.light : color.medium, lineWidth);

			// right face
			painter.fillQuad(ctx, b.frontDown, b.frontUp, b.rightUp, b.rightDown, color.medium, lineWidth);
		}
	};

	// draw a plane to separate two isometric blocks.
	function drawSeparationPlane(frontBlock, backBlock) {

		// exit if back plane is not present
		if (!backBlock) {
			return;
		}

		var bounds = frontBlock.getBounds();

		// get axis of separation
		var aAxis = camera.getSpaceSepAxis(frontBlock, backBlock);
		var bAxis,cAxis;

		// aAxis, bAxis, cAxis are either 'x', 'y', or 'z'
		// a, b, c are the values of its respective axis.

		// determine what our abstract axes correspond to.
		if (aAxis == 'x') {
			a = bounds.xmax;
			bAxis = 'y';
			cAxis = 'z';
		}
		else if (aAxis == 'y') {
			a = bounds.ymax;
			bAxis = 'x';
			cAxis = 'z';
		}
		else if (aAxis == 'z') {
			a = bounds.zmin;
			bAxis = 'x';
			cAxis = 'y';
		}

		// the radius (read margin) of the separation plane).
		var r = 0.7;

		// the points of the separation plane in abstract coords.
		var pts = [
			{ a:a, b: bounds[bAxis+"min"]-r, c: bounds[cAxis+"min"]-r },
			{ a:a, b: bounds[bAxis+"min"]-r, c: bounds[cAxis+"max"]+r },
			{ a:a, b: bounds[bAxis+"max"]+r, c: bounds[cAxis+"max"]+r },
			{ a:a, b: bounds[bAxis+"max"]+r, c: bounds[cAxis+"min"]-r },
		];

		// convert abstract coords to the real coords for this block.
		var i;
		var finalPts = [];
		for (i=0; i<4; i++) {
			var p = {};
			p[aAxis] = pts[i].a;
			p[bAxis] = pts[i].b;
			p[cAxis] = pts[i].c;
			finalPts.push(p);
		}

		// draw separation plane.
		painter.fillQuad(ctx, finalPts[0], finalPts[1], finalPts[2], finalPts[3], "rgba(0,0,0,0.35)");
		painter.strokeQuad(ctx, finalPts[0], finalPts[1], finalPts[2], finalPts[3], "rgba(0,0,0,0.9)", 1);
	};

	// draw grid
	drawGrid();

	// draw axes
	if (shouldDrawAxes) {
		drawAxes();
	}

	// sort blocks in drawing order.
	if (shouldSortBlocks) {
		blocks = IsoBlock.sortBlocks(blocks, camera);
	}

	// draw blocks and a separation plane if applicable.
	var i,len;
	for(i=0,len=blocks.length; i<len; i++) {

		// only draw a separation plane for the last block
		// and only if there is a block behind it.
		if (shouldDrawPlane && i>0 && i==len-1) {
			drawSeparationPlane(blocks[i], blocks[i-1]);
		}

		// draw block
		drawBlock(blocks[i]);
	}

};

