
const phrase = document.getElementById('phrase');
const ngramValue = document.getElementById('ninput');

const calculate = () => {

    const text = phrase.value;

    const array = text.split(' ');

    const length = Number(ngramValue.value);
  
    let ngramsArray = [];

    for (var i = 0; i < array.length - (length - 1); i++) {
        var subNgramsArray = [];
        for (var j = 0; j < length; j++) {
            subNgramsArray.push(array[i + j])
        }
        ngramsArray.push(subNgramsArray);
    }

    let string = JSON.stringify(ngramsArray, null, 6);

    document.getElementById('output').innerHTML = string;

}