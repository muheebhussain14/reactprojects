// creating rendering function
function customRender(reactElement, container){
    
    /*
    MANUAL APPROACH (NOT RECOMMENDED)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.href)
    container.appendChild(domElement)
    */
    
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

// making a section 
const reactElement = { 
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

// rendering it
const mainContainer = document.querySelector('#root');
customRender (reactElement, mainContainer)