'use strict';

var dataCount = 0;               //登録したデータの数
var receiveData = new Array();   //選んだ結果として出すデータ

(function() {
    var kujiBtn = document.getElementById('kuji-btn');

    //選ぶボタンを推した時の挙動
    kujiBtn.addEventListener('click', function(){

        if (dataCount == 0) {
            alert('データが登録されてませんよ！！！');
        } else {
            var n = Math.floor(Math.random() * dataCount);
            this.textContent = receiveData[n];            
        }

    });

})();

function send() {
    var param = document.form.param.value;
    receiveData[dataCount] = param;
    dataCount++;

    //デバック
    console.log(param);
    console.log(dataCount);
    console.log(receiveData);
    console.log(receiveData.length);

    return false;
}
