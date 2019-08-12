var count = 1000;
var temp;
var start1 = new Date();
for (var i = 0; i < count; i++) {
    temp = i + count;
}
console.log('用例1', new Date() - start1)
var start2 = new Date();
for (var i = 0; i < count; i++) {
    temp = window.pageYOffset;
}
console.log('用例2', new Date() - start2)
var start3 = new Date();
for (var i = 0; i < count; i++) {
    document.write("<p>重绘与回流性能测试</p>");
}
console.log('用例3', new Date() - start3)