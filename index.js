// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };

// const configurationObject = {
//     method:"POST",
//     headers:{
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
// }

// fetch('http://localhost:3000/dogs', configurationObject)
//     .then(res=>res.json())
//     .then(obj=>console.log(obj)) 
//     .catch(error=>{
//         alert("Have Error");
//         console.log(error.message)
//     })

function submitData(inputName,inputEmail) {
    return fetch(`http://localhost:3000/users`, {
        method:"POST",
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify({
            name:inputName,
            email:inputEmail,
        })
    })
        .then(res=>res.json())
        .then(data=>appendID(data))
        .catch(error=>appendError(error))

}

function appendID(data) {
    const newDiv = document.createElement('div')
    newDiv.textContent = data.id
    document.querySelector('body').appendChild(newDiv)
}

function appendError(error) {
    const newDiv = document.createElement('div')
    newDiv.textContent = error.message
    document.querySelector('body').appendChild(newDiv)
}




