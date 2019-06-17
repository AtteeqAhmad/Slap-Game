let extras = {
      clap: {
            name: 'clap',
            modifier: 5,
            description: 'faceinclap',
      },
      munch: {
            name: 'munch',
            modifier: 7,
            description: 'dblpunch',
      },
      klick: {
            name: 'klick',
            modifier: 9,
            description: 'dblkick',
      },
}
let health = 100


      let hitElem = document.querySelector('#hit')
      let powerElem = document.querySelector('#power')
      let healthElem = document.querySelector('#health')
      let targetElem = document.querySelector('#target')
let resetElem = document.querySelector('#reset')


function extra(extra){
      health.modifier += extra[extra].modifier;
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



function clap() {
      health -= 5
      hit++
      drawhealth()
      console.log("clapworks")
}

function munch() {
      health -= 7
      hit++
      drawhealth()
      console.log("munchworks")
}

function klick() {
      health -= 9
      hit++
      drawhealth()
      console.log("klickworks")
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