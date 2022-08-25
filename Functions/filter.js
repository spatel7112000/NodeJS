const arr=[2,3,4,5,6,7,8,9,0];

arr.filter((item)=>{
    console.log(item)
})


//if total calculate the value of 3

const arr1=[2,3,4,3,6,7,3,9,0];
console.log("calculate the total value of 3 is")
let result1 =arr1.filter((item)=>{
  return item===3
})
console.log(result1)


//if value are less than 6

const arr2=[2,3,4,3,6,7,3,9,0];
console.log("value are less than 6")
let result2 =arr2.filter((item)=>{
  return item<6
})
console.log(result2)


//if value are greater than 4

const arr3=[2,3,4,3,6,7,3,9,0];
console.log("value are greater than 4")
let result3 =arr3.filter((item)=>{
  return item>4
})
console.log(result3)

//if value are greater than and equal to 4

const arr4=[2,3,4,3,6,7,3,9,0];
console.log("value are greater than and equal to  4")
let result4 =arr4.filter((item)=>{
  return item>=4
})
console.log(result4)

//if value are less than and equal to 4

const arr5=[2,3,4,3,6,7,3,9,0];
console.log("value are less than and equal to  4")
let result5 =arr5.filter((item)=>{
  return item<=4
})
console.log(result5)