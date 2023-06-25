let hos = document.getElementById("hospital").value;


switch(hos){
    case "PSG":
        window.alert(hos);
        break;
}

document.getElementById("hospital").onchange = function(){
    window.alert(document.getElementById("hospital").value);
}