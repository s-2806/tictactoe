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
   let c=check();
   if(c==1)
   {
         setTimeout(()=>{
           alert("It is a draw.");
             for (let i = 0; i < 9; i++) {
             boxes[i].innerHTML = " ";
            
            }
           
        }, 100)
        r=true;
       diabled= ['0','0','0','0','0','0','0','0','0']; 
       clickednumbers =  Array(9).fill('0'); 
       console.clear();
   }
   if(c!=0&&c!=1)
   {
       
        setTimeout(()=>{
           alert("Player"+" "+ c +" " + "wins!");
             for (let i = 0; i < 9; i++) {
             boxes[i].innerHTML = " ";
            
            }
           console.clear();
        }, 100)
        r=true;
       diabled= ['0','0','0','0','0','0','0','0','0']; 
       clickednumbers =  Array(9).fill('0'); 
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
    else 
    return 0;
}
