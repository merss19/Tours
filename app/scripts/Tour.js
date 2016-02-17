
import TourBase from './TourBase';
import TourData from './TourData';



export class Tour extends TourBase {

	render(){
		var template = document.querySelector('#tour-template');
		this.element = 'content' in template ?
			template.content.children[0].cloneNode(true) :
			template.children[0].cloneNode(true);

		this.element.querySelector('.tour__name').textContent = this.datas.getProperty('name');


	};
}
/*
 var user = new Tour();
 console.log(user);
 console.log(user.render());*/

export class Gallery extends TourBase {

	constructor(name) {
		super();
		this.element = document.querySelector(name);
	}
	render(){


		this.element.classList.remove('hidden');

		var thumbnailsContainer = this.element.querySelector('.gallery-thumbnails');

		thumbnailsContainer.innerText = 'pic';
	};


}
