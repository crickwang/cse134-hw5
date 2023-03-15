
export function al(button, el, out)
{
    button.addEventListener('click', (call) => {
        let clone = el.content.cloneNode(true);
        out.appendChild(clone); 
    });
}

export function con(button, dia, can, conf, out, other)
{
    
    button.addEventListener('click', (call) => {
        other.style.display = 'none';
        out.innerText = '';
        out.style.display = 'inline';
        dia.showModal();
        let tf = '';
        can.addEventListener('click', () => {
            tf = 'False';
            out.innerText = `The value returned by the confirm method is : ${tf}`;
        });
        conf.addEventListener('click', () => {
            tf = 'True';
            out.innerText = `The value returned by the confirm method is : ${tf}`;
        });
    });
}

export function pro(button, dia, can, conf, out, inp, other)
{
    
    button.addEventListener('click', (call) => {
        other.style.display = 'none';
        out.innerText = '';
        out.style.display = 'inline';
        dia.showModal();
        can.addEventListener('click', () => {
            out.innerText = "User didn’t enter anything";
        });
        conf.addEventListener('click', () => {
            out.innerHTML = DOMPurify.sanitize(inp.value);
        });
    });
}