class Paladin extends Character {
    constructor(familyName = "Paladin", firstName = "Ulder le barbare", hp = 16, dmg = 3, mana = 160, attack = 10) {
        super(familyName, hp, dmg, mana);
        this.firstName = firstName;
    }

    whoAmI() {
        return `Je m'appelle ${this.firstName}, et j'appartiens à la famille ${this.familyName}.`;
    }
    
}    

    const ulder = new Fighter(familyName = "Paladin", firstName = "Ulder le barbare", hp = 16, dmg = 3, mana = 160);

    console.log(ulder.whoAmI()); 

    console.log(`L'attaque magique ${ulder.attack} du combattant ${ulder.familyName} inflige : \n- Baisse des attaques adverses de 2pts pendant le tour suivant.\n- Un damage de 5pts \n- Un coût de 5 mana.`)

  
