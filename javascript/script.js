// const profile = {
//     name: "daksh",
//     isFollow: false,
//     following: 120,
//     followers:200,


// };
// let a = 10;
// let b = 20;




// console.log("a =", a);
// console.log("b =", b);
// console.log("a + b", a+b);
// console.log("a - b =", a-b);
// console.log("a * b =", a*b);
// console.log("a / b =", a/b);
// console.log("a % b =", a%b);
// console.log("a ++ =", ++a);

// let marks = prompt("enter marks");


// if(marks >=80 && marks <=100) {
//     console.log("you got A grade");
// }

// else if (marks >=70 && marks <=89) {
//     console.log("you got B grade")
// }

// else if (marks >=60 && marks <=69) {
//     console.log("you got C grade")
// }

// else if (marks >=50 && marks <=59) {
//     console.log("you got D grade")
// }

// else {
//     console.log("you got F grade")
// }

// let gameNumber = 89;

// let userNumber = prompt("guess the no : ");

// while (gameNumber != userNumber) {
//     userNumber = prompt("try again bro");
// }

// console.log("lets go bey right one")

// let nameP = prompt("enter your full name without white spaces");

// let userName = "@" + nameP + nameP.length;

// console.log(userName)

// let items = [250,645,300,900,50];

// let i = 0;
// for (let item of items) {
//     console.log(`price before offer ${item}`);
//     let offer = item / 10;
//     console.log(offer);
//     items[i] -= offer;
//     console.log(`price after offer ${items[i]}`);
//     i++;


// }


// let companies = ["bloomberg",  "microsoft", "uber", "google", "ibm", "netflix"];

// let comp = companies.splice(0,1);

// let compp = companies.splice(1,1,"ola");

// let comppp = companies.push("amazon");

// console.log(companies);


// const tuM = (a,b) => {
//    console.log(a+b);
// }

// const huM = (a,b) => {
//     return a-b;
// }

// function countVowels (str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e"  || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }

// let val = countVowels("apnacollege");

// console.log(val);

// const countVowells = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e"  || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;

// }

// let arr = [1,2,3,4,5,6,7,8,9,0];

// arr.forEach( (val) => {
//     console.log(val**3);

// });

// let arr = [1,2,3,4,5,6,7,8,9,0];

// let newV = arr.map((val) => {
//     return val **2;
// });

// console.log(newV);
// console.log(arr);

// let arr = [1,2,3,4,5,6,7,8,9,0];

// let newArr = arr.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(newArr);
// console.log(arr);


// let arr = [1,2,3,4,5];

// let newArr = arr.reduce((res, curr) => {
//     return res + curr;
// });

// console.log(newArr);

// let arr = [1,2,3,4,5];

// let newArr = arr.reduce((res, curr) => {
//     return res > curr ? res : curr ;
// });

// console.log(newArr);


// let marks = [87,93,64,99,86];

// let newArr = marks.filter((val) => {
//     return val>90;
    
// });

// console.log(marks);
// console.log(newArr);

// let n = prompt("enter a no");

// let arr = [];

// for (let i = 1; i <= n; i++) {
//     arr[i - 1] = i;
    
// }

// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// });

// console.log(sum);

// let factorial = arr.reduce((res, curr) => {
//     return res * curr;
// });

// console.log(factorial);


// let btn = document.createElement("button");

// btn.innerText = "click me";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";

// let app = document.querySelector("body");

// app.append(btn);

// //
// let p = document.querySelector("p");

// p.classList.add("newClass");


// let btn  = document.querySelector("#mode");
// let body = document.querySelector("body");

// let mode = "light";

// btn.addEventListener("click", () => {
//     if (mode === "light") {
//         mode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else {
//         mode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// })

let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#reset-btn");

let headText = document.querySelector("#he");

const winPatterns = [
    [0,1,2], [0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]

let turnX = true;

let count = 0;


boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.classList.add("h22");
            box.innerText = "X";
            turnX = false;
        } else {
            box.classList.add("h22");
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        count++;

    let winner = checkWinners();

    if (count === 9 && !winner) {
        gameDraw();
      }
    })
});

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}

const resetGame = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
        turnX = true;
        headText.innerText = "Tic Tac Toe";
        count = 0;
    }
}



const checkWinners = () => {
    for (let winner of winPatterns) {
    
    let pos1 = boxes[winner[0]].innerText;
    let pos2 = boxes[winner[1]].innerText;
    let pos3 = boxes[winner[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
        if (pos1 === pos2 && pos2 === pos3) {
            disableBoxes();
           headText.innerText = `Player ${pos1} wins`;
        }
        
    }
    }
}




const gameDraw = () => {
    headText.innerText = `Draw`;
    disableBoxes();

};


resetbtn.addEventListener("click", resetGame)