function calculateTip(){
    const bill = document.querySelector('.bill').value;
    const per = document.querySelector('.percentage').value;

    if(bill === "" || per == ""){
        alert('please enter value');
    }

    let g = bill/per;
    let total = g+Number(bill);

    document.getElementById('result').innerHTML = `Your Total bill is ${total}`;
}

document.getElementById('cal').onclick = function(){
    calculateTip()
}































// function calculateTip() {
//     const bill = document.querySelector('.bill').value;
//     const per = document.querySelector('.Percentage').value;

//     if (bill === "" || per == "") {
//         alert("Please enter values");
//     }

//     let g = (bill / per);

//     let total = g + Number(bill);

//     document.getElementById("result").innerHTML = `Your Total Bill is: ${total}`;

// }

// document.getElementById("cal").onclick = function () {
//     calculateTip();
// };

