const selectElement = (s) => document.querySelector(s);
//open the menu on click
selectElement('.open').addEventListener('click',()=> {
selectElement('.nav-list').classList.add('active');
})

//close the menu
selectElement('.close').addEventListener('click',()=>{
  selectElement('.nav-list').classList.remove('active');
})