$(document).ready(function() {
  $("form#list").submit(function(event) {
    event.preventDefault();

 
    var food1 = $("#item1").val();
    // console.log(food1);
    var food2 = $("#item2").val();
    // console.log(food2);
    var food3 = $("#item3").val();
    // console.log(food3);

    var groceryItems = [food1, food2, food3]
      groceryItems.sort();
      // console.log(groceryItems);

    var groceryList=document.createElement('ul');
    console.log(groceryList);
    groceryItems.forEach(function(groceryItem) {
      var li = document.createElement('li');
      li.textcontent = groceryItems;
      list.appendChild(li);

      var insert = document.querySelector("#insert");
      insert.appendChild(list);
    });

  });
});

// var list=document.createElement('ul');
//   //create a list item for each ice cream flavor
//   flavors.forEach(function(flavor) {
//     var li = document.createElement('li');
//     li.textContent =flavor;
//     list.appendChild(li);
  
//     // Made insert id to
//     var insert = document.querySelector('#insert');
//     insert.appendChild(list);
//     // console.log(insert);