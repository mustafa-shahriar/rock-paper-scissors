let intervalid=null;
const array=["images/rock.png","images/paper.png","images/scissors.png"];

let historyInFile=JSON.parse(localStorage.getItem('histotyInLs')) ||{
    wins:0,
    loses:0,
    ties:0
};

function rps(userPicked){

    const comPicked = array[Math.floor(Math.random() * 3)];

    if(userPicked===comPicked){

        historyInFile.ties+=1;
        document.querySelector('.result').innerHTML='Its a Tie!'
    }else if(userPicked==="images/rock.png"){
        if(comPicked==="images/paper.png"){
            document.querySelector('.result').textContent="YOU LOST";
            historyInFile.loses+=1;
        }else if(comPicked==="images/scissors.png"){
            document.querySelector('.result').textContent="YOU WON";
            historyInFile.wins+=1;
        }
    }else if(userPicked==="images/paper.png"){
        if(comPicked==="images/rock.png"){
            document.querySelector('.result').textContent="YOU WON";
            historyInFile.wins+=1;
        }else if(comPicked==="images/scissors.png"){
            document.querySelector('.result').textContent="YOU LOST";
            historyInFile.loses+=1;
        }
    }else if(userPicked==="images/scissors.png"){
        if(comPicked==="images/paper.png"){
            document.querySelector('.result').textContent="YOU WON";
            historyInFile.wins+=1;
        }else if(comPicked==="images/rock.png"){
            document.querySelector('.result').textContent="YOU LOST";   
            historyInFile.loses+=1;
        }
    }

    localStorage.setItem('histotyInLs' , JSON.stringify(historyInFile));

    document.querySelector('.compic').src=`${comPicked}`;

    document.querySelector('.history').innerHTML=`Wins: ${historyInFile.wins} || Losses: ${historyInFile.loses} || Ties: ${historyInFile.ties}`;
    
}

function reset(){
    
    clearInterval(intervalid);
    document.querySelector('.autoplay').textContent='Auto Play';

   document.querySelector('.compic').src=`images/que.png`;
   document.querySelector('.userpic').src=`images/que.png`;

   historyInFile.wins=0;
    historyInFile.loses=0;
    historyInFile.ties=0;
    localStorage.removeItem('historyInLS');

    document.querySelector('.history').innerHTML=`Wins: ${historyInFile.wins} || Losses: ${historyInFile.loses} || Ties: ${historyInFile.ties}`;
}

function stopauto(){
    clearInterval(intervalid);
    document.querySelector('.autoplay').textContent='Auto Play'
}
function auto(){
    if(document.querySelector('.autoplay').textContent==='Auto Play'){
        document.querySelector('.autoplay').textContent='Stop Play'

       intervalid= setInterval(
            ()=>{
                const usermvoe=array[Math.floor(Math.random() * 3)];
                document.querySelector('.userpic').src=`${usermvoe}`;
                rps(usermvoe);
            }
            ,1000);
        }else{
            document.querySelector('.autoplay').textContent='Auto Play';
            stopauto(); 
        }
}
