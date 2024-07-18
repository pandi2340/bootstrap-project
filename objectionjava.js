// var obj1={
//     name:"ajay",
//     age:20
// }    
// console.log("data type:",typeof(obj1));
// console.log("before adding place & ares:",obj1);
// obj1.place="madurai";
// obj1.area="thallakulam";
// console.log("after adding  place &  area:",obj1);
// console.log("obj place value:",obj1["place"]);


// // Second type
// var obj=new Object();
// obj.name="thalapthi",
// obj.age=20, 
// obj.gender="male";

// console.log("before delete",obj);
// delete obj["name"];
//  console.log("after delete",obj);

//  const user ={
//     name:"vasan",
//     age:30,
//     gender:"male",
//     dispaly: function(){
//         alert("user name is"+ this.name)
//     }
// }
// user={...user, qualification: "dedree"}
// console.log(user);

// const user = new Object()
// user.firstname="vasu"
// user.lastname="thalapathi"
// console.log(user);
// console.log(user["firstname"]+" "+user["lastname"]);
   


const user ={
    firstname :"vasu",
    lastname :"thalapathi",
    marks:{
        sslc:300,
        hsc:400,
        degre:9
    
      },
      fullname: function(){
        return this.firstname+" "+this.lastname
      }
}
 console.log(user.lastname)
 console.log(user.marks.sslc)



