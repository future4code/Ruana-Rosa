```function calculaNota(ex, p1, p2) {
  let mediaPonderada = ((ex+(p1*2)+(p2*3))/6)
  const a = "A"
  const b = "B"
  const c = "C"
  const d = "D"
  if(mediaPonderada>=9){
    return a 
  } else if(mediaPonderada>=7.5){
    return b
  } else if(mediaPonderada>=6){
    return c
  } else {
    return d
  }
}```