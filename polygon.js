/*
 * An example of an ES6 class. Describes
 * a polygon with a width and a height.
 * exports the Polygon object.
 */

"use strict";
class Polygon {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}

module.exports = Polygon;