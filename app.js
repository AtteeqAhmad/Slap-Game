let health = 100


let powerElem = document.querySelector('#power')
let resetElem = document.querySelector('#reset')
let healthElem = document.querySelector('#health')
let imgElem = document.querySelector('#img')

let img = {
   img:[{
            img: "slap",
            image: "https://g.rrrather.com/img/q/63242a.jpg"}
      },
]


function power(){
      health += 11
      drawhealth()
      console.log("power")
}

// decreasing power by slapping and func
function slap(){
      health -=1
      drawhealth()
      console.log("slapworks")

}
// decrease health by punching
function punch() {
      health -= 2
      drawhealth()
      console.log("punchworks")
}
// decrease health by kicking
function kick() {
      health -= 3
      drawhealth()
      console.log("kickworks")
}

function clap() {
      health -= 5
      drawhealth()
      console.log("clapworks")
}

function munch() {
      health -= 7
      drawhealth()
      console.log("munchworks")
}

function klick() {
      health -= 9
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
      console.log("resetworks")
}