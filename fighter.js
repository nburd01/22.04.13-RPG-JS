class Fighter extends Character {
    constructor(familyName = "Fighter", firstName = "Grace", hp = 12, dmg = 4, mana = 40, attack = 10) {
        super(familyName, hp, dmg, mana);
        this.firstName = firstName;
    }

    whoAmI() {
        return `Je m'appelle ${this.firstName}, et j'appartiens à la famille ${this.familyName}.`;
    }

    dealDamage(){

    }

    takeDamage(){
        
    }
}    

    const grace = new Fighter(familyName = "Fighter", firstName = "Grace", hp = 2, dmg = 1, mana = 10);

    console.log(grace.whoAmI()); 

    console.log(`L'attaque magique ${this.attack} du combattant ${this.familyName} inflige : \n- Baisse des attaques adverses de pts pendant le tour suivant.\n- Un damage de 5pts \n- Un coût de 5 mana.`)


