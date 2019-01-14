// function Bird() {
// 	this.name = "Albert";
// 	this.color = "blue";
// 	this.numLegs = 2;
// }

// let blueBird = new Bird();

// console.log(blueBird.name);
// console.log(blueBird.numLegs);

// blueBird.name = "Elvira";
// console.log(blueBird.name);

// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];
// // Add your code below this line

// for (let property in canary) {
//   if(canary.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }

// console.log(ownProps);

// console.log(10/16);


// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // we keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
  console.log(tabsBeforeIndex);
  var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab
  console.log(tabsAfterIndex);

  // this creates a problem since .splice() modifies the array, therefore the tabsAfterIndex is a different array than the tabsBeforeIndex

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together 
  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'Instagram', 'Fantasy']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

// Now perform the tab opening, closing, and other operations
// var finalTabs = socialWindow
                    // .tabOpen() // Open a new tab for cat memes
                    // .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                    // .join(workWindow.tabClose(1).tabOpen());

// console.log(finalTabs.tabs);

console.log(socialWindow.tabClose(3));
