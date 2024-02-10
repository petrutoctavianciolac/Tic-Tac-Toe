let top_left = document.getElementById("top_left");
let top_midd = document.getElementById("top_midd");
let top_rght = document.getElementById("top_rght");
let mid_left = document.getElementById("mid_left");
let mid_midd = document.getElementById("mid_midd");
let mid_rght = document.getElementById("mid_rght");
let bot_left = document.getElementById("bot_left");
let bot_midd = document.getElementById("bot_midd");
let bot_rght = document.getElementById("bot_rght");

top_left.addEventListener("click", function() {
    move(top_left)
});

top_midd.addEventListener("click", function() {
    move(top_midd);
});

top_rght.addEventListener("click", function() {
    move(top_rght);
});

mid_left.addEventListener("click", function() {
    move(mid_left)
});

mid_midd.addEventListener("click", function() {
    move(mid_midd);
});

mid_rght.addEventListener("click", function() {
    move(mid_rght);
});
bot_left.addEventListener("click", function() {
    move(bot_left)
});

bot_midd.addEventListener("click", function() {
    move(bot_midd);
});

bot_rght.addEventListener("click", function() {
    move(bot_rght);
});


function move(poz)
{
    if(poz.innerHTML != "") 
    {  
        alert("Poziția aceea este deja ocupată!");
    }
    else{
    poz.style = "color: blue";
    poz.innerHTML = "X";
    if(check_win() == false)
        b_move();
    }
}

function b_move()
{

    if(top_left.innerHTML == "0" && mid_left.innerHTML == "0" && bot_left.innerHTML == "")
        {
            bot_left.style.color = "red";
            bot_left.innerHTML = "0";
        }
    else if(top_left.innerHTML == "0" && bot_left.innerHTML == "0" && mid_left.innerHTML == "")
        {
            mid_left.style.color = "red";
            mid_left.innerHTML = "0";
        }
    else if(mid_left.innerHTML == "0" && bot_left.innerHTML == "0" && top_left.innerHTML == "")
        {
            top_left.style.color = "red";
            top_left.innerHTML = "0";
        }
    else if(top_midd.innerHTML == "0" && mid_midd.innerHTML == "0" && bot_midd.innerHTML == "")
        {
            bot_midd.style.color = "red";
            bot_midd.innerHTML = "0";
        }
    else if(top_midd.innerHTML == "0" && bot_midd.innerHTML == "0" && mid_midd.innerHTML == "")
        {
            mid_midd.style.color = "red";
            mid_midd.innerHTML = "0";
        }
    else if(mid_midd.innerHTML == "0" && bot_midd.innerHTML == "0" && top_midd.innerHTML == "")
        {
            top_midd.style.color = "red";
            top_midd.innerHTML = "0";
        }
    else if(top_rght.innerHTML == "0" && mid_rght.innerHTML == "0" && bot_rght.innerHTML == "")
        {
            bot_rght.style.color = "red";
            bot_rght.innerHTML = "0";
        }
    else if(top_rght.innerHTML == "0" && bot_rght.innerHTML == "0" && mid_rght.innerHTML == "")
        {
            mid_rght.style.color = "red";
            mid_rght.innerHTML = "0";
        }
    else if(mid_rght.innerHTML == "0" && bot_rght.innerHTML == "0" && top_rght.innerHTML == "")
        {
            top_rght.style.color = "red";
            top_rght.innerHTML = "0";
        }
    else if(top_left.innerHTML == "0" && top_rght.innerHTML == "0" && top_midd.innerHTML == "")
        {
            top_midd.style.color = "red";
            top_midd.innerHTML = "0";
        }
    else if(top_left.innerHTML == "0" && top_midd.innerHTML == "0" && top_rght.innerHTML == "")
        {
            top_rght.style.color = "red";
            top_rght.innerHTML = "0";
        }
    else if(top_rght.innerHTML == "0" && top_midd.innerHTML == "0" && top_left.innerHTML == "")
        {
            top_left.style.color = "red";
            top_left.innerHTML = "0";
        }
    else if(mid_left.innerHTML == "0" && mid_rght.innerHTML == "0" && mid_midd.innerHTML == "")
        {
            mid_midd.style.color = "red";
            mid_midd.innerHTML = "0";
        }
    else if(mid_left.innerHTML == "0" && mid_midd.innerHTML == "0" && mid_rght.innerHTML == "")
        {
            mid_rght.style.color = "red";
            mid_rght.innerHTML = "0";
        }
    else if(mid_rght.innerHTML == "0" && mid_midd.innerHTML == "0" && mid_left.innerHTML == "")
        {
            mid_left.style.color = "red";
            mid_left.innerHTML = "0";
        }
    else if(bot_left.innerHTML == "0" && bot_rght.innerHTML == "0" && bot_midd.innerHTML == "")
        {
            bot_midd.style.color = "red";
            bot_midd.innerHTML = "0";
        }
    else if(bot_left.innerHTML == "0" && bot_midd.innerHTML == "0" && bot_rght.innerHTML == "")
        {
            bot_rght.style.color = "red";
            bot_rght.innerHTML = "0";
        }
    else if(bot_rght.innerHTML == "0" && bot_midd.innerHTML == "0" && bot_left.innerHTML == "")
        {
            bot_left.style.color = "red";
            bot_left.innerHTML = "0";
        }
    else if(top_left.innerHTML == "0" && bot_rght.innerHTML == "0" && mid_midd.innerHTML == "")
        {
            mid_midd.style.color = "red";
            mid_midd.innerHTML = "0";
        }
    else if(top_left.innerHTML == "0" && mid_midd.innerHTML == "0" && bot_rght.innerHTML == "")
        {
            bot_rght.style.color = "red";
            bot_rght.innerHTML = "0";
        }
    else if(mid_midd.innerHTML == "0" && bot_rght.innerHTML == "0" && top_left.innerHTML == "")
        {
            top_left.style.color = "red";
            top_left.innerHTML = "0";
        }
    else if(top_rght.innerHTML == "0" && bot_left.innerHTML == "0" && mid_midd.innerHTML == "")
        {
            mid_midd.style.color = "red";
            mid_midd.innerHTML = "0";
        }
    else if(top_rght.innerHTML == "0" && mid_midd.innerHTML == "0" && bot_left.innerHTML == "")
        {
            bot_left.style.color = "red";
            bot_left.innerHTML = "0";
        }
    else if(mid_midd.innerHTML == "0" && bot_left.innerHTML == "0" && top_rght.innerHTML == "")
        {
            top_rght.style.color == "red";
            top_rght.innerHTML = "0";
        }
    else if(top_left.innerHTML == "X" && mid_left.innerHTML == "X" && bot_left.innerHTML == "")
    {
        bot_left.style.color = "red";
        bot_left.innerHTML = "0";
    }
    else if(top_left.innerHTML == "X" && bot_left.innerHTML == "X" && mid_left.innerHTML == "")
    {
        mid_left.style.color = "red";
        mid_left.innerHTML = "0";
    }
    else if(mid_left.innerHTML == "X" && bot_left.innerHTML == "X" && top_left.innerHTML == "")
    {
        top_left.style.color = "red";
        top_left.innerHTML = "0";
    }
    else if(top_midd.innerHTML == "X" && mid_midd.innerHTML == "X" && bot_midd.innerHTML == "")
    {
        bot_midd.style.color = "red";
        bot_midd.innerHTML = "0";
    }
    else if(top_midd.innerHTML == "X" && bot_midd.innerHTML == "X" && mid_midd.innerHTML == "")
    {
        mid_midd.style.color = "red";
        mid_midd.innerHTML = "0";
    }
    else if(mid_midd.innerHTML == "X" && bot_midd.innerHTML == "X" && top_midd.innerHTML == "")
    {
        top_midd.style.color = "red";
        top_midd.innerHTML = "0";
    }
    else if(top_rght.innerHTML == "X" && mid_rght.innerHTML == "X" && bot_rght.innerHTML == "")
    {
        bot_rght.style.color = "red";
        bot_rght.innerHTML = "0";
    }
    else if(top_rght.innerHTML == "X" && bot_rght.innerHTML == "X" && mid_rght.innerHTML == "")
    {
        mid_rght.style.color = "red";
        mid_rght.innerHTML = "0";
    }
    else if(mid_rght.innerHTML == "X" && bot_rght.innerHTML == "X" && top_rght.innerHTML == "")
    {
        top_rght.style.color = "red";
        top_rght.innerHTML = "0";
    }
    else if(top_left.innerHTML == "X" && top_rght.innerHTML == "X" && top_midd.innerHTML == "")
    {
        top_midd.style.color = "red";
        top_midd.innerHTML = "0";
    }
    else if(top_left.innerHTML == "X" && top_midd.innerHTML == "X" && top_rght.innerHTML == "")
    {
        top_rght.style.color = "red";
        top_rght.innerHTML = "0";
    }
    else if(top_rght.innerHTML == "X" && top_midd.innerHTML == "X" && top_left.innerHTML == "")
    {
        top_left.style.color = "red";
        top_left.innerHTML = "0";
    }
    else if(mid_left.innerHTML == "X" && mid_rght.innerHTML == "X" && mid_midd.innerHTML == "")
    {
        mid_midd.style.color = "red";
        mid_midd.innerHTML = "0";
    }
    else if(mid_left.innerHTML == "X" && mid_midd.innerHTML == "X" && mid_rght.innerHTML == "")
    {
        mid_rght.style.color = "red";
        mid_rght.innerHTML = "0";
    }
    else if(mid_rght.innerHTML == "X" && mid_midd.innerHTML == "X" && mid_left.innerHTML == "")
    {
        mid_left.style.color = "red";
        mid_left.innerHTML = "0";
    }
    else if(bot_left.innerHTML == "X" && bot_rght.innerHTML == "X" && bot_midd.innerHTML == "")
    {
        bot_midd.style.color = "red";
        bot_midd.innerHTML = "0";
    }
    else if(bot_left.innerHTML == "X" && bot_midd.innerHTML == "X" && bot_rght.innerHTML == "")
    {
        bot_rght.style.color = "red";
        bot_rght.innerHTML = "0";
    }
    else if(bot_rght.innerHTML == "X" && bot_midd.innerHTML == "X" && bot_left.innerHTML == "")
    {
        bot_left.style.color = "red";
        bot_left.innerHTML = "0";
    }
    else if(top_left.innerHTML == "X" && bot_rght.innerHTML == "X" && mid_midd.innerHTML == "")
    {
        mid_midd.style.color = "red";
        mid_midd.innerHTML = "0";
    }
    else if(top_left.innerHTML == "X" && mid_midd.innerHTML == "X" && bot_rght.innerHTML == "")
    {
        bot_rght.style.color = "red";
        bot_rght.innerHTML = "0";
    }
    else if(mid_midd.innerHTML == "X" && bot_rght.innerHTML == "X" && top_left.innerHTML == "")
    {
        top_left.style.color = "red";
        top_left.innerHTML = "0";
    }
    else if(top_rght.innerHTML == "X" && bot_left.innerHTML == "X" && mid_midd.innerHTML == "")
    {
        mid_midd.style.color = "red";
        mid_midd.innerHTML = "0";
    }
    else if(top_rght.innerHTML == "X" && mid_midd.innerHTML == "X" && bot_left.innerHTML == "")
    {
        bot_left.style.color = "red";
        bot_left.innerHTML = "0";
    }
    else if(mid_midd.innerHTML == "X" && bot_left.innerHTML == "X" && top_rght.innerHTML == "")
    {
        top_rght.style.color = "red";
        top_rght.innerHTML = "0";
    }
    else 
    {
        let valid = 0;
        while(!valid)
        {
            let numarRandom = Math.floor(Math.random() * 9) + 1;
            if(numarRandom == 1 && top_left.innerHTML == "")
                {
                    top_left.style.color = "red";
                    top_left.innerHTML = "0";
                    valid = 1;
                }
            if(numarRandom == 2 && top_midd.innerHTML == "")
                {
                    top_midd.style.color = "red";
                    top_midd.innerHTML = "0";
                    valid = 1;
                }
            if(numarRandom == 3 && top_rght.innerHTML == "")
                {
                    top_rght.style.color = "red";
                    top_rght.innerHTML = "0";
                    valid = 1;
                }
            if(numarRandom == 4 && mid_left.innerHTML == "")
                {
                    mid_left.style.color = "red";
                    mid_left.innerHTML = "0";
                    valid = 1;
                }
            if(numarRandom == 5 && mid_midd.innerHTML == "")
                {
                    mid_midd.style.color = "red";
                    mid_midd.innerHTML = "0";
                    valid = 1;
                }
            if(numarRandom == 6 && mid_rght.innerHTML == "")
                {
                    mid_rght.style.color = "red";
                    mid_rght.innerHTML = "0";
                    valid = 1;
                }
            if(numarRandom == 7 && bot_left.innerHTML == "")
                {
                    bot_left.style.color = "red";
                    bot_left.innerHTML = "0";
                    valid = 1;
                }
            if(numarRandom == 8 && bot_midd.innerHTML == "")
                {
                    bot_midd.style.color = "red";
                    bot_midd.innerHTML = "0";
                    valid = 1;
                }
            if(numarRandom == 9 && bot_rght.innerHTML == "")
                {
                    bot_rght.style.color = "red";
                    bot_rght.innerHTML = "0";
                    valid = 1;
                }
        }
    }

    check_win();
    
}

function check_win()
{
    let table = [
        [top_left.innerHTML, top_midd.innerHTML, top_rght.innerHTML],
        [mid_left.innerHTML, mid_midd.innerHTML, mid_rght.innerHTML],
        [bot_left.innerHTML, bot_midd.innerHTML, bot_rght.innerHTML]
    ];

    let its_win = 0;
    let winner;

    if(table[0][0] == table[0][1] && table[0][1] == table[0][2] && table[0][0] != "")
    {
         its_win = 1;
         winner = table[0][0];
    }
    if(table[1][0] == table[1][1] && table[1][1] == table[1][2] && table[1][0] != "")
    {
        its_win = 1;
        winner = table[1][0];
   }
    if(table[2][0] == table[2][1] && table[2][1] == table[2][2] && table[2][0] != "")
    {
        its_win = 1;
        winner = table[2][0];
   }

   if(table[0][0] == table[1][0] && table[1][0] == table[2][0] && table[2][0] != "")
    {
        its_win = 1;
        winner = table[2][0];
   }

   if(table[0][1] == table[1][1] && table[1][1] == table[2][1] && table[2][1] != "")
    {
        its_win = 1;
        winner = table[2][1];
   }

   if(table[0][2] == table[1][2] && table[1][2] == table[2][2] && table[2][2] != "")
    {
        its_win = 1;
        winner = table[2][2];
   }

   if(table[0][0] == table[1][1] && table[1][1] == table[2][2] && table[2][2] != "")
     {
    its_win = 1;
    winner = table[2][2];
    }

    if(table[0][2] == table[1][1] && table[1][1] == table[2][0] && table[0][2] != "")
     {
    its_win = 1;
    winner = table[0][2];
    }

    let count = 0;
    let draw = 0;

    for(let i = 0; i < 3; i ++)
        for(let j = 0; j < 3; j ++)
            if(table[i][j] != "") count = count + 1;
    
    if(count == 9)  draw = 1;

    if(its_win == 1)
    {   
        clear_table(winner);
        return true;
    }
    else if(draw == 1)
    {
        clear_table(draw);
        return true;
    }

    return false;
}

async function clear_table(winner) {
    await new Promise(resolve => setTimeout(resolve, 500));
    top_left.innerHTML = "";
    top_midd.innerHTML = "";
    top_rght.innerHTML = "";
    mid_left.innerHTML = "";
    mid_midd.innerHTML = "";
    mid_rght.innerHTML = "";
    bot_left.innerHTML = "";
    bot_midd.innerHTML = "";
    bot_rght.innerHTML = "";

    if(winner == 1)
        alert("Este remiza!");
    else alert("Castigatorul este " + winner + "!");
}