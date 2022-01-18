const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dragonDmg = () => {
    return getRandomIntInclusive(15, dragon.strength)
}

const warriorDmg = () => {
    return getRandomIntInclusive(warrior.strength, warrior.strength*warrior.weaponDmg)
}
const mageDmgMana = () => {
    if (mage.mana > 15) {
        mage.mana = mage.mana -15;
        let mana = mage.mana;  
        const value = {
            mageDmg: getRandomIntInclusive(mage.intelligence, mage.intelligence*2),
            mageMana: mana,
        }
    return value;
    } else {
        return 'Não possui mana suficiente'
    }    
}

const gameAction = {
    turnoWarrior: (dano) => {
        warrior.damage = dano();
        dragon.healthPoints = dragon.healthPoints - dano()
        return gameAction.battleMembers()
    },
    turnoMage: (danoMage) => {
        mage.damage = danoMage().mageDmg
        dragon.healthPoints = dragon.healthPoints - danoMage().mageDmg
        return gameAction.battleMembers()
    },
    turnoDragon: (danoDragon) => {
        dragon.damage = danoDragon();
        warrior.healthPoints = warrior.healthPoints - danoDragon();
        mage.healthPoints = mage.healthPoints - danoDragon();
        return gameAction.battleMembers()
    },
    battleMembers: () => {
        const todos = {
            Mago: mage,
            Guerreiro: warrior,
            Dragão: dragon,
        }
        return todos;
    }
}

console.log(gameAction.turnoWarrior(warriorDmg))