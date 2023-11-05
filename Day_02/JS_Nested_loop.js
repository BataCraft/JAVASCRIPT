/*
//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}
console.log("...............**************................");

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
*/


for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log("Gold Medal");
    }
    else if (i == 2) {
        console.log("Silver Medal");
    }
    else if (i == 3) {
        console.log("Bronze Medal");
    }
    else {
        console.log(i);
    }
}


for (var i = 1; i <= 10; i++)

    switch (i) {
        case 1:
            if (i == 1) {
                console.log("Gold Medal");
            }
            break;
        case 2:
            if (i == 2) {
                console.log("Silver Medal");
            }
            break;
        case 3:
            if (i == 3) {
                console.log("Bronze Medal");
            }
            break;
        default:
            console.log(i);
    }


if (i == 0 && i == 1) {
    console.log("Hello");
} else {
    console.log("Goodbye");
}

var i = 0;
while (i < 3) {
    console.log("Hello");
    i++;
}
console.log('i')

for (i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("Hello");
    }
}
