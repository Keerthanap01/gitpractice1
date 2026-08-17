let btn=document.getElementById("feedback-btn");
btn.addEventListener("click", function(){
    alert("submitted feedback");
    document.getElementById("employeeName").value="";
    document.getElementById("feedbackText").value="";
})
const skills = [];

class Skill {
    #duration;
    constructor(category, skillName, duration) {
        this.category = category;
        this.skillName = skillName;
        this.#duration = duration;
    }
    message() {
    alert(this.skillName + " skill has been added");
    }
    getDuration() {
       return this.#duration;
    }

    setDuration(duration) {
        if (duration > 0) {
            this.#duration = duration;
            }

    }
}
class AppDev extends Skill{
    constructor(category,skillName,duration,tools){
        super(category,skillName,duration);
        this.tools=tools;
    }
    message(){
        alert("for " + this.skillName +" work with " + this.tools)
    }
}
class DataAndAnalytics extends Skill{
    constructor(category,skillName,duration,db){
        super(category,skillName,duration);
        this.db=db;
    }
     message(){
        alert("for " + this.skillName +" work with " + this.db +" database")
    }
}
function createSkill() {
    document.getElementById("skillForm").style.display = "block";
}
function saveSkill() {
    let category = document.getElementById("category").value;
    let skillName = document.getElementById("skillName").value;
    let duration = document.getElementById("duration").value;
    let tools =  document.getElementById("tools").value;
    let db =  document.getElementById("db").value;

    const skill = new Skill(category, skillName, duration);

    skills.push(skill);
    if (category=="AppDev"){
       appdevskill=new AppDev(category, skillName, duration,tools);
       appdevskill.message()
    }
    else if(category=="DataAndAnalytics"){
       dataskill=new DataAndAnalytics(category, skillName, duration,db);
       dataskill.message()
    }
   
}


function showBulkSection() {
    let card = document.getElementById("bulkCard");
    if (!card) {
        card = document.createElement("div");
        card.id = "bulkCard";
        card.className = "card";
        card.innerHTML = `
            <h3>Bulk Insert Skills</h3>
            <p>Enter skills (one per line)</p>
            <textarea id="bulkInput" rows="5"></textarea>
            <br><br>
            <button onclick="processBulkInsert()">
                Import Skills
            </button>
        `;
        document.body.appendChild(card);
    } else {
        card.style.display =
            card.style.display === "none" ? "block" : "none";
    }
}

function processBulkInsert() {
    let skills = document
        .getElementById("bulkInput")
        .value
        .split("\n");
    let skillList = document.getElementById("skillsList");
    let count = 0;
    for (let skill of skills) {
        skill = skill.trim();
        if (skill) {
            let li = document.createElement("li");
            li.textContent = skill;
            skillList.appendChild(li);
            count++;
        }
    }
    if (count === 0) {
        alert("Please enter at least one skill");
        return;
    }
    alert(count + " skills imported successfully");
    document.getElementById("bulkInput").value = "";
    document.getElementById("bulkCard").style.display = "none";
}
