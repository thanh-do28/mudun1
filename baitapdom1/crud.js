// modal create
let button1 = document.getElementById("dropdown12");
button1.onclick = function (event) {
  if (event.target.classList.contains("create123")) {
    let create1 = document.getElementById("modal111");
    create1.style.display = "inline-block";
  } else if (event.target.classList.contains("update123")) {
    let update1 = document.getElementById("modal112");
    update1.style.display = "inline-block";
  } else if (event.target.classList.contains("delete123")) {
    let delete1 = document.getElementById("modal113");
    delete1.style.display = "inline-block";
  }
};

let create1 = document.getElementById("modal111");
let update1 = document.getElementById("modal112");
let delete1 = document.getElementById("modal113");
create1.onclick = function (event) {
  if (event.target.classList.contains("btncreate")) {
    // let create1 = document.getElementById("modal111");
    create1.style.display = "none";
  }
  if (event.target.classList.contains("btncreate1")) {
    create1.style.display = "none";
  }
};
update1.onclick = function (event) {
  if (event.target.classList.contains("btnupdate")) {
    update1.style.display = "none";
  }
  // if (event.target.classList.contains("btnupdate1")){
  //     update1.style.display = "none"
  // }
};
delete1.onclick = function (event) {
  if (event.target.classList.contains("btndelete")) {
    delete1.style.display = "none";
  }
};

//thêm nhạc vào
let inputlinkcreate = document.getElementById("inputlinkcreate");
let inputnamecreate = document.getElementById("inputnamecreate");
let inputclancreate = document.getElementById("inputclancreate");
let inputlikecreate = document.getElementById("inputlikecreate");
let btncreate1 = document.getElementById("btncreate1");
// console.log(products[1]);
btncreate1.onclick = function () {
  let max = products.length;
  let id1 = max + 1;
  products.push({
    id: id1,
    link: inputlinkcreate.value,
    name: inputnamecreate.value,
    clan: inputclancreate.value,
    like: inputlikecreate.value,
  });
  showAllProducts(products);
};

// let item1=document.getElementById("item1");
// let adh = item1.children;
// let bdg = adh.children;
// console.log(bdg[0]);
// adh[0].children[0].src="https://www.youtube.com/embed/uMacmXLsmNg"
// console.log(item1)
// for(let i = 0; i < products.length; i++){
//     var link1 = products[i].link;
//     console.log(link1);
// }



// update
let stt = document.getElementById("stt");
var item = 0;
function button123() {
  item = stt.value;
  // console.log(item);

  // function handleUpdate(){

  // console.log(item);
  for (let i = 0; i < products.length; i++) {
    if (item == i + 1) {
      var id = products[i].id;
      var link = products[i].link;
      var name1 = products[i].name;
      var inputLinkUpdate = document.getElementById("inputLinkUpdate");
      var inputNameUpdate = document.getElementById("inputNameUpdate");
      inputLinkUpdate.value = link;
      inputNameUpdate.value = name1;
      // handleSubmitUpdate()
    }
  }
}

//    let domItem= document.getElementById(item)
//    let iframeItem=domItem.children[0].children[0].src;
//    var inputLinkUpdate = document.getElementById("inputLinkUpdate");
//    var inputNameUpdate = document.getElementById("inputNameUpdate")
//    inputLinkUpdate.value=link;
//    inputNameUpdate.value=name;
//    handleSubmitUpdate()
// }

function handleSubmitUpdate() {
  for (let i = 0; i < products.length; i++) {
    if (item == i + 1) {
      products[i].link = document.getElementById("inputLinkUpdate").value;
      products[i].name = document.getElementById("inputNameUpdate").value;
      showAllProducts(products);
    }
  }
  // showAllProducts(products);
  update1.style.display = "none";
}


// delete
let stt1 = document.getElementById("stt1");
var item1 = 0;
function button1234() {
  item1 = stt1.value;
  console.log(item1);
  for (let i = 0; i < products.length; i++) {
    if (item1 == i + 1) {
      var link1 = products[i].link;
      var name12 = products[i].name;
      var inputLinkdelete = document.getElementById("inputLinkdelete");
      var inputNamedelete = document.getElementById("inputNamedelete");
      inputLinkdelete.value = link1;
      inputNamedelete.value = name12;
    }
  }
}
function handleSubmitdelete() {
    for (let i = 0; i < products.length; i++) {
      if (item1 == i + 1) {
        products.splice(i, 1);
        showAllProducts(products);
      }
    }
    delete1.style.display = "none";
  }
  
