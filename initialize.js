            // START INITIALISATION
            console.log("Bonjour Player, et bienvenue dans ce jeu. Les règles sont simples :\n\n- Tu contrôles 5 personnages qui vont se combattre à mort. \n- Chaque tour, pour chaque personnage, tu vas choisir qui attaquer \n- Chaque personnage aura des caractéristiques qui lui sont propres.\n- Le personnage qui a le plus de points de vie à la fin de 10 tours a gagné le jeu !\n\nTout d'abord, choisissez un joueur dans le prompteur. \n\nBonne chance..")       

            // PICK PLAYER
            let askPlayer = prompt(
                `Choose player : \n\n-1 Fighter Grace \n\n-2 Paladin Ulder\n\n-3 Monk Moana\n\n-4 Berzerker Draven\n\n-5 Assassin Carl`);

                    while (askPlayer < 1 || askPlayer > 5){
                        console.log("Merci de choisir un Player dans la liste. Try again.")

                    } 
                    if (askPlayer == 1){
                        console.log(`Vous avez choisi le Fighter Grace, voici ses caractéristiques :`)

                    }
                    else if (askPlayer == 2){
                        console.log(`Vous avez choisi le Paladin Ulder, voici ses caractéristiques :`)
                    }
                    else if (askPlayer == 3){
                        console.log(`Vous avez choisi le Monk Moana, voici ses caractéristiques :`)
                    }
                    else if (askPlayer == 4){
                        console.log(`Vous avez choisi le Berzerker Draven, voici ses caractéristiques :`)
                    }
                    else if (askPlayer == 5){
                        console.log(`Vous avez choisi l'Assassin Carl', voici ses caractéristiques :`)
                    } else {
                    console.log(`Merci d'indiquer un caractère valable`)
                    }

            // CONFIRM PLAYER
            let confirmPlayer = prompt(
                `Vous avez choisi le joueur X, saisissez:\n- 'y' pour sélectionner ce joueur\n-'n' pour revenir à la sélection.`);

                while (confirmPlayer != "y" && confirmPlayer != "n") {
                    confirmPlayer = false
                        alert(`Merci d'indiquer un caractère valable` )
                    alert(confirmPlayer = prompt())

                } if (confirmPlayer == "y"){
                    console.log("Vous validez le personnage !")
                    
                } else if (confirmPlayer == "n"){
                    console.log("Vous changez de personnage")
                }
                
                // LAUNCH GAME
                console.log(`Les règles sont simples :\n1. Chaque joueur joue chacun son tour\n2. Tu peux soit faire une attaque classique, soit faire de la magie\n3. Le dernier debout gagne. fire-emoji`)
                console.log("La partie débute. Go!!")
                let game = new Game(players)
                console.log("test end game")

                  





