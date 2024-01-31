const repeatString = function(text, num) {
    let output = "";
    if(num < 0 ){
        output = "ERROR";
    }
    else{
        for(let i = 1; i <= num; i++ ){
            output += text;

        }
    }

    return output;
};

repeatString('hey',3);
repeatString('hey', 10);
repeatString('hey',1);
repeatString('hey',0);
repeatString('hey', -10);

// Do not edit below this line
module.exports = repeatString;
