/*
 * An example of an ES6 class. Describes
 * a polygon with a width and a height.
 * exports the Polygon object.
 */

/*
 * Use strict is required to enforce class guidelines
 */
"use strict";
class Polygon {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}

module.exports = Polygon;