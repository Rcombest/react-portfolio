function hyphenateWords(str) {
  let noSpaceStr = str.toLowerCase().replaceAll(' ', '-')
  let noPunct = noSpaceStr.replaceAll(/[&/\\#, +()$~%.'":*?<>{}]/g, "")
  return noPunct
}

export default hyphenateWords