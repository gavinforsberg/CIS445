let jsonObj =
{
	"SY": [{
		"year": "2020",
		"Semester": "Fall",
			"Departments": [{
				"Department": "CIS",
				"Classes": [{
						"Course": "CIS430",
						"CourseTitle": "Information Technology Infrastructure",
						"Sections": [{
							"Section": "01",
							"Days": "TT",
							"Time": "10:30PM - 11:45AM",
							"Room": "Online Only",
							"Instructor": "Tachun Lin"
						}]
					},
					{
						"Course": "CIS435",
						"CourseTitle": "Computer Networks and System Infrastructure",
						"Sections": [{
							"Section": "01",
							"Days": "TT",
							"Time": "1:30PM - 2:45PM",
							"Room": "BR160",
							"Instructor": "Yun Wang"
						}]
					}
				]
			}, {
				"Department": "CS",
				"Classes": [{
						"Course": "CS102",
						"CourseTitle": "Data Structures",
						"Sections": [{
							"Section": "01",
							"Days": "TT",
							"Time": "10:30PM - 11:45PM",
							"Room": "BR160",
							"Instructor": "Yung Wang"
						}, {
							"Section": "02",
							"Days": "TT",
							"Time": "1:30PM - 2:45PM",
							"Room": "BR150",
							"Instructor": "Yun Wang"
						}]
					},
					{
						"Course": "210",
						"CourseTitle": "Advanced Data Structures and Algorithms",
						"Sections": [{
							"Section": "01",
							"Days": "TT",
							"Time": "9:00AM - 10:15AM",
							"Room": "156",
							"Instructor": "Young Park"
						}, {
							"Section": "02",
							"Days": "TT",
							"Time": "3:00PM - 4:15PM",
							"Room": "BR160",
							"Instructor": "Young Park"
						}]
					}
				]
			}]
	}, {
		"year": "2021",
		"Semester": "Spring",
			"Departments": [{
				"Department": "CIS",
				"Classes": [{
						"Course": "CIS300",
						"CourseTitle": "Computers in Society",
						"Sections": [{
							"Section": "01",
							"Days": "M",
							"Time": "6:00PM - 8:45PM",
							"Room": "Online Only",
							"Instructor": "Vladimir Uskov"
						}]
					},
					{
						"Course": "CIS415",
						"CourseTitle": "Applied Cryptography",
						"Sections": [{
							"Section": "01",
							"Days": "TT",
							"Time": "3:00PM - 4:15PM",
							"Room": "Online Only",
							"Instructor": "Jonathan Scott Williams"
						}]
					}
				]
			}, {
				"Department": "CS",
				"Classes": [{
						"Course": "CS141",
						"CourseTitle": "Introduction to Python Programming",
						"Sections": [{
							"Section": "01",
							"Days": "TT",
							"Time": "4:30PM - 5:45PM",
							"Room": "Online Only",
							"Instructor": "David Brennan"
						}, {
							"Section": "02",
							"Days": "TT",
							"Time": "3:00PM - 4:15PM",
							"Room": "Online Only",
							"Instructor": "David Brennan"
						}]
					},
					{
						"Course": "CS220",
						"CourseTitle": "Computer Architecture",
						"Sections": [{
							"Section": "01",
							"Days": "TT",
							"Time": "10:30AM - 11:45AM",
							"Room": "Online Only",
							"Instructor": "Jiang B Liu"
						}, {
							"Section": "02",
							"Days": "MW",
							"Time": "1:00PM - 2:15PM",
							"Room": "Online Only",
							"Instructor": "Yun Wang"
						}]

					}
				]
			}]
	}]
}

/* Trying w dom manipulation */	
'use strict';                                               

(function() { 
	window.addEventListener('load', init);
	
    function init() 
    {
        // Displays Semester: Fall 2020
        id("paragraph").innerHTML += "----------------------------------------------------------------------------------";
        id("paragraph").innerHTML += "<br>Semester: " + jsonObj.SY[0].Semester + " " + jsonObj.SY[0].year +"<br>" + "Department: " + jsonObj.SY[0].Departments[0].Department + "<br>";
        id("paragraph").innerHTML += "----------------------------------------------------------------------------------<br>";

        // Displays Fall 2020 CIS Classes
        for (let course in jsonObj.SY[0].Departments[0].Classes)
        {
            id("paragraph").innerHTML += "Course: " + jsonObj.SY[0].Departments[0].Classes[course].Course + " " + jsonObj.SY[0].Departments[0].Classes[course].CourseTitle + "<br>";
            
            for(section in jsonObj.SY[0].Departments[0].Classes[course].Sections)
            {
                let path = jsonObj.SY[0].Departments[0].Classes[course].Sections[section];

                for(info in path)
                {
                    id("paragraph").innerHTML += info + ": " + path[info] + "<br>";
                }
                id("paragraph").innerHTML += "<br>";
            }
		}
		
		// Displays Semester: Fall 2020 CS
		id("paragraph").innerHTML += "<br>----------------------------------------------------------------------------------";
		id("paragraph").innerHTML += "<br>Semester: " + jsonObj.SY[0].Semester + " " + jsonObj.SY[0].year +"<br>" + "Department: " + jsonObj.SY[1].Departments[1].Department + "<br>";
		id("paragraph").innerHTML += "----------------------------------------------------------------------------------<br>";

        // Displays Fall2020 CS Classes
        for (let course in jsonObj.SY[0].Departments[1].Classes)
        {
            
            id("paragraph").innerHTML += "Course: " + jsonObj.SY[0].Departments[1].Classes[course].Course + " " + jsonObj.SY[0].Departments[1].Classes[course].CourseTitle + "<br>";
            
            for(section in jsonObj.SY[0].Departments[1].Classes[course].Sections)
            {

                let path = jsonObj.SY[0].Departments[1].Classes[course].Sections[section];

                for(info in path)
                {
                    id("paragraph").innerHTML += info + ": " + path[info] + "<br>";
				}
				id("paragraph").innerHTML += "<br>";
            }
        }


        // Displays Semester: Spring 2021 CIS
        id("paragraph").innerHTML += "<br>----------------------------------------------------------------------------------";
        id("paragraph").innerHTML += "<br>Semester: " + jsonObj.SY[1].Semester + " " + jsonObj.SY[1].year +"<br>" + "Department: " + jsonObj.SY[1].Departments[0].Department + "<br>";
        id("paragraph").innerHTML += "----------------------------------------------------------------------------------<br>";

        // Displays Spring 2021 CIS Classes
        for (let course in jsonObj.SY[1].Departments[0].Classes)
        {
            id("paragraph").innerHTML += "Course: " + jsonObj.SY[1].Departments[0].Classes[course].Course + " " + jsonObj.SY[1].Departments[0].Classes[course].CourseTitle + "<br>";
            
            for(section in jsonObj.SY[1].Departments[0].Classes[course].Sections)
            {

                let path = jsonObj.SY[1].Departments[0].Classes[course].Sections[section];

                for(info in path)
                {
                    id("paragraph").innerHTML += info + ": " + path[info] + "<br>";
                }
                id("paragraph").innerHTML += "<br>";
            }
        }

		// Displays Semester: Spring 2021 CS
		id("paragraph").innerHTML += "<br>----------------------------------------------------------------------------------";
		id("paragraph").innerHTML += "<br>Semester: " + jsonObj.SY[1].Semester + " " + jsonObj.SY[1].year +"<br>" + "Department: " + jsonObj.SY[1].Departments[1].Department + "<br>";
		id("paragraph").innerHTML += "----------------------------------------------------------------------------------<br>";

        // Displays Spring 2021 CIS Classes
        for (let course in jsonObj.SY[1].Departments[1].Classes)
        {
            id("paragraph").innerHTML += "Course: " + jsonObj.SY[1].Departments[1].Classes[course].Course + " " + jsonObj.SY[1].Departments[1].Classes[course].CourseTitle + "<br>";
            
            for(section in jsonObj.SY[1].Departments[1].Classes[course].Sections)
            {

                let path = jsonObj.SY[1].Departments[1].Classes[course].Sections[section];

                for(info in path)
                {
                    id("paragraph").innerHTML += info + ": " + path[info] + "<br>";
                }
                id("paragraph").innerHTML += "<br>";
            }
        }
    }


    /* ----------Helper Functions---------- */ 
    function gen(tagName) {
        return document.createElement(tagName)
    }

    function id(idName) {
        return document.getElementById(idName);
    }

    function qs(selector) {
        return document.querySelector(selector);
    }

    function qsa(selector) { 
        return document.querySelectorAll(selector);
    }

})();