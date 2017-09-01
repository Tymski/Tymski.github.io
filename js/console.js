
// Code below is horrible, don't waste your time on it.

myText = {
    text: "Just kidding, you can't execute anything, but you can play a little game. Type 'game' to continue...",
    characters: 0,
    nextText: function(){
        this.characters++;
        return this.text.substring(0,this.characters);
    }
};

secretCheatCodesList = [];
class CheatCode{
    constructor(string,effect){
        this.string=string.toLowerCase();
        this.index=0;
        this.effect = effect;
        secretCheatCodesList.push(this);
    }
    keyPressed({key}){
        if(this.string[this.index]==key){
            this.index++;
        }else{
            this.index=0;
        }
        if (this.index==this.string.length){
            if(typeof this.effect=='function')this.effect();
            this.index=0;
            return true;
        }
        return false;
    }
}

new CheatCode("Game", function(){
    main.innerHTML += 
    `
    <div>IO:\\github\\tymski> <span class="string">game</span></div>
    <div>Executing command 'game'...</div>
    `;
    setTimeout(function(){
        main.innerHTML += `<div class="error">Error! Missing Implementation!</div>`;
    },1500);
    setTimeout(function(){
        main.innerHTML += `<div>You need to implement 'game' before executing it.</div>`;
    },2000);
    setInterval(function(){cursor.classList.toggle('hidden');},750);
});
new CheatCode("GameGameGameGame", function(){
    main.innerHTML = `<div id="cursor"></div>`;
    main.classList.toggle("hidden");
    setTimeout(function(){
        header.innerHTML += `<div>Wow. You crashed the whole Internet.</div>`;
    },2000);
    setTimeout(function(){
        header.innerHTML += `<div>Are you proud? (yes/no)</div>`;
        new CheatCode("yes",function(){
            header.innerHTML = `IO:\\github\\tymski> <span class="string">Good bye, World!</span>`;
        });
    },4000);
    this.effect = function(){};
});

window.addEventListener("keypress",function(keypress){
    for(let secretCheatcode of secretCheatCodesList){
        secretCheatcode.keyPressed(keypress);
    }
    consoleText.innerHTML = myText.nextText();
});
