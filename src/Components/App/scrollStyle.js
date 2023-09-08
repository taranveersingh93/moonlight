const moon = document.querySelector(".moon-container")
const m1 = document.querySelector(".mountain1")
const m2 = document.querySelector(".mountain2")
const m3 = document.querySelector(".mountain3")
const m4 = document.querySelector(".mountain4")
const m5 = document.querySelector(".mountain5")
const leftTrees = document.querySelector(".left-trees")
const rightTrees = document.querySelector(".right-trees")

const styleByScroll = scrollValue => {
  console.log(scrollValue, "scrollValue")
  leftTrees.style.left = `${-15 - scrollValue*0.1}vw`
  leftTrees.style.transform = `scale(${1 + (scrollValue*0.002)})`
  rightTrees.style.right = `${-5 - scrollValue*0.1}vw`
  rightTrees.style.transform = `scale(${1 + (scrollValue*0.002)})`

}

export default styleByScroll;