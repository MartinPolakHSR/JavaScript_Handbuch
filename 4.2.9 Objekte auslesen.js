let item = {
    name: 'Schrödinger programmiert JAVA',
    price: 44.90,
    author: 'Martin Polak',
    printDescription: function () {
        console.log(this.author + ': ' + this.name);
    }

}


for (let property in item) {
    console.log('Name: '+property);
    console.log('Wert: '+ item[property]);

}


let properties = Object.keys(item);
for (let i=0; i<properties.length; i++) {
    let property = properties[i];
    console.log('Name: '+property);
    console.log('Wert: '+ item[property]);

}
