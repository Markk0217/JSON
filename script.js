let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');


 let jsonDatabase = [
   {
     "title" : "Kurt Cobain",
     "picture_url" : "https://cdn.medcom.id/dynamic/content/2016/03/29/505372/eKpGaISNdo.jpg?w=640",
     "favorite_color" : "black",
     "position" : ["lead vocals", "lead guitar"]
   },
   {
     "title" : "Krist Novoselic",
     "picture_url" : "https://www.ac2news.com/wp-content/uploads/Krist-cc-565x335.jpg",
     "favorite_color" : "black",
     "position" : ["bass","keyboard"]
   },
   {
     "title" : "Dave Grohl",
     "picture_url" : "https://www.rollingstone.com/wp-content/uploads/2018/11/dave-grohl-early-90s-bw-behind-the-drums.jpg?resize=900,600&w=450",
     "favorite_color" : "black",
     "position" : ["drums", "backing vocals"]
   }
 ]



 for (var i = 0; i < jsonDatabase.length; i++) {
   createElementProper(jsonDatabase[i]);
 }

 function createElementMessy(incomingJSON) {
   var completeHTML = "<div class=\"contentItem\" style=\"background-color: " + incomingJSON['favorite_color'] + "\"> <h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3><h4>My Pets:</h4><ul class=\"petList\"><li>Pet 1</li><li>Pet 1</li><li>Pet 1</li></ul></div>";
   contentGridElement.innerHTML = completeHTML;

  /// Start our HTML chunk
    var incompleteHTML = "<div class=\"contentItem\" style=\"background-color: " + incomingJSON['favorite_color'] + "\"> <h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3><h4>My Pets:</h4><ul class=\"petList\">";
  /// Append Pets to the list
    for (var i = 0; i < incomingJSON['position'].length; i++) {
      var petString = "<li>" + incomingJSON['position'][i] + "</li>";
      incompleteHTML += petString;
    }
    /// Complete our HTML chunk
    incompleteHTML += "</ul></div>";
    contentGridElement.innerHTML = incompleteHTML;
 }


function createElementProper(incomingJSON) {

   /// Create whole content item div and set class
   let newContentElement = document.createElement("DIV");
   newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
   newContentElement.classList.add('contentItem');

   /// Create HEADLINE h3, set class, set content
   let newContentHeading = document.createElement("H3");
   newContentHeading.classList.add('contentTitle');
   newContentHeading.innerHTML = incomingJSON['title'];
   /// Add the HEADLINE to the item
   newContentElement.appendChild(newContentHeading);

   /// Create & add LIST HEADLINE to the item
   let newContentSubhead = document.createElement("h4");
   newContentSubhead.innerHTML = "Position:";
   newContentElement.appendChild(newContentSubhead);

   /// Create & add PET LIST to the item
   let newContentPetList = document.createElement("UL");
   newContentElement.appendChild(newContentPetList);

   /// Create & add all the pet LIST ITEMS to the PET LIST
   for (var i = 0; i < incomingJSON['position'].length; i++) {
     var currentPetString = incomingJSON['position'][i];
     var newPetItem = document.createElement("LI");
     newPetItem.innerHTML = currentPetString;
     newContentPetList.appendChild(newPetItem);
   }

   // /// Create & add footer image
   let newImageContainer = document.createElement("DIV");
   newImageContainer.classList.add("footerImageContainer");
   let newImage = document.createElement("IMG");
   newImage.src = incomingJSON['picture_url'];
   newImageContainer.appendChild(newImage);
   newContentElement.appendChild(newImageContainer);

   //Add the item to the page
   contentGridElement.appendChild(newContentElement);

 }
