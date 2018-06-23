import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

//Emplement fade in 'Share it'  block
$(document).ready(function(){
    $(".search-toggle").click(function(){
        $("#searchCollapse").slideToggle("slow");
        $(this).toggleClass("active");
		return false;
    });
});