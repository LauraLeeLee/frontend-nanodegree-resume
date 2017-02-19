var work = {
  "jobs":[
    {
    "employer": "Centre for Dentistry",
    "title": "Office Manager/Dental Marketer",
    "location": "Cranberry Twp, PA",
    "dates": "1993-present",
    "description":"Help manage daily flow of dental office. Interview and manage employees. Manage marketing for new and existing patients."
   }
  ]
}
var projects = {
  "projects": [
    {
    "title": "Roma",
    "dates": "August 2015",
    "description": "Journey through the Eternal City",
    "images": ["images/colosseum.jpg"
     ]
    }
  ]
}
var bio ={
    "name": "Laura Logan",
    "role": "Frontend Web Developer",
    "location": "Pittsburgh",
    "picture": "images/fry.jpg ",
    "welcomeMessage": "Life is like a box of chocolates",
    "biopic":"",
    "contacts": {
      "mobile": "724-272-xxxx",
      "email": "LauraRDH@aol.com",
      "github": "https://github.com/LauraLeeLee"
    },
    "skills": ["HTML","CSS","JavaScript","PhotoShop"]
}

var education = {
    "schools": [
      {
      "name":"University of Pittsburgh",
      "location": "Pittsburgh, PA",
      "degreeDates": 1988,
      "url":" " ,
      "majors": ["Dental Hygiene"]
      }
    ],
    "onlineCourses": [
      {
      "title": "Frontend Web Development",
      "school":"Udacity",
      "url":"www.udacity.com",
      "dates": "2017"
      },
      {
      "title": "Intro to JavaScript",
      "school":"Code School",
      "dates": "January 2017",
      "url":"www.codeschool.com"
      }
    ]
}


  var formattedWelcomeMsg= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").prepend(formattedWelcomeMsg);

  var formattedName= HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedRole= HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(formattedRole);

  var formattedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedGithub= HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedEmail=  HTMLemail.replace("%data%",bio.contacts.email);
  $("#topContacts").prepend(formattedMobile);
  $("#topContacts").prepend(formattedGithub);
  $("#topContacts").prepend(formattedEmail);

  var formattedBioPic = HTMLbioPic.replace("%data%",bio.picture);
  $("#header").prepend(formattedBioPic);

  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    var formattedSkill= HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
     formattedSkill= HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
     formattedSkill= HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill= HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkill);
  }

 function displayWork (){
    for(var i=0; i<work.jobs.length; i++){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer= HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
      var formattedWorkTitle= HTMLworkTitle.replace("%data%",work.jobs[i].title);
      var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedWorkLocation= HTMLworkLocation.replace("%data%",work.jobs[i].location);
      $(".work-entry:last").prepend(formattedWorkLocation);
      var formattedWorkDates= HTMLworkDates.replace("%data%",work.jobs[i].dates);
      $(".work-entry:last").append(formattedWorkDates);
      var formattedWorkDescription=HTMLworkDescription.replace("%data%",work.jobs[i].description);
      $(".work-entry:last").append(formattedWorkDescription);
     }
 };  displayWork(work.jobs);


//var itemAtTheIndex = myArray[indexValue]

/*work.jobs.forEach(function(i) {
   $("#workExperience").append(HTMLworkStart);
  var formattedEmployer= HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
  var formattedWorkTitle= HTMLworkTitle.replace("%data%",work.jobs[i].title);
  var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedWorkLocation= HTMLworkLocation.replace("%data%",work.jobs[i].location);
  $(".work-entry:last").prepend(formattedWorkLocation);
  var formattedWorkDates= HTMLworkDates.replace("%data%",work.jobs[i].dates);
  $(".work-entry:last").append(formattedWorkDates);
  var formattedWorkDescription=HTMLworkDescription.replace("%data%",work.jobs[i].description);
  $(".work-entry:last").append(formattedWorkDescription);
  console.log(job);
});  */

/*work.jobs.forEach(function(currentJob) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer= HTMLworkEmployer.replace("%data%", currentJob.employer);*/



    projects.display= function(){
    for(var i=0; i<projects.projects.length; i++){
      $("#projects").append(HTMLprojectStart);
      var formattedProjectTitle= HTMLprojectTitle.replace("%data%",projects.projects[i].title);
      $(".project-entrylast").append(formattedProjectTitle);
      var formattedProjectDates= HTMLprojectDates.replace("%data%",projects.projects[i].dates);
      $(".project-entrylast").append(formattedProjectDates);
      var formattedProjectDescription= HTMLprojectDescription.replace("%data%",projects.projects[i].description);
      $(".project-entrylast").append(formattedProjectDescription);
      var formattedProjectImage= HTMLprojectImage.replace("%data%",projects.projects[i].image);
      $(".project-entry:last").append(formattedProjectImage);
    }
  };   projects.display();

function inName(name) {
  name= name.trim().split(" ");
  console.log(name);
  name[0]= name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1]=name[1].toUpperCase();

  return name[0] +" " + name[1];
}
$("#main").append(internationalizeButton);


$(document).click(function(loc) {
  var x= loc.pageX;
  var y= loc.pageY;

  logClicks(x,y);
});
