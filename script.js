function swap(char1,char2){
    var x = char1;
    char1 = char2;
    char2 = x;
    return char1+char2
}
// alert(swap('x','y'));
function swappair(str){
    var newstring = '';
    if(str.length%2 == 0 ){
        for(var i = 0; i < str.length; i+=2){
            newstring = newstring + swap(str[i],str[i+1]);
        }
    }
    return newstring
}
console.log(swappair('ahmedf'))
