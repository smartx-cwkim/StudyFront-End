/*
This is empty on purpose! Your code to build the resume will go here.
 */

$("#main").append("Chorwon  Kim");

name = "chorwon Kim";
role = "hello world";
newFirstName = "chorwon Kim";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

name = name.slice(0,2);

console.log(name);

var array = ["hi", "hello", "good", 4];
var newArray = [];

newArray = array;
newArray[3] = newArray[3]+1;
var call = array.length;

console.log(newArray);

var skills = ["awesomeness", "programming", "teaching", "JS"];

var bio = {
    "name" : "Chorwon",
    "role" : "Graduated Student",
    "contacts" : {
        "mobile" : "010-0000-0000",
        "email" : "cwkim@smartx.kr",
        "github" : "smartx-cwkim",
        "location" : "GwangJu"
    },
    "welcomeMessage" : "fjslfjhwof8",
    "skills" : skills,
    "bioPic" : "images/fry.jpg"
};

$("#main").append(bio.contacts.email);
console.log(bio.skills.length);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
};


var jobs1 = {"employer":"Sherlock", "title":"servant", "location":"london", "dates":"in progress", "description":"string"};
var jobs2 = {"employer":"JongWon Kim", "title":"servant", "location":"GwangJu", "dates":"in progress", "description":"bald"};
var work = {
    "jobs" : {
        jobs1,
        jobs2
    }
};


for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formatted = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
    $(".work-entry:last").append(formatted);

    // 각 문장마다 var 선언마다 일일히 $(".work-entry:last").append(var);를 붙여도 된다.
    // for-in loops are considered to be general bad practice when writing JavaScript.
    // because it has some inconsistent behavior with arrays and objects.
}

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
    // var e = event.pageX;
    // var ex = event.pageY;

    // logClicks(e,ex);
    // 나중에 둘 간의 차이를 공부해야 한다. 혹시 event가 더 상위의 개념인가?

    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});
// $(document).click() is a jQuery event handler on the page,
// which is a fancy wawy of saying that it will hold some code that runs every time a user clicks on the page.

// bio.city = "Mountain View";s
// bio["xxxxx"] = "xxxxxxxxxxx";

// console.log(bio.city);

// $("#main").append(bio.xxxxx);

// var education = {
//     "schools" : [
//     {
//         "name" : "GIST",
//         "city" : "GwangJu",
//         "degree" : "M.S",
//         "major" : ["CompSci", "InfoCom"]
//     },
//     {
//         "name" : "Sejong",
//         "city" : "Seoul",
//         "degree" : "BA",
//         "major" : ["InfoCom"]
//     },
//     ]
// }

$("#header").append(internationalizeButton)

function inName(string) {
    var temp = string.split(" ");

    temp[1] = temp[1].toUpperCase();

    var result = temp[0]+ " " + temp[1];

    return result;
}

var project = {'title':'koren', 'dates':'2017.07.25', 'description':'fuck!', 'image':"/images/fry.jpg"};
$('#projects').append(HTMLprojectStart);


function Projects() {

  this.display = function() {
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
    console.log(project.title);
    $(".project-entry:last").append(formattedprojectTitle);
    var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedprojectDates);

    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedprojectDescription);
    var formattedprojectImage = HTMLprojectImage.replace("%data%", project.image);
    $(".project-entry:last").append(formattedprojectImage);
  }
}

var projects = new Projects();

projects.display();


$("mapDiv").append(googleMap);


var outsideExample = "First string";
if (true) {
    var outsideExample = "Second string";
    console.log(outsideExample);
}
console.log(outsideExample);
// if statement do not create their own scope.


/////////////////////////// checking Function Declaration Syntax
/* example1();
   function example1() {
       xxxxx
   }

   => same as

  var example1();
  example1 = function() {
     xxxxx
  }
  example1();


  but, in this case

  example2();
  var example2 = function() {
     ppppp;
  }

  => same as

  var example2;
  example2();
  example2 = function() {
     ppppp;
  }
*/




var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {
    var locationArray = [];

    for(job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));