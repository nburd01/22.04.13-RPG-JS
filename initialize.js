// import {Fighter} from './fighter.js'

class Initialize {
    constructor(askPlayer, confirmPlayer,launchGame, familyName, firstName , hp, dmg , mana , attack ){
        this.class = Fighter;
    }

        choosePlayer(){
            
            let askPlayer = prompt(
                `Choose player : \n-1 Player 1 \n-2 Player 2\n-3 Player 3\n-4 Player 4\n-5 Player 5`);

                    while (askPlayer < 1 || askPlayer > 5){
                        console.log("Merci de choisir un Player dans la liste. Try again.")
                        let askPlayer = prompt()
                    } 
                    if (askPlayer == 1){
                        console.log(`Vous avez choisi le Player 1, voici ses caractéristiques :`)
                        Fighter.whoAmI()
                    }
                    else if (askPlayer == 2){
                        console.log(`Vous avez choisi le Player 2, voici ses caractéristiques :`)
                    }
                    else if (askPlayer == 3){
                        console.log(`Vous avez choisi le Player 3, voici ses caractéristiques :`)
                    }
                    else if (askPlayer == 4){
                        console.log(`Vous avez choisi le Player 4, voici ses caractéristiques :`)
                    }
                    else {
                        console.log(`Vous avez choisi le Player 5, voici ses caractéristiques :`)
                    }
            }
        acceptPlayer(){

            let acceptPlayer = prompt(
                `Vous avez choisi le joueur X, tapez 'y' pour sélectionner ce joueur ou 'n' pour revenir à la sélection.`  
            )
            if (acceptPlayer == "y"){
                console.log("Vous validez")
                
            } else if (acceptPlayer == "n"){
                console.log("Vous changez")
            } else {
                console.log("Merci d'indiquer un caractère valable")
            }
            
            }
        gameStart(){
             let launchGame
             console.log("Go!!")
        }           
    }
const initialize = new Initialize ; 
console.log("Bonjour Player, et bienvenue dans ce jeu. Les règles sont simples :\n\n- Tu contrôles 5 personnages qui vont se combattre à mort. \n- Chaque tour, pour chaque personnage, tu vas choisir qui attaquer \n- Chaque personnage aura des caractéristiques qui lui sont propres.\n- Le personnage qui a le plus de points de vie à la fin de 10 tours a gagné le jeu !\n\nTout d'abord, choisissez un joueur dans le prompteur. \n\nBonne chance..")





console.log(initialize.choosePlayer())
console.log(grace.whoAmI()); 
console.log(initialize.acceptPlayer())
console.log(initialize.gameStart())
