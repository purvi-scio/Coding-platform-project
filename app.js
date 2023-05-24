const problems1 = [{
    name: "N queens problem",
    difficulty: "Hard",
    acceptance: "65%"
},
{
    name: "Rain water tapping",
    difficulty: "Easy",
    acceptance: "85%"
},
{
    name: "Longest common subsequence", 
    difficulty: "Medium",
    acceptance: "75%"   
}];
const problems2 = [{
    name: "Prefix sum",
    difficulty: "Easy",
    acceptance: "95%"
},
{
    name: "Kadane's algorithm",
    difficulty: "Medium",
    acceptance: "85%"
},
{
    name: "Longest common substring", 
    difficulty: "Medium",
    acceptance: "75%"   
}];

function renderProblems(problems) {
    const parentEL = document.getElementById("problem-statement");
    // we get only the div tag and then fill up the table using JS
    document.createElement("br");
    parentEL.innerHTML = "";
    const TableTag = document.createElement("table");
    for(let i=0;i<problems.length; i++){
        const trTag = document.createElement("tr");
        const tdTag1 = document.createElement("td");
        tdTag1.innerHTML = problems[i].name;
        const tdTag2 = document.createElement("td");
        tdTag2.innerHTML = problems[i].difficulty;
        const tdTag3 = document.createElement("td");
        tdTag3.innerHTML = problems[i].acceptance;

        trTag.appendChild(tdTag1);
        trTag.appendChild(tdTag2);
        trTag.appendChild(tdTag3);
        TableTag.appendChild(trTag);
    }
    parentEL.appendChild(TableTag);
}