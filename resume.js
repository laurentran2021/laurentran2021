var work_experiences = [
    {
        position: "Research Assistant",
        company: "Northwestern University Social Media Lab",
        time: "January 2020 - Present",
        bullet1: "-	Worked with an interdisciplinary research team in conducting a qualitative interview study aimed at boosting the role of social media in promoting awareness of preventative HIV treatment among LGBTQ+ adolescents ",
        bullet2: "-	Contribute to every phase of the study, including participant recruitment and scheduling, regular team meetings, data analysis of over 50 interview transcripts, and working toward publication of the findings",
    },
    {
        position: "TikTok Brand Ambassador",
        company: "Fuse Marketing",
        time: "January 2020 - Present",
        bullet1: "-	Film and edit creative content relating to college students to promote TikTok to the 18-22 age demographic, gaining over 2 million views on the platform",
        bullet2: "-	Participate in TikTok focus groups to provide input on TikTok’s marketing toward college students and TikTok’s diversity, equity, and inclusion initiatives", 
    },
    {
        position: "Web Design and Development Intern",
        company: "Chicago Fashion Week",
        time: "May 2020 - September 2020",
        bullet1: "-	Designed and implemented the newsletter web page on the Chicago Fashion Week website",
        bullet2:"-	Created a streamlined forms system and master spreadsheet to organize Chicago Fashion Week volunteers and press to move the process entirely online",
    },
    {
        position: "Teaching Assistant",
        company: "Northwestern University School of Communication",
        time: "August 2019 - January 2020",
        bullet1: "-	Led class activities and discussions and synthesized required social media posts from an 80+ student lecture on topics including human-centered design, user experience research, and online systems",
        bullet2: "-	Evaluated students’ work by collaborating with the course instruction team; Contributed to the development and implementation of instructional improvements by bringing my unique perspective to bear on the material.",
    },
    {
        position: "Copywriter",
        company: "Northwestern University Media and Design Studio",
        time: "October 2018-  June 2019",
        bullet1: "-	Wrote blog posts for the Media and Design Studio website about digital accessibility",
        bullet2: "-	Built websites for the Weinberg School of Arts and Sciences using HTML",
    },
];

var academic_projects = [
    {
        title: "Shareable",
        class: "Technology and Human Interaction",
        time: "Fall 2019",
        bullet: "-	Performed user testing, heuristic evaluations, and paper and digital prototyping to create a Figma prototype of an app Shareable which allowed Northwestern students to borrow clothing within peer groups for various on campus events such as career fairs, formals, and interviews.",
    },
    {
        title: "Claim Spotting",
        class: "Northwestern University Knight Lab",
        time: "Fall 2019",
        bullet: "-	Implemented a natural language processing script to filter information important to fact check from the Congressional Record and utilized Amazon MTurk and ClaimBuster’s API to crowdsource the importance of fact checking those sentences",
    },
    {
        title: "PhotoFinder",
        class: "Spatial Computing and Spatial Data Science",
        time: "Spring 2019",
        bullet: "-	Initiated learning of Apple’s Swift language and MapKit framework to create an app with a map of photogenic locations on Northwestern’s campus with options for users to add their own locations",
    },

];

function populate_work_experience (work_experiences, experienceSelector){
    let experience = document.querySelector(experienceSelector);
    if (experience){
         if (work_experiences instanceof Array){
             for (let work_experience of work_experiences){
                 let html=`
                    <h2 class="position">${work_experience.position}</h2>
                    <h3 class="company">| ${work_experience.company}</h3>
                     <h4 class="time">| ${work_experience.time}</h4>
                     <p class = "work-description">${work_experience.bullet1}</p>
                     <p class="work-description">${work_experience.bullet2}</p>
                     <br>
                    `

                 let container = document.createElement("div");
                 container.className="work experience";
                 container.innerHTML = html;
                 container.tabIndex = work_experiences.indexOf(work_experience);
                 experience.append(container);
                }
            }
        }
    }

function populate_academic_projects (academic_projects, experienceSelector){
    let experience = document.querySelector(experienceSelector);
    if (experience){
         if (academic_projects instanceof Array){
            for (let academic_project of academic_projects){
                let html=`
                    <h2 class="title">${academic_project.title}</h2>
                    <h3 class="class">| ${academic_project.class}</h3>
                    <h4 class="time">| ${academic_project.time}</h4>
                    <p class = "bullet">${academic_project.bullet}</p>
                    <br>
                    `
    
                let container = document.createElement("div");
                container.className="academic projects";
                container.innerHTML = html;
                container.tabIndex = academic_projects.indexOf(academic_project);
                experience.append(container);
                }
            }
        }
    } 

   