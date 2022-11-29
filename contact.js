
let form = document.getElementById('contact_form').addEventListener('submit', createcontact);


async function createcontact(e){
    e.preventDefault();


    let myQuestion = e.target;
    let formData = new FormData(myQuestion);
    let json = convertToJSON(formData);  
    let url = '/api/sendmail.php';
    let header = new Headers();
    header.append('Content-type', 'application/json');
    let request = new Request( url, {
        headers: header,
        body: json,
        method: 'POST',
    });
    console.log(json)
    await fetch(request)
        .then((response) => response.text())
        .then((data)=>{
            console.log('Response from server');
            console.log(data);
        })
    .catch(console.warn);

}

function convertToJSON(formData){
    let obj={};
    for(let key of formData.keys()){
        obj[key]= formData.get(key);
    }
    return JSON.stringify(obj);
}