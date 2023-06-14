// code your solution here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }

//saturdayFun("bathe my dog")

console.log (saturdayFun("go to church") )

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}
console.log(mondayWork("bathe the dog"))



  /*function wrapAdjective (visualFlair) {
    return function (name = "special") {
      return `You are ${visualFlair} ${name}!`
    };
  } */

  function wrapAdjective(visualFlair) { return function ( name = "special") {
      return `You are ${visualFlair}${name}${visualFlair}!`}
    
  }

wrapAdjective("*") ("a hard worker")
wrapAdjective("||") ("a dedicated programmer")

