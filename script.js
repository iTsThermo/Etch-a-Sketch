let value = 16;

grid(16);

function grid(value){
    
const root = document.getElementById('container');
  
let index = 0;
while(index < value){
        const sketch = document.createElement('div');
        sketch.className = 'columns';
        sketch.style.cssText = 'display: flex; flex-direction: column; margin: 0px';
        root.appendChild(sketch);
        for(let i = 0; i < value; i++){
            const row = document.createElement('button');
            row.className = 'sketch';
            row.style.cssText = 'flex: 1; border: 1px solid black;' + 
                'background-color: #424242;' +
                'height:'+ root.clientHeight/value +'px;' + 
                'width:'+ root.clientWidth/value +'px;';
            sketch.appendChild(row);
        }
    index++;
}

const sketchList = document.querySelectorAll('.sketch');

sketchList.forEach(sketch => {
    sketch.addEventListener("mouseover", () => {
        if (pressed){
        sketch.style.cssText = 'border: 1px solid black;' + 
        'height:'+ root.clientHeight/value +'px;' + 
        'width:'+ root.clientHeight/value +'px;' +
        'margin: 0px;'+ 
        'background: #DCFFB7;';
        }
    });
});

let pressed = false;
window.addEventListener("mousedown", () =>{pressed = true;});
window.addEventListener("mouseup", () =>{pressed = false;});

function clearGrid(){
clear.addEventListener('click', ()=>{
    sketchList.forEach(sketch=>{sketch.style.backgroundColor = '#424242';
})})};

const clear = document.getElementById('clear');
clear.addEventListener('click', clearGrid());

sketchList.forEach(sketch => {
    sketch.addEventListener("mouseover", () => {
        if (pressed){
            sketch.style.cssText = 'border: 1px solid black;' + 
            'height:'+ root.clientHeight/value +'px;' + 
            'width:'+ root.clientHeight/value +'px;' +
            'margin: 0px;'+ 
            'background: #DCFFB7;';
        }
    });
    clear.addEventListener('click', clearGrid());
});

}

const slider = document.getElementById('slide');
slider.addEventListener("input", function() {
    Gridremove();
    grid(slider.value);
});

function Gridremove(){
    const removeSketchList = document.querySelectorAll('.sketch');
    removeSketchList.forEach(sketch =>{
        sketch.remove();
    });
}







