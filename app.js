
let health = 100

function additem(item) {
      target.modifier += items[item].modifier;
      fighter.modifier += items[item].modifier;
}
      let hitElem = document.querySelector('#hit')
      let powerElem = document.querySelector('#power')
      let healthElem = document.querySelector('#health')
      let targetElem = document.querySelector('#target')
      let resetElem = document.querySelector('#reset')

let target = {
      health: 100,
      attacks: {
            slap: 1,
            punch: 3,
            kick: 5,
            clap: 2,
            munch: 7,
            klick: 9
      }
}

 let fighter = {
            health: 100,
            attacks: {
                  slap: 2,
                  punch: 2.5,
                  kick: 5.5,
                  clap: 3.5,
                  munch: 7.5,
                  klick: 9.5
            }
}
      // power up to certain level
function power(){
health += 11
      drawhealth()
      console.log("power")
}

function hit(){
      hit += 1
      drawhit()

}

// decreasing power by slapping and func
function slap(){
      health -= 1
      drawhealth()
      console.log("slapworks")

}
// decrease health by punching
function punch() {
      health -= 2
      health.hit++
      drawhealth()
      console.log("punchworks")
}
// decrease health by kicking
function kick() {
      health -= 3
      hit++
      drawhealth()
      console.log("kickworks")
}


let item = [clap = {
      name: 'Clap',
      modifier: 5,
description: 'dblslap'
},
munch = {
      name: 'Munch',
      modifier: 7,
      description: 'dblpunch'
},
 klick = {
      name: 'Klick',
      modifier: 9,
      description: 'dblkick'
}]

function drawhit() {
      hitElem.textContent = hit
}
// shows upgraded health value on html display
function drawhealth() {
      healthElem.textContent = health
}

function reset(){
      health = 100
      drawhealth()
      console.log("reset")
}
