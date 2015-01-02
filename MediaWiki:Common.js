/*
 * This file should be used as the contents of the page:
 *
 * http://telavivmakers.org/index.php/MediaWiki:Common.js
 *
 */

/* Any JavaScript here will be loaded for all users on every page load. */
var tami_is_using_common_js = 1;

/**************************************************************/
/* Add Tow Truck botton (Start Collaborating) on the menu     */
/**************************************************************/
// Set to false or delete to disable analytics/tracking:
TowTruckConfig_enableAnalytics = true;

var towtruck_script = document.createElement("script");
towtruck_script.setAttribute("type", "text/javascript");
towtruck_script.setAttribute("src", "https://towtruck.mozillalabs.com/towtruck.js");
document.getElementsByTagName("head")[0].appendChild(towtruck_script);

var towtruck_button = document.createElement("button");
towtruck_button.setAttribute("onclick", "TowTruck(this); return false;")
towtruck_button.innerHTML = "Start Collaborating";
towtruck_button.style.fontSize = "0.75em";
document.getElementById("p-navigation").getElementsByTagName("div")[0].appendChild(towtruck_button);

/*************************************************************/
/* Set TAMI title to random (*) word starting with I         */
/*************************************************************/

function title_changer()
{
    var title_element = document.getElementById("Welcome_to_Tel_Aviv_Makers_Insurgence_hackerspace.21");
    if (title_element === undefined) {
        //console.log("someone broke the fun script (or just not the main page)");
        return;
    }
    var titles = [
        "Insurgents",
        "Insurmountable", "Interconnected", "Intergalactic",
        "Incredible",
        "Improvement",
        "Israel", "Ideal", "Indomitable", "I", "Igneous", "Incontinent",
        "Ifsoever", "Imminent", "Immanent", "Immunodeficient", "Inconvertible",
        "Incontrovertible", "Inception", "Infinite", "Impish", "Indubitable",
        "Ingenious", "Incontinent", "Inspiring", "Inkfilled", "Invaded", "Ionized",
        "Irresistable", "Isochloric", "Isobath", "Isomagnetic",
        "Industrious", "Inconvincible", "Inexpert", "Intrest-group"
        ];
    var n = titles.length;
    var i = 0;
    var change_title = function() {
        i = Math.floor((Math.random() * n));
        title_element.innerHTML = "Welcome to Tel Aviv Makers " + titles[i] + " hackerspace!";
    }
    change_title();
    setInterval(change_title, 60000);
}
title_changer();

