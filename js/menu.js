function dropDownMenu() {
    var x = document.getElementById("navbar-mobile");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
}
}
