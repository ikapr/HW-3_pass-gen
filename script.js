var el_down = document.getElementById("Password");
          
function generateP() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
          
        pass += str.charAt(char)
    }
      
    return pass;
}
  
function gfg_Run() {
    el_down.innerHTML = generateP();
}





