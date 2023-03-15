document.getElementById("submit").addEventListener('click', feed);

function feed()
{
    let back = document.getElementById("box").value;
    alert("Thank you for your reply!");
    let node = document.createElement("li");
    let textNode = document.createTextNode(back);
    node.appendChild(textNode);
    document.getElementById("feed_list").appendChild(node);
}

function jump()
{
    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0");
}

