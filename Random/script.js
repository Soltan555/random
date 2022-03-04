let text = document.getElementById("text");
let btn = document.getElementById("btn");

alert("1-10 ədədləri arasında bir ədəd təxmin edin")
alert("Və bunun üçün 3 şansınız var")

let saygac = 1


function test() {
    console.log(saygac, "saygac");
    let x = Math.floor(Math.random() * 10 + 1);
    console.log(x, "Random");
    if (saygac < 4) {

        if (text.value == x) {
            alert("cavab duzgundur");
        } else if (text.value.length == 0) {
            alert("Ədəd daxil edin");
        } else {
            saygac++;
            alert("cavab yalnisdir");
        }
    } else {
        alert("Haqqiniz bitmisdir");
    }
}





// text.onblur = function() {
//     btn.style.display = 'none'
// }

// text.onfocus = function() {
//     if (text.value.length > 0) {
//         btn.style.display = 'inline'
//     }
// }