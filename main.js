console.log('hello world')



resize = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let x = window.screenX;
    let y = window.screenY;

    let url = window.location;

    let title = document.title;
    let modify = document.lastModified;
    document.querySelector('#winProp').innerText = `The window size is ${width} pixels wide and ${height} pixels tall \n Window offset is ${x} from the left and ${y} from the top of the display \n The page URL is ${url}`;
    document.querySelector('#docProp').innerText = `Document title is ${title} \n This document was last updated on ${modify}`;
};

resize();