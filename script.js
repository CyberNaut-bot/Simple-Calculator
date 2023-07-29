let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == '√') {
            string = Math.sqrt(string);
            input.value = string;
        }
        else if (e.target.innerHTML == '!') {
            let ans = 1;
            if (string == 0) {
                // return 1;
                input.value = 1;
            }
            else {

                for (let i = 1; i <= string; i++)
                    ans = ans * string;
                //return ans;
                input.value = ans;
            }

        }
        else if (e.target.innerHTML == 'log') {
            string = Math.log(string);
            input.value = string;
        }
        else if (e.target.innerHTML == '^') {
            string = Math.pow(string.length - 1, string.length);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
