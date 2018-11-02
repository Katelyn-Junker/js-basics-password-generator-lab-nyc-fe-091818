window.addEventListener("load", () => {
  //start your code here
  
  // 1.figure out how long our password should be
  document.addEventListener('submit', (event)=>{
    // dont go to a new page or dont refresh
    event.preventDefault()
    const input = document.querySelector('input')
    const passwordLength = input.value
    console.log(passwordLength)
    
    
    
  })
  
  // 2.make a password from the ground up 
  
  // 3.we need to meet requirements 
  
});
