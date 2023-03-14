//acess the last element of an array
let arr1=[3,7,34,90,12]
let arr=arr1[arr1.length -1]
console.log(arr)
let arr2=[true,"green","where",12,56]
let arrs=arr2[arr2.length -1]
console.log(arrs)
//joins to a string
const mypets=["cow","bird","snake","dog"]
console.log(mypets.join())


var arr3=[-5,9,5,3,2,-3,6,8,4,1]
let sorting=arr3.sort((a,b)=>a-b)
console.log(sorting)

//removes duplicates
var arry = ["apple", "mango", "apple","orange", "mango", "mango"];

function remove(arr) {
return arry.filter((item,
index) => arry.indexOf(item) === index);

}

console.log(remove(arry));


//search for a word
let arr5=["the","way","x",4]
let words="we"
if (arr5.includes(words)) {
    console.log(words  + " " +"was found")
    
}
else{
    console.log("the search was not found")
}
//sort a string
let wording="sevink"
function ReverseString(str){
    return str.split('').reverse().join('')
}
console.log(ReverseString(wording))

