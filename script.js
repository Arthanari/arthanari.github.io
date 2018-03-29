var cntrl_key_pressed=false;
function onKeyDownHandler(e)
{        

}
function onKeyUpHandler(e)
{
  if (e.ctrlKey) {
      if (e.keyCode == 73 || e.keyCode == 73) {
          console.log("Control Pressed");
          e.preventDefault();
          return false;
      }
  }
}
