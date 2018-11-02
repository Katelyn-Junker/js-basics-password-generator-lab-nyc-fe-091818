window.addEventListener("load", () => {
  //start your code here
  
  // 1.figure out how long our password should be
  document.addEventListener('submit', (event)=>{
    // dont go to a new page or dont refresh
    event.preventDefault()
    const input = document.querySelector('input')
    const passwordLength = parseInt(input.value, 10)
    console.log(passwordLength)
    let password= ""
    
    for (let i= 0; i < passwordLength; i++){
      
    }
    
  })
  
  // 2.make a password from the ground up 
  
  // 3.we need to meet requirements 
  
});
