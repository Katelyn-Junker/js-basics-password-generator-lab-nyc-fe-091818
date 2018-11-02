window.addEventListener("load", () => {
  //start your code here
  const lowerCasLetters='abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers='0123456789'
  const specialCharacters='!#$%&()\*+,-./:;<=>?@[\\]^\_\{|}~' 
  
  // 1.figure out how long our password should be
  document.addEventListener('submit', (event)=>{
    // dont go to a new page or dont refresh
    event.preventDefault()
    const input = document.querySelector('input')
    const passwordLength = parseInt(input.value, 10)
    console.log(passwordLength)
    let password= ""
    
    for (let i= 0; i < passwordLength; i++){
      
     const randomLowerCaseIndex= Math.round(Math.random() * lowerCaseLetters.length)
     console.log(randomLowerCaseIndex)
     password= password + lowerCaseLetters[randomLowerCaseIndex]
     if (password.length === passwordLength){
       break 
     }
     
     const randomUpperCaseIndex = Math.round(Math.random() * upperCaseLetters.length)
    }
    
  })
  
  // 2.make a password from the ground up 
  
  // 3.we need to meet requirements 
  
});
