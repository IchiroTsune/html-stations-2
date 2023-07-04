function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。

  const checkBox = document.getElementById("check")

  console.log(checkBox);
  

  if(checkBox.checked){
    console.log("true");
    document.getElementById('text').style.backgroundColor = 'red';
  }else{
    console.log("false");
    document.getElementById('text').style.backgroundColor = 'white';
  }
  
  

}
