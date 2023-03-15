function postData()
{
    let num = document.getElementById('num');
    let name = document.getElementById('name');
    let content = document.getElementById('content');
    let date = new Date();

    let data = {'num': num.value, 'name': name.value, 'content': content.value, 'date': date.toString()};
    let url = 'https://httpbin.org/post';
    let op = {method:'POST', body: JSON.stringify(data), headers: {'Content-Type': 'appliaction/JSON'}};
    fetch(url, op);
}

function getData()
{
    fetch('https://httpbin.org/get').then(res => res.json()).then(data => {
        alert(data);
        let response = document.getElementById('response');
        response.innerTEXT = JSON.stringify(data);
    });
}

function putData()
{
    let num = document.getElementById('num');
    let name = document.getElementById('name');
    let content = document.getElementById('content');
    let date = new Date();

    let data = {'num': num.value, 'name': name.value, 'content': content.value, 'date': date.toString()};
    let url = 'https://httpbin.org/put';
    let op = {method:'PUT', body: JSON.stringify(data), headers: {'Content-Type': 'appliaction/JSON'}};
    fetch(url, op);
}

function deleteData()
{
    let url = 'https://httpbin.org/delete';
    fetch(url, {method: 'DELETE'});
}