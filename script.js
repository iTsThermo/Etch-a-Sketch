let numOfBoxes = 272;
const root = document.getElementById('container');

let index = 0;
while(index < numOfBoxes){
    index++;
    if (index % 17 == 0){
        const break_line = document.createElement('div');
        break_line.style.cssText = 'flex-basis: 100%;' + 
            'flex-grow: 1; margin: 0px;';
        root.appendChild(break_line);
    }else{
        const sketch = document.createElement('div');
        sketch.style.cssText = 'border: 1px solid black;' + 
            'height: 30px;' + 
            'width: 30px;' + 
            'margin: 0px;';
        root.appendChild(sketch);
    }
}