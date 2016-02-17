'use strict';
import {TourData} from './TourData';
import {Tour,Gallery} from './Tour';

var gallery = new Gallery('.gallery');
let container = document.querySelector('.tours__list');
let tours = [];
let filteredTours = [];
let renderedElements = [];

export function getTours() {
	$.ajax({
		url: 'assets/data/tours.json',
		cache: false,
		dataType: 'json',
		success: function (data) {

			let loadedTours = data.map((tour) =>{

					return new TourData(tour);

		})
	updateLoadedTours(loadedTours);
}

})
};
function updateLoadedTours(loadedTours) {
	tours = loadedTours;
	document.querySelector('.tours__number').innerText = tours.length;

	setActiveFilter();

}
function setActiveFilter(){

	filteredTours = tours.slice();

	renderTours(filteredTours);

};


function renderTours(toursToRender){
	var pageTours = toursToRender;

	var fragment = document.createDocumentFragment();
	renderedElements = pageTours.map((tour) => {
			let tourElement = new Tour(tour);

	tourElement.render();
	fragment.appendChild(tourElement.element);

	tourElement.element.addEventListener('click',function(){
		gallery.datas = tourElement.datas;
		gallery.render();
		console.log(gallery.datas);
	});


	return tourElement;

});

container.appendChild(fragment);

};
