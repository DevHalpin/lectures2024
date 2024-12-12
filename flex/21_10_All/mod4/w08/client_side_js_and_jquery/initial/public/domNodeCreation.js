const node = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
const list = document.getElementById("main-list");
list.appendChild(node);

// remove nodes
list.childNodes;
list.removeChild(list.childNodes[0]);