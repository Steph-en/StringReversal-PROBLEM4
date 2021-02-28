
var str = prompt("Enter Your Favorite Word ");
function reverse(string) {
    var reve = "";
    for(var i=string.length-1;i>=0;i--){
        reve += string[i];
    }
    return reve;
}
document.write(reverse(str));