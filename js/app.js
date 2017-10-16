//------------Model
var model = {
  bio: [ {
      "name": "Laura Logan",
      "role": "Frontend Web Developer",
      "welcomeMessage": "We must let go of the life we have planned, so as to accept the one that is waiting for us.  --Joseph Campbell",
      "biopic":"images/me-400_small.jpg",
      "contacts": {
        "mobile": "724-272-xxxx",
        "email": "LauraRDH@aol.com",
        "github": "https://github.com/LauraLeeLee",
        "location": "Pittsburgh"
      },
      "skills": ["HTML","CSS","JavaScript","Photoshop"]
  ];

  education: [
      "schools": [
        {
        "name":"University of Pittsburgh",
        "location": "Pittsburgh, PA",
        "degree": "Associate",
        "dates": "1986-1988",
        "url":"http://www.dental.pitt.edu/students/dental-hygiene-program",
        "majors": ["Dental Hygiene"]
        }
      ],
      "onlineCourses": [
        {
        "title": "Frontend Web Development",
        "school":"Udacity",
        "url":"https://www.udacity.com",
        "dates": "2016-2017"
        },
        {
        "title": "Intro to JavaScript",
        "school":"Code School",
        "dates": "January 2017",
        "url":"http//www.codeschool.com"
       },
        {
        "title": "Introduction to CSS3 and HTML5",
        "school":"Ed2Go",
        "dates": "March 2016-April 2016",
        "url":"http://www.ed2go.com"
      },
      {
      "title": "Intermediate CSS3 and HTML5",
      "school":"Ed2Go",
      "dates": "May 2016-June 2016",
      "url":"http://www.ed2go.com"
      },
      {
      "title": "Introduction to JavaScript",
      "school":"Ed2Go",
      "dates": "July 2016-August 2016",
      "url":"http://www.ed2go.com"
      }
      ]
  ];

  work: [
    "jobs":[
      {
      "employer": "Centre for Dentistry",
      "title": "Office Manager/Dental Marketer",
      "location": "Cranberry Twp, PA",
      "dates": "1993-present",
      "description":"Help manage daily flow of dental office. Interview and assist in the managment of employees. Manage marketing for new and existing patients."
    },
    {
      "employer": "Dr. Irving Kraft",
      "title": "Dental Hygienist",
      "location": "Philadelphia, PA",
      "dates": "1988-1993",
      "description":"Provide prophylaxis, root planing and scaling, take necessary xrays, patient education, treatment presentation."
    }
    ]
  ];

  projects: [
    "projects": [
      {
      "title": "Portfolio Project",
      "dates": "December, 2016",
      "description": "Udacity project utilizing skills learned of HTML, CSS and responsiveness",
      "images": ["images/portfolio1-250_xsmall.png", "images/portfolio2-250_xsmall.png"
      ]
      },

      {
      "title": "Roma",
      "dates": "August 2015",
      "description": "Journey through the Eternal City",
      "images": ["images/rome1-250_xsmall.jpg", "images/rome2-250_xsmall.jpg","images/rome3-250_xsmall.jpg"
      ]
      },

      {
      "title": "Fiorenze",
      "dates": "September 2011",
      "description": "Discovery of Renessaince history",
      "images":["images/florence3-250_xsmall.jpg","images/florence4-250_xsmall.jpg","images/florence5-250_xsmall.jpg"
      ]
      }
    ];
};

//----------Octopus
var octopus = {

};


var


//------------Views
var bioView = {
  init: function(){
    var HTMLheaderName = '<h1 id="name">%data%</h1>';
    var HTMLheaderRole = '<span>%data%</span><hr>';

    var HTMLcontactGeneric = '<li class="flex-item"><span class="blue-text">%contact%</span><span class="white-text">%data%</span></li>';
    var HTMLmobile = '<li class="flex-item"><span class="blue-text">mobile</span><span class="white-text">%data%</span></li>';
    var HTMLemail = '<li class="flex-item"><span class="blue-text">email</span><span class="white-text">%data%</span></li>';
    var HTMLtwitter = '<li class="flex-item"><span class="blue-text">twitter</span><span class="white-text">%data%</span></li>';
    var HTMLgithub = '<li class="flex-item"><span class="blue-text">github</span><span class="white-text">%data%</span></li>';
    var HTMLblog = '<li class="flex-item"><span class="blue-text">blog</span><span class="white-text">%data%</span></li>';
    var HTMLlocation = '<li class="flex-item"><span class="blue-text">location</span><span class="white-text">%data%</span></li>';

    var HTMLbioPic = '<img src="%data%" class="biopic">';
    var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

    var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
    var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
  }
};

var workView = {
  init: function(){
    var HTMLworkStart = '<div class="work-entry"></div>';
    var HTMLworkEmployer = '<a href="#">%data%';
    var HTMLworkTitle = ' - %data%</a>';
    var HTMLworkDates = '<div class="date-text">%data%</div>';
    var HTMLworkLocation = '<div class="location-text">%data%</div>';
    var HTMLworkDescription = '<p><br>%data%</p>';
  }
};

var projectView = {
  init: function(){
    var HTMLprojectStart = '<div class="project-entry blue"></div>';
    var HTMLprojectTitle = '<a href="#">%data%</a>';
    var HTMLprojectDates = '<div class="date-text">%data%</div>';
    var HTMLprojectDescription = '<p><br>%data%</p>';
    var HTMLprojectImage = '<img src="%data%" id="%id">';
  }
};

var educationView = {
  init: function(){
    var HTMLschoolStart = '<div class="education-entry"></div>';
    var HTMLschoolName = '<a href="#">%data%';
    var HTMLschoolDegree = ' -- %data%</a>';
    var HTMLschoolDates = '<div class="date-text">%data%</div>';
    var HTMLschoolLocation = '<div class="location-text">%data%</div>';
    var HTMLschoolMajor = '<em><br>Major: %data%</em>';

    var HTMLonlineClasses = '<h3>Online Classes</h3>';
    var HTMLonlineTitle = '<a href="#">%data%';
    var HTMLonlineSchool = ' - %data%</a>';
    var HTMLonlineDates = '<div class="date-text">%data%</div>';
    var HTMLonlineURL = '<br><a href="#">%data%</a>';  
  }
};
