let container=document.getElementById("container");

let data=[];

fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
.then(function(res){
    return res.json();
})

.then (function(res){
    let data=res.data
    console.log("data:",data)
    database(data)
})


let table=document.getElementById("#table");



function database(data){
    data.forEach(function(ele,i){
        let div=document.createElement("div");

        let serialNO=document.createElement("p");
        serialNO.textContent=ele.id


        let gender=document.createElement("h3");
        gender.innerText=ele.gender

        let name=document.createElement("h3");
        name.innerText=ele.name;

        let department=document.createElement("h3");
        department.innerText=ele.department

        let salary=document.createElement("h3");
        salary.innerHTML=ele.salary

      div.append(serialNO,name,gender,department,salary)
      container.append(div)
        
    })
}

