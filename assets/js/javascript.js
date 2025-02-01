document.addEventListener("DOMContentLoaded", function() {
    // About Me Section
    // <<NEED TO CHANGE "Fast Last NAME" PART>>
    document.querySelector(".about-me h1").innerHTML = "Fast Last NAME";
    document.querySelector(".about-me p").innerHTML = "FREELANCE WEB PROGRAMMER";
    document.querySelector(".about-me a").innerHTML = "I have a strong understanding of business etiquette, including setting work priorities, providing reports, and maintaining effective communication.";
});

// DETAIL
document.addEventListener("DOMContentLoaded", function() {
    // Contact Me Section
    // <<NEED TO CHANGE "XXX" PART>>
    document.querySelector(".add").innerHTML = "XXX, x-xx-xx, Xxxxx, Xxxx-ku, Xxxxx, <br>5XX-xxxx,";
    document.querySelector(".tel").innerHTML = "tel: 070-xxxx-xxxx";
    document.querySelector(".email").innerHTML = "email: xxxxx@gmail.com";

    // Education Section
    // <<NEED TO CHANGE "XXX" "YYYY"PART>>
    // document.querySelector(".h-school").innerHTML = "1985-1987";
    document.querySelector(".h-school").innerHTML = "YYYY-YYYY";
    document.querySelector(".h-name").innerHTML = "XXXXX-XXXX Highschool";
    // document.querySelector(".uni").innerHTML = "1988-1991";
    document.querySelector(".uni").innerHTML = "YYYY-YYYY";
    document.querySelector(".u-name").innerHTML = "XXXXX Womens University";

    // Experience Section
    // <<NEED TO CHANGE "YYYY"PART>>
    // document.querySelector(".experience-1").innerHTML = "2018-PRESENT";
    document.querySelector(".experience-1").innerHTML = 
    "YYYY-PRESENT";
    document.querySelector(".task-1").innerHTML = "Accounting Assistant <br>General Affairs Tasks";
    document.querySelector(".ability-1").innerHTML = "I created checklists to verify tasks and focused on maintaining a steady rhythm to work efficiently without making mistakes. As a result, I can complete even high-volume tasks independently.";

    // document.querySelector(".experience-2").innerHTML = "2011-2017";
    document.querySelector(".experience-2").innerHTML = "YYYY-YYYY";
    document.querySelector(".task-2").innerHTML = "Sales Administration <br>General Office Work <br>Data Entry";
    document.querySelector(".ability-2").innerHTML = "I use a computer (Excel, Word) daily to prepare monthly reports and compile customer information. I always strive to create documents and files that are clear and understandable for anyone.";

    // document.querySelector(".experience-3").innerHTML = "1991-1994";
    document.querySelector(".experience-3").innerHTML = "YYYY-YYYY";
    document.querySelector(".task-3").innerHTML = "Programmer/Software Engineer";
    document.querySelector(".ability-3").innerHTML = "My experience in programming dates back quite a while. Although I don't have practical experience in web design, I am continuously applying what I have learned from online courses to my daily work and striving to improve.";
});

// SKILLS
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        const skillName = skill.getAttribute('data-skill');
        const skillLevel = skill.getAttribute('data-level');

        skill.innerHTML = `
            <div class="skill-name">${skillName}</div>
            <div class="skill-bar">
                <div class="skill-level" style="width: ${skillLevel}%;"></div>
            </div>
        `;
    });
});