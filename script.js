let r=true;
let boxes=document.querySelectorAll(".innerchild");
let diabled= ['0','0','0','0','0','0','0','0','0'];
let clickednumbers = new Array(9).fill('0'); 
console.log(parseInt(document.getElementById('ic1').innerHTML.trim() ))




function clickOnBtn(x){
 x=   x.id[2]
 console.log(x)
   console.log("Clicked cell with number:", x);
   console.log('yes');

    if(diabled[x-1]==='0')
   {
    if(r==true)
   {
        boxes[x-1].innerHTML= "X";
        r=false;
        diabled[x-1]='1';
   }
   else
   {
        boxes[x-1].innerHTML= "O";
        r=true;
        diabled[x-1]='1';
   }

   }
   else
   {
        return;
   }
   
   clickednumbers[x-1]=boxes[x-1].innerHTML;
   var c=check();
   let shownmsg = document.getElementById('winningmsg');
   if(c==1)
   {
        
        shownmsg.innerHTML="It is a draw!"
   }
   if(c!=1&&c!=undefined)
   {
       shownmsg.innerHTML="Player" + " " + c + " " + "wins!!";
   }
    let arr = winseq();
    if(arr!=[9,9,9])
    {
       boxes[arr[0]].style.backgroundColor = "lightgreen";
       boxes[arr[1]].style.backgroundColor = "lightgreen";
       boxes[arr[2]].style.backgroundColor = "lightgreen";
    }
  }

function check(){
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] 
    ];
     for (let combo of winCombos) {
        let [a, b, c] = combo;
        if (clickednumbers[a] === clickednumbers[b] && clickednumbers[a] === clickednumbers[c]) {
            if(clickednumbers[a]=='X'||clickednumbers[a]=='O')
            {
                console.log("Player " +" "+ clickednumbers[a] +" "+" wins!");
                return clickednumbers[a];
            }   
        }
    }

    if (!clickednumbers.includes('0')) {
        console.log("It's a draw!");
        return 1;
    }
   
}
function winseq()
{
     const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] 
    ];
     for (let combo of winCombos) {
        let [a, b, c] = combo;
        if (clickednumbers[a] === clickednumbers[b] && clickednumbers[a] === clickednumbers[c]) {
            if(clickednumbers[a]=='X'||clickednumbers[a]=='O')
            {
                return [a,b,c];
            }   
        }
    }
     if (!clickednumbers.includes('0')) {
                return [9,9,9];
    }

}
function reseted(){
 
        for (let i = 0; i < 9; i++) {
             boxes[i].innerHTML = " ";
             boxes[i].style.backgroundColor = "pink";
            }
        r=true;
       diabled= ['0','0','0','0','0','0','0','0','0']; 
       clickednumbers =  Array(9).fill('0'); 
       console.clear();
       let shownmsg = document.getElementById('winningmsg');
       shownmsg.innerHTML="";
      
}
