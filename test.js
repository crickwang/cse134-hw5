window.onload = function(){
    let get = document.getElementById('get');
    let put = document.getElementById('put');
    let post = document.getElementById('post');
    let delete_but = document.getElementById('delete');

    get.addEventListener('click', getData);
    put.addEventListener('click', putData);
    post.addEventListener('click', postData);
    delete_but.addEventListener('click', deleteData);
}


function postData()
{
    let num = document.getElementById('num');
    let name = document.getElementById('name');
    let content = document.getElementById('content');
    let date = new Date();

    let data = {'num': num.value, 'name': name.value, 'content': content.value, 'date': date.toString()};
    let url = 'https://httpbin.org/post';
    let op = {method:'POST', body: JSON.parse(data), headers: {'Content-Type': 'appliaction/JSON'}};
    fetch(url, op);
}

function getData()
{
    let res = document.getElementById('response');
    let url = 'https://httpbin.org/get';
    let op = {method: 'GET'};
    fetch(url, op).then(response => response.json()).then(data => {
        alert(JSON.stringify(data));
        res.innerHTML = JSON.stringify(data);
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
    let op = {method:'PUT', body: JSON.parse(data), headers: {'Content-Type': 'appliaction/JSON'}};
    fetch(url, op);
}

function deleteData()
{
    let url = 'https://httpbin.org/delete';
    let op = {method: 'DELETE'};
    fetch(url, op);
}