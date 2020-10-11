let animin = () => {
  anime({
    targets: '.container',
    translateX: [-300, 0],
    opacity: [0,1]
  })
}

animin()


let animout = () => {
  anime({
    targets: '.container',
    translateX: [0, 300],
    opacity: [1,0]
  })
}


setTimeout(animout, 3000)