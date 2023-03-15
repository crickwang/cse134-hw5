export let arr = new Array();

let button = document.getElementById("add");
let el = document.getElementById("d1");
let out = document.getElementById("list");
let title = document.getElementById("title1");
let date = document.getElementById("date1");
let sum = document.getElementById("sum1");
let save = document.getElementById("save1");
window.addEventListener("DOMContentLoaded", add);

export function add()
{
    button.addEventListener('click', call);
}

export function call()
{
    el.showModal();
    save.addEventListener('click', call1);
}

export function call1()
{
    let edit = document.createElement("button");
    let edit_text = document.createTextNode("edit");
    edit.appendChild(edit_text);
    let remove = document.createElement("button");
    let remove_text = document.createTextNode("remove");
    remove.appendChild(remove_text);

    let node = document.createElement("li");
    let textNode = document.createTextNode(`${title.value}(${date.value}): ${sum.value}`);
    title.value = '';
    date.value = '1999-01-02';
    sum.value = '';
    node.appendChild(textNode);
    node.appendChild(edit);
    node.appendChild(remove);
    out.appendChild(node);

    alert(edit.innerHTML);

    node.setAttribute("id", `div${arr.length}`);
    edit.setAttribute("id", `edit${arr.length}`);
    remove.setAttribute("id", `remove${arr.length}`);

    edit.addEventListener('click', edi);
    remove.addEventListener('click', remo);
    localStorage.setItem(arr.length, JSON.stringify(node));
    arr.push(node);
    
}



let el1 = document.getElementById("d2");
let save1 = document.getElementById("conf2");
let ind = 0;

export function remo()
{
    el1.showModal();
    for (let i = 0; i < arr.length; i++)
    {
        
        if (parseInt(this.id.split('remove')[1]) == i)
        {
            ind = i;
            break;
        }
    }
    save1.addEventListener('click', rm_confirm);
}

export function rm_confirm()
{
    let node = arr[ind]
    node.remove();
    arr.splice(ind, 1);
    ind = 0;
    for(let i = 0; i < arr.length; i++)
    {
        node = arr[i];
        for (let child of node.childNodes)
        {
            if(child.innerText == "edit")
            {
                child.setAttribute("id", `edit${i}`);
            }
            if(child.innerText == "remove")
            {
                child.setAttribute("id", `remove${i}`);
            }
        }
        node.setAttribute("id", `div${i}`);
        localStorage.setItem(i, JSON.stringify(node));
    }

    localStorage.removeItem(arr.length);
}


let el2 = document.getElementById("d3");
let save2 = document.getElementById("save3");
let title1 = document.getElementById("title2");
let date1 = document.getElementById("date2");
let sum1 = document.getElementById("sum2");

export function edi()
{
    el2.showModal();
    for (let i = 0; i < arr.length; i++)
    {
        if (parseInt(this.id.split('edit')[1]) == i)
        {
            ind = i;
            break;
        }
    }
    save2.addEventListener('click', ed_confirm);
}

export function ed_confirm()
{
    let node = arr[ind]
    let newNode = `${title1.value}(${date1.value}): ${sum1.value}`;
    node.firstChild.replaceWith(newNode);
    title1.value = '';
    date1.value = '1999-01-02';
    sum1.value = '';
    localStorage.setItem(ind, JSON.stringify(node));
}