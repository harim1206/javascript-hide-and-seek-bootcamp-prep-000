//document.querySelector('div')
//document.getElementByTagName('div')[0]
//returns a nodeList
//document.querySelectorAll('div')
/*
Define a function getFirstSelector(selector), which accepts a selector and returns
the first element that matches.

Define a function nestedTarget() that pulls a .target out of #nested (# is used
for IDs in selectors — but you knew that because you read the docs, right? :) ).
(Note that in index.html #nested and .target just happen to be divs.
This method should work with arbitrary elements.)

Define a function increaseRankBy(n) that increases the ranks in all of the
.ranked-lists by n. (You might need to make use of parseInt()

Define a function deepestChild() that pulls out the most deeply nested child
from div#grand-node. (Remember, you can iterate over elements and call
querySelector() and querySelectorAll() on them. This is challenging to
implement correctly, but not beyond your ability!)

*/

function getFirstSelector(selector){
  return document.querySelector(selector)

}

function nestedTarget(){
  return document.querySelector('#nested .target')
}


//Define a function increaseRankBy(n) that increases the ranks in all of the
//.ranked-lists by n. (You might need to make use of parseInt()

function increaseRankBy(n){

  var rankedLists = document.querySelectorAll('.ranked-list')
  var firstList = rankedLists[0]
  var secondList = rankedLists[1]

  var children = firstList.children

  for(var i=0; i<children.length; i++){
    console.log(`children ${i}: ${children[i].innerHTML}`)
    children[i].innerHTML = parseInt(children[i].innerHTML)+n
    console.log(`children ${i}: ${children[i].innerHTML}`)

  }

  var children2 = secondList.children

  for(var i=0; i<children2.length; i++){

    children2[i].innerHTML = parseInt(children2[i].innerHTML)+n

  }


  return rankedLists
}




/*
Define a function deepestChild() that pulls out the most deeply nested child
from div#grand-node. (Remember, you can iterate over elements and call
querySelector() and querySelectorAll() on them. This is challenging to
implement correctly, but not beyond your ability!)
*/

function deepestChild(){

  var element = document.querySelector('#grand-node')
  console.log(`element: ${element}`)

  if (div.childElementCount>0){
    element = element.children[0]
  }else{
    return element
  }
}
