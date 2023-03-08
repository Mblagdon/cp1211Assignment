
function displayNumber() {
    var start = parseInt(document.getElementById("displayNumber").value)
    

    for(i=0; i<=displayNumber; i++){
        if(i % 2 == 0){
            evenNums += i + "<br>";
        }
    }
    document.getElementById("displayNumber").innerHTML = evenNums

}