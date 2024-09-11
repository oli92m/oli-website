let pythonButton = document.getElementById("Python");
let rButton = document.getElementById("R");
let sqlButton = document.getElementById("SQL");
let jsButton = document.getElementById("JS");


// Add text for Python when mouseover
function showPython() {
    pythonButton.style.fontSize = "100%";
    pythonButton.innerText = "I've been using Python for 3 years to build complex projects. During my studies and my " +
        "intership I've used libraries such as Pandas, Selenium and Pytest"
}

function hidePython() {
    pythonButton.style.fontSize = "200%"
    pythonButton.innerText = "Python"
}

pythonButton.addEventListener("mouseover", showPython);
pythonButton.addEventListener("mouseout", hidePython);


// Add text for R when mouseover
function showR() {
    rButton.style.fontSize = "100%";
    rButton.innerText = "Having used R frequently for the past 2 years during my studies at ENSAI, I'm proficient " +
        "wih dplyr"
}

function hideR() {
    rButton.style.fontSize = "200%"
    rButton.innerText = "R"
}

rButton.addEventListener("mouseover", showR);
rButton.addEventListener("mouseout", hideR);


// Add text for SQL when mouseover
function showSQL() {
    sqlButton.style.fontSize = "100%";
    sqlButton.innerText = "I've been using SQL for 2 years during my studies at ENSAI with MySQL and PostgreSQL"
}

function hideSQL() {
    sqlButton.style.fontSize = "200%";
    sqlButton.innerText = "SQL"
}

sqlButton.addEventListener("mouseover", showSQL)
sqlButton.addEventListener("mouseout", hideSQL)


// Add text for JS when mouseover
function showJS() {
    jsButton.style.fontSize = "100%";
    jsButton.innerText = "Always curious about learning new technologies, I've been improving my JavaScript skills" +
        " by building web applications this last year"
}

function hideJS() {
    jsButton.style.fontSize = "200%";
    jsButton.innerText = "JavaScript"
}

jsButton.addEventListener("mouseover", showJS)
jsButton.addEventListener("mouseout", hideJS)
