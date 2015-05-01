// document.addEventListener('polymer-ready', function() {
//   var navicon = document.getElementById('navicon');
//   var drawerPanel = document.getElementById('drawerPanel');
//   navicon.addEventListener('click', function() {
//     drawerPanel.togglePanel();
//   });
// });

// Polymer({
// selectAction: function(e, detail) {
//   if (detail.isSelected) {
//     // var selectedItem = detail.item.label;
//     // this.MainTitle = selectedItem;
//   }}
// });

var template  = document.querySelector('#t');


template.pages = [
{name: 'Groups'         , hash: 'groups'  ,         icon: 'social:group' , isMenuItem: true },
{name: 'Scientists'     , hash: 'scientists'  ,     icon: 'social:school', isMenuItem: true },
{name: 'Open Positions' , hash: 'open-positions',   icon: 'work'         , isMenuItem: true },
{name: 'Upcoming Events', hash: 'upcoming-events' , icon: 'event'        , isMenuItem: true },
];

template.l2pages = [
{name: ''         ,hash: 'group'          ,icon:'' ,isMenuItem: false },
{name: ''         ,hash: 'scientist'      ,icon:'' ,isMenuItem: false },
{name: ''         ,hash: 'open-position'  ,icon:'' ,isMenuItem: false },
{name: ''         ,hash: 'upcoming-event' ,icon:'' ,isMenuItem: false },
];

// // var routeDir = "http://localhost:8000/projects/web-projects/fosker/forsker-frontend"
// var routeDir = ""

// var DEFAULT_ROUTE = routeDir + "";

// // Use URL hash for initial route. Otherwise, use the first page.
// this.router = this.router || DEFAULT_ROUTE;

// var groups = function() {
// 	template.route = "groups";
// 	console.log("here");
//   // pages.selected = "groups";
// };
// var scientists = function() {
//   // pages.selected = "scientists";
// };
// var openPositions = function() {
//   // pages.selected = "open-positions";
// };
// var upcomingEvents = function() {
//   // pages.selected = "upcoming-events";
// };
// var index = function(){
// 	console.log("sdfafd");
// }

// var routes = {
//   '': index,
//   '/groups': groups,
//   '/scientists': scientists,
//   '/open-positions': openPositions,
//   '/upcoming-events': upcomingEvents
// };

// var router = template.router = Router(routes);
// router.configure({html5history: true});
// router.init(DEFAULT_ROUTE);

// // Listen for pages to fire their change-route event
// // Instead of letting them change the route directly,
// // handle the event here and change the route for them
// document.addEventListener('change-route', function(e) {
//   if (e.detail) {
//     router.setRoute(e.detail);
//   }
// });

// template.navigate = function(e, detail, sender) {
// 	e.preventDefault();
//     this.fire('change-route', sender.href);
// 	// template.currentPage = sender.templateInstance.model.page.hash;
// };

var DEFAULT_ROUTE = "groups";
template.addEventListener('template-bound', function(e) {
this.route = this.route || DEFAULT_ROUTE;

});

template.menuItemSelected = function(e, detail, sender) {
if (detail.isSelected) {
  // this.$ && this.$.scaffold.closeDrawer();
}
};

template.keyHandler = function(e, detail, sender) {
var pages = document.querySelector('#pages');

switch (detail.key) {
  case 'left':
  case 'up':
    pages.selectPrevious();
    // template.currentPage = pages.selected;
    break;
  case 'right':
  case 'down':
    pages.selectNext();
    // template.currentPage = pages.selected;
    break;
  case 'space':
    detail.shift ? pages.selectPrevious() : pages.selectNext();
    // template.currentPage = pages.selected;
    break;
}
};



// document.addEventListener("DOMContentLoaded", function(e){
//     console.log("dom ready");//output to web browser console
//     	var pageToLoad  = document.querySelector('#t');
// 	console.log(pageToLoad);
// });
// function route(){
	// var url = window.location.href;
	// var urlPageStartIndx = url.search('#');
	// var page = url.slice(urlPageStartIndx+1);
	// var tt =template.content.querySelector('#pages');
	// var mainAr =template.content.querySelector('#mainContent');
	// tt. = page;
	// mainAr.appendChild(tt);
	// console.log(pageToLoad);
// }

function checkPolymerRegister(){
	function isUnregisteredCustomElement(el) {
	  if (el.constructor == HTMLElement) {
	    console.error("Found unregistered custom element:", el);
	    return true;
	  }
	  return false;
	}
	 
	function isCustomEl(el) {
	  return el.localName.indexOf('-') != -1 || el.getAttribute('is');
	}
	  
	//document.addEventListener('polymer-ready', function() {
	  var allCustomElements = document.querySelectorAll('html /deep/ *');
	  allCustomElements = Array.prototype.slice.call(allCustomElements).filter(function(el) {
	    return isCustomEl(el);
	  });
	 
	  var foundSome = false;
	  for (var i = 0, el; el = allCustomElements[i]; ++i) {
	    if (isUnregisteredCustomElement(el)) {
	      foundSome = true;
	    }
	  }
	 
	  if (foundSome) {
	    alert('Oops: found one or more unregistered custom elements in use! Check the console.');
	  } else {
	    alert('Good: All custom elements are registered :)'); 
	}
}

