import _ from 'lodash';
import "./style.css"
import printMe from "./print";

function component() {
    const element = document.createElement('div');
    const btn = document.createElement("button")

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello")

    btn.innerHTML = 'click me';
    btn.onclick = printMe;
    element.appendChild(btn)

    return element;
}

document.body.appendChild(component());