function btn_0() {
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + 0;
}

function btn_1() {
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + 1;
}

function add() {
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + "+";
}

function sub() {
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + "-";
}

function mul() {
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + "*";
}

function div() {
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + "/";
}

function btn_clr() {
    document.getElementById("res").innerHTML = "";
}

function btn_eql() {
    var final = document.getElementById("res").innerHTML;
    let i = 1;
    while (i) {
        try {
            var spl = final.split('+');
            if (spl.length > 1) {
                let num1 = Number(parseInt(spl[0], 2));
                let num2 = Number(parseInt(spl[1], 2));
                var ans = num1 + num2;
                document.getElementById("res").innerHTML = ans.toString(2);
                break;
            }
        } catch {
            console.log("not +");
        }
        try {
            var spl = final.split('-');
            if (spl.length > 1) {
                let num1 = Number(parseInt(spl[0], 2));
                let num2 = Number(parseInt(spl[1], 2));
                var ans = num1 - num2;
                document.getElementById("res").innerHTML = ans.toString(2);
                break;
            }
        } catch {
            console.log("not -");
        }
        try {
            var spl = final.split('*');
            if (spl.length > 1) {
                let num1 = Number(parseInt(spl[0], 2));
                let num2 = Number(parseInt(spl[1], 2));
                var ans = num1 * num2;
                document.getElementById("res").innerHTML = ans.toString(2);
                break;
            }
        } catch {
            console.log("not *");
        }
        try {
            var spl = final.split('/');
            if (spl.length > 1) {
                let num1 = Number(parseInt(spl[0], 2));
                let num2 = Number(parseInt(spl[1], 2));
                if (num2 != 0)
                    var ans = num1 / num2;
                document.getElementById("res").innerHTML = Number(ans).toString(2);
                break;
            }
        } catch {
            console.log("not /");
        }

    }

}


document.getElementById("btn0").addEventListener("click", btn_0);
document.getElementById("btn1").addEventListener("click", btn_1);
document.getElementById("btnClr").addEventListener("click", btn_clr);
document.getElementById("btnEql").addEventListener("click", btn_eql);

document.getElementById("btnSum").addEventListener("click", add);
document.getElementById("btnSub").addEventListener("click", sub);
document.getElementById("btnMul").addEventListener("click", mul);
document.getElementById("btnDiv").addEventListener("click", div);