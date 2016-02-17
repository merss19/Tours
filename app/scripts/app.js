import svg4everybody from 'svg4everybody';
import {TourData} from './TourData';
import TourBase from './TourBase';
import {getTours} from './TourFunctions';
import {Tour,Gallery} from './Tour';

$(() => {
	svg4everybody();
});


getTours();

var gallery = new Gallery('.gallery');
console.log(gallery);