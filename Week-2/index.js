class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log(`Painting with color ${this.color}`);
    }
    
 }
 
 const rect = new Rectangle(2, 4, "blue")
 const area = rect.area();
 rect.paint();
 console.log(area)

 let rect1 = {
    height: 2,
    width: 5,
    area: function(){
        console.log(this.height * this.width);
    }
 }

 rect1.area();

//  Maps
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));

function waitFor3s(resolve){
    setTimeout(() => {
        resolve();
    }, 3000);
}

function main(){
    console.log("Called after 3s");
}

waitFor3s(main)