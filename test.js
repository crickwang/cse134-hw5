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
    let num = document.getElementById('num').value;
    let name = document.getElementById('name').value;
    let content = document.getElementById('content').value;
    let date = new Date();
    date = date.toString();
    let data = `{"num": ${num}, "name": ${name}, "content": ${content}, "date": ${date}}`;

    let url = 'https://httpbin.org/post';
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('X-Sent-By','javascript');
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () 
    {
        process(xhr.responseText); 
    }
     
    xhr.send(data);
    
}

function getData()
{
    let url = 'https://httpbin.org/get';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('X-Sent-By','javascript');
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () 
    {
        process(xhr.responseText);
    }
    xhr.send();
    
}

function putData()
{
    let num = document.getElementById('num').value;
    let name = document.getElementById('name').value;
    let content = document.getElementById('content').value;
    let date = new Date();
    date = date.toString();
    let data = `{"num": ${num}, "name": ${name}, "content": ${content}, "date": ${date}}`;

    let url = 'https://httpbin.org/put';
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('X-Sent-By','javascript');
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () 
    {
        process(xhr.responseText);
    }
    xhr.send(data);
    
}

function deleteData()
{
    let url = 'https://httpbin.org/delete';
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', url);
    xhr.setRequestHeader('X-Sent-By','javascript');
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () 
    {
        process(xhr.responseText);
    }
    xhr.send();
    
}

function process(text)
{
    let arr = text.split("\n");
    let res = document.getElementById('response');
    let out = '<table>'; 
    for (let i = 1; i < arr.length; i++)
    {
        let two_arr = arr[i].split(":");
        if (two_arr.length == 2)
        {
            let first = two_arr[0].replaceAll('"', '');
            let second = two_arr[1].replaceAll('{', '');
            second = second.replaceAll('}', '');
            second = second.replaceAll(',', '');
            second = second.replaceAll('"', '');
            out = out + `<tr><td>${first}</td><td>${second}</td></tr>`;
        }
        else
        {
            if (arr[i].includes('num'))
            {
                let temp = arr[i].replaceAll("\\", '');
                temp = temp.replaceAll('"', '');
                temp = temp.replaceAll('{', '');
                temp = temp.replaceAll('}', '');
                temp_arr = temp.split(",");
                for (let j = 0; j < temp_arr.length; j++)
                {
                    let temp_1 = temp_arr[j].split(":");
                    out = out + `<tr><td>${temp_1[0]}</td><td>${temp_1[1]}</td></tr>`;
                }
            }
            else
            {
                out = out + `<tr><td>${arr[i]}</td><td>null</td></tr>`;
            }
        }
    }
    out = out + '</table>';
    res.innerHTML = out;
}