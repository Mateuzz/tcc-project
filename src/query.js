export function $(query) {
    return document.querySelector(query);
}

export function $all(query) {
    return document.querySelectorAll(query);
}

export function $id(id) {
    return document.getElementById(id);
}

export function $create(tag) {
    return document.createElement(tag);
}

export function $new({tag, classes, props, id, style}) {
    const ele = document.createElement(tag);
    for (const cl of classes)
        ele.classList.add(cl);
    for (const i in props)
        ele.setAttribute(i, props[i]);
    ele.style = style;
    ele.id = id;
}

export function $child(root, query) {
    return root.querySelector(query);
}

export function $children(root, query) {
    return root.querySelectorAll(query);
}
