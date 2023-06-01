var aa = 0;
function increaseA(){
    aa += 25;
    document.getElementById('one').value = aa;
    document.getElementById('aa').value = aa/25;
    bill();
}
function decreaseA(){
    if(aa > 0){
        aa -= 25;
        document.getElementById('one').value = aa;
        document.getElementById('aa').value = aa/25;
    bill();
    }
}
var bb = 0;
function increaseB(){
    bb += 10;
    document.getElementById('two').value = bb;
    document.getElementById('bb').value = bb/10;
    bill();
}
function decreaseB(){
    if(bb > 0){
        bb -= 10;
        document.getElementById('two').value = bb;
        document.getElementById('bb').value = bb/10;
    bill();
    }
}
var cc = 0;
function increaseC(){
    cc += 9;
    document.getElementById('three').value = cc;
    document.getElementById('cc').value = cc/9;
    bill();
}
function decreaseC(){
    if(cc > 0){
        cc -= 9;
        document.getElementById('three').value = cc;
        document.getElementById('cc').value = cc/9;
    bill();
    }
}
var dd = 0;
function increaseD(){
    dd += 15;
    document.getElementById('four').value = dd;
    document.getElementById('dd').value = dd/15;
    bill();
}
function decreaseD(){
    if(dd > 0){
        dd -= 15;
        document.getElementById('four').value = dd;
        document.getElementById('dd').value = dd/15;
    bill();
    }
}
var ee = 0;
function increaseE(){
    ee += 25;
    document.getElementById('five').value = ee;
    document.getElementById('ee').value = ee/25;
    bill();
}
function decreaseE(){
    if(ee > 0){
        ee -= 25;
        document.getElementById('five').value = ee;
        document.getElementById('ee').value = ee/25;
    bill();
    }
}
function bill() {
     total1= aa + bb + cc + dd + ee;
    document.getElementById("total").innerHTML = total1;
}
function list() {
     if(aa>0)
     document.getElementById("MAC").innerHTML = "King Size Macaroni ("+aa/25 + ")";
     if(bb>0)
     document.getElementById("LAS").innerHTML = "Chicken ("+bb/10 + ")";
     if(cc>0)
     document.getElementById("OME").innerHTML = "Happy Meal Combo ("+cc/9 + ")";
     if(dd>0)
     document.getElementById("OCH").innerHTML = "Bishteks ("+dd/15 + ")";
     if(ee>0)
     document.getElementById("OMI").innerHTML = "Roasted Chicken Pizza ("+ee/25 + ")";
     document.getElementById("lister").innerHTML = total1;
     emp();
}
function emp() {
aa = 0;
document.getElementById('one').value = 0;
document.getElementById('aa').value = 0;
bb = 0;
document.getElementById('two').value = 0;
document.getElementById('bb').value = 0;
cc = 0;
document.getElementById('three').value = 0;
document.getElementById('cc').value = 0;
dd = 0;
document.getElementById('four').value = 0;
document.getElementById('dd').value = 0;
ee = 0;
document.getElementById('five').value = 0;
document.getElementById('ee').value = 0;
}	