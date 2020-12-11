
function abrecaderno(){

    document.getElementById("left").style = "transition: 0.7s ease-in-out;transform: rotateY(0deg)!important; ";
    document.getElementById("right").style = "transition: 1.5s ease-in-out;transform: rotateY(0deg)!important;";

    setTimeout(() => {
        document.getElementById("front").style = "z-index:4";
    }, 0500);

    setTimeout(() => {
        document.getElementById("backr").style = "display:block";
        document.getElementById("close").style = "transition: 1.5s ease-in-out;display:block";
    }, 0800);

}

function fechacaderno(){

    document.getElementById("left").style = "transition: 1.5s ease-in-out; z-index: 20; transform: rotateY(180deg); transform-origin: 100% 50%;";
    document.getElementById("right").style = "transition: 0.7s ease-in-out;transform: rotateY(-180deg)!important;";

    setTimeout(() => {
        document.getElementById("front").style = "z-index:5";
    }, 0800);

    setTimeout(() => {
        document.getElementById("backr").style = "display:none";
        document.getElementById("close").style = "transition: 1.5s ease-in-out;display:none";
    }, 0500);

}
