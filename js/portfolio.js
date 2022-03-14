// Load function for view all projects
window.onload = allProjects;
document.getElementById("All").className = "tab-link active";
// All Projects
function allProjects() {
  var projectList = "";
  for (var i = 0; i < portfolio.length; i++) {
    projectList +=
      "<a id='myBtn' class='link-project'><div class='card-portfolio'><h3>" +
      portfolio[i].project +
      "</h3><hr/><p>" +
      portfolio[i].category +
      "</p></div><img class='img-project' src='" +
      portfolio[i].url +
      "' ></a>";
  }
  document.getElementById("Projects").innerHTML = projectList;
  document.getElementById("All").className = "tab-link active";
  document.getElementById("Branding").className = "tab-link aaaa";
  document.getElementById("Web").className = "tab-link";
  document.getElementById("Photography").className = "tab-link";
  document.getElementById("App").className = "tab-link";
  const loadmore = document.querySelector("#loadmore");
  loadmore.style.display = "table";
}
// Filter by Branding
function brandingProjects() {
  var projectList = "";
  for (var i = 0; i < portfolio.length; i++) {
    var categoryProject = portfolio[i].category.toString();
    if (categoryProject === "Branding") {
      projectList +=
        "<a class='link-project'><div class='card-portfolio'><h3>" +
        portfolio[i].project +
        "</h3><hr/><p>" +
        portfolio[i].category +
        "</p></div><img class='img-project' src='" +
        portfolio[i].url +
        "' ></a>";
    }
  }
  document.getElementById("Projects").innerHTML = projectList;
  document.getElementById("All").className = "tab-link";
  document.getElementById("Branding").className = "tab-link active";
  document.getElementById("Web").className = "tab-link";
  document.getElementById("Photography").className = "tab-link";
  document.getElementById("App").className = "tab-link";
  const loadmore = document.querySelector("#loadmore");
  loadmore.style.display = "table";
}
// Filter by Web
function webProjects() {
  var projectList = "";
  for (var i = 0; i < portfolio.length; i++) {
    var categoryProject = portfolio[i].category.toString();
    if (categoryProject === "Web") {
      projectList +=
        "<a class='link-project'><div class='card-portfolio'><h3>" +
        portfolio[i].project +
        "</h3><hr/><p>" +
        portfolio[i].category +
        "</p></div><img class='img-project' src='" +
        portfolio[i].url +
        "' ></a>";
    }
  }
  document.getElementById("Projects").innerHTML = projectList;
  document.getElementById("All").className = "tab-link";
  document.getElementById("Branding").className = "tab-link";
  document.getElementById("Web").className = "tab-link active";
  document.getElementById("Photography").className = "tab-link";
  document.getElementById("App").className = "tab-link";
  const loadmore = document.querySelector("#loadmore");
  loadmore.style.display = "table";
}
// Filter by Photography
function photographyProjects() {
  var projectList = "";
  for (var i = 0; i < portfolio.length; i++) {
    var categoryProject = portfolio[i].category.toString();
    if (categoryProject === "Photography") {
      projectList +=
        "<a class='link-project'><div class='card-portfolio'><h3>" +
        portfolio[i].project +
        "</h3><hr/><p>" +
        portfolio[i].category +
        "</p></div><img class='img-project' src='" +
        portfolio[i].url +
        "' ></a>";
    }
  }
  document.getElementById("Projects").innerHTML = projectList;
  document.getElementById("All").className = "tab-link";
  document.getElementById("Branding").className = "tab-link";
  document.getElementById("Web").className = "tab-link";
  document.getElementById("Photography").className =
    "tab-link active";
  document.getElementById("App").className = "tab-link";
  const loadmore = document.querySelector("#loadmore");
  loadmore.style.display = "table";
}
// Filter by App
function appProjects() {
  var projectList = "";
  for (var i = 0; i < portfolio.length; i++) {
    var categoryProject = portfolio[i].category.toString();
    if (categoryProject === "App") {
      projectList +=
        "<a class='link-project'><div class='card-portfolio'><h3>" +
        portfolio[i].project +
        "</h3><hr/><p>" +
        portfolio[i].category +
        "</p></div><img class='img-project' src='" +
        portfolio[i].url +
        "' ></a>";
    }
  }
  document.getElementById("Projects").innerHTML = projectList;
  document.getElementById("All").className = "tab-link";
  document.getElementById("Branding").className = "tab-link";
  document.getElementById("Web").className = "tab-link";
  document.getElementById("Photography").className = "tab-link";
  document.getElementById("App").className = "tab-link active";
  const loadmore = document.querySelector("#loadmore");
  loadmore.style.display = "table";
}
// Filter Portfolio for List
function projectsList() {
    document.getElementById("Projects").className = "filter-porfolio list";
}
// Filter Portfolio for Grid
function projectsGrid() {
    document.getElementById("Projects").className = "filter-porfolio grid";
}