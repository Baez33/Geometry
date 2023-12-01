//perimetersquare
function  squarePerimeter(side) {
    return side *4;
}

function squarePerimeterCalculate () {
    const numberSide = document.getElementById("squareInput");
const result = parseFloat(numberSide.value);
const perimeter = squarePerimeter(result);
document.getElementById("squarePerimeter").innerText = "Its perimeter is:" + perimeter + "cm";
}

//areasquare
function squareArea(side) {
    return side*side
}

function squareAreaCalculate () {
    const number = document.getElementById("squareInput");
    const result = parseFloat(number.value);
    const area = squareArea(result);
    document.getElementById("squareArea").innerText = "Its Area is:" + area + "cm^2"
}

//PerimeterCircle 2 * pi * r
function circlePerimeter(radio) {
    return 2 * Math.PI * radio;
}
function circlePerimeterCalculate (){
    const number = document.getElementById("circleInput");
    const result = parseFloat(number.value);
    const perimeter = circlePerimeter(result);
    document.getElementById("circlePerimeter").innerText = "Its the perimeter is:" + perimeter + "cm"
}

//areaCircle = pi *r^2
function circleAreaCalculate () {
    const number = document.getElementById("circleInput");
    const result = parseFloat(number.value);
    const area = circleArea(result);
    document.getElementById("circleArea").innerText = "Its area is:" + area + "cm"
}

//perimeterTriangle side * side * side
function trianglePerimeter(side) {
    return side*side*side
}

function trianglePerimeterCalculate () {
    const numberSide = document.getElementById("triangleInput");
    const result = parseFloat(numberSide.value);
    const perimeter = trianglePerimeter(result);
    document.getElementById("trianglePerimeter").innerText = "Its perimeter is:" + perimeter + "cm"
}
//areaTriangle  base * altura/2
function triangleArea(base, height) {
    
 
    return (base * height) / 2;
    }
    
    function triangleAreaCalculate() {
        const base = parseFloat(document.getElementById("triangleInputBase").value);
        const height = parseFloat(document.getElementById("triangleInputHeight").value);
        const area = triangleArea(base, height);
        document.getElementById("triangleArea").innerText = "Its area is: " + area + "cm^2";
    }