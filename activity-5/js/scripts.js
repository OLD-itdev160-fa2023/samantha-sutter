/**
 * Wrap everything in an IIFE (Immediately Invoked Function Expression)
 * to keep our variables constrained to the scope of this function and out
 * of the global scope
 */
(function () {

  /****************************************
   * Package data and costructor objects
   ****************************************/
  
// Package data array
    var data = [
        {
        name:'PathIntellisense',
        description: 'This extension helps to autocomplete filenames. Super useful when writing out paths in markup, or in any file that has path references.',
        author: 'Christian Kohler',
        url:'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
        downloads:7927491,
        stars:107,
        price:'Free',
        selector:'p1'
        },
        {
        name:'Beautify',
        description: 'This extension is used for formatting files like HTML. The unformatted code in these files is converted into formatted, readable code by this extension.',
        author:'HookyQR',
        url:'https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify' ,
        downloads: 9073384,
        stars:584,
        price:'Free',
        selector:'p2'
        },
        {
        name:'Prettier',
        description: 'Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.',
        author:'Prettier',
        url:'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
        downloads: 25381440,
        stars:4400,
        price:'Free',
        selector:'p3'
        }
    ];

  // Package constructor function
    function Package(data){
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector= data.selector;

        this.getFormattedDownloads = function(){
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function(){
            return this.stars.toLocaleString();
        };
    }

    /*************************************
     * Utility functions
     *************************************/

    //Return Today's date, formatted
    var getTodaysDate = function() {
        var today = new Date();
            return today.toDateString();
    };

    //return DOM element by id
    var getEl= function(id){
        return document.getElementById(id);
    }
    
    /**
     * 
     * Writes the package object's data to the appropriate
     * DOM elements utilizing the package selector property. 
     */
  var writePackageInfo = function (package) {
      //Get reference to DOM elements
        var selector = package.selector,
            nameEL= getEl(selector + '-name'),
            descEL= getEl(selector + '-description'),
            authEL = getEl(selector + '-author'),
            urlEl = getEl(selector + '-url'),
            downloadEL= getEl(selector + '-downloads'),
            starsEL= getEl(selector + '-stars');
        // Write package to the DOM Elements
            nameEL.textContent = package.name;
            descEL.textContent = package.description;
            authEL.textContent = package.author;
            downloadEL.textContent = package.getFormattedDownloads();
            starsEL.textContent = package.getFormattedStars();
        }
        /*******************************************************         
         * Utilize package data and constructor objects to 
         * construct each package, then add package data to the
         * page via DOM functions.
         *******************************************************/
        
        //write date
        var dateEL = getEl('date');
        dateEL.textContent = getTodaysDate();

        // write data package one-by-one
        var PathIntellisense = new Package(data[0]);
        writePackageInfo(PathIntellisense);

        var Beautify = new Package(data[1]);
        writePackageInfo(Beautify);

        var Prettier = new Package(data[2]);
        writePackageInfo(Prettier);
}());