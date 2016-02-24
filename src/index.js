'use strict';

function areInterseсted(rect1, rect2) {
	var rect1Bottom = rect1.top + rect1.height,
		rect1Right = rect1.left + rect1.width,
		rect2Bottom = rect2.top + rect2.height,
		rect2Right = rect2.left + rect2.width;
		
	var horizontalIntersection,
		verticalIntersection;
	
	//horizontal interseption
	if (rect1.left < rect2.left) {
		horizontalIntersection = rect1Right > rect2.left;
	}
	else {
		horizontalIntersection = rect1.left < rect2Right;
	}
	
	//vertical interseption
	if (rect1.top < rect2.top) {
		verticalIntersection = rect1Bottom > rect2.top;
	}
	else {
		verticalIntersection = rect1.top < rect2Bottom;
	}
		
	return horizontalIntersection && verticalIntersection;
}

// function areInterseсted(rect1, rect2) {
// 	var rect1Bottom = rect1.top + rect.height,
// 		rect1Right = rect1.left + rect1.width,
// 		rect2Bottom = rect2.top + rect2.height,
// 		rect2Right = rect2.left + rect2.width;
// 	return ( 
// 		rect1.left < rect2Right
// 		|| rect1Right > rect2.left 
// 		|| rect1Bottom < rect2.top 
// 		|| rect1.top > rect2Bottom
// 	);
// 	
// }

function filterVisible(parent, children) {
	var childrenLength = children.length;
	
	function isVisible (rectangle){
		return (rectangle.width && rectangle.height);
	}
	
	function isInsideParent (rectangle){
		return areInterseсted(parent, rectangle);
	}
	
	return children
		.filter(isVisible)
		.filter(isInsideParent);
}