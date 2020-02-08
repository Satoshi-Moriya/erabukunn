'use strict';

let dataCount = 0;               //登録したデータの数
let receiveData = [];   //選んだ結果として出すデータ
const kujiBtnDef = document.getElementById('kujiBtn').textContent;
const list = document.querySelector('.regList');

const createRegList = (param) => {
    // HTMlテンプレートの作成
    const html = `
    <li>
        <span>${param}</span>
        <i class="fas fa-backspace delete"></i>
    </li>
    `;

    list.innerHTML += html;
}

(function() {

    let kujiBtn = document.getElementById('kujiBtn');
    let delData = document.getElementById('delData');
    let delRegData = document.getElementById('regData');

    //選ぶボタンを推した時の挙動
    kujiBtn.addEventListener('click', function(){

        if (dataCount == 0) {
            alert('データが登録されてませんよ！！！');
        } else {
            let n = Math.floor(Math.random() * dataCount);
            this.textContent = receiveData[n];            
        }

    });

    // 登録データのリセット
    delData.addEventListener('click', function() {
        receiveData = [];
        dataCount = 0;
        kujiBtn.textContent = kujiBtnDef;
        console.log(receiveData);
        delRegData.textContent = null;
    });

    // 登録データを1つ1つ削除
    list.addEventListener('click', e => {
        let delList = e.target.parentElement;
        let allList = list.querySelectorAll("li");
        console.log(Array.prototype.indexOf.call(allList, delList));
        let delNum = Array.prototype.indexOf.call(allList, delList);
        if(e.target.classList.contains('delete')){
            e.target.parentElement.remove();
            receiveData.splice(delNum, 1);
            dataCount--;
            if(dataCount == 0) {
                kujiBtn.textContent = kujiBtnDef;
            }
            console.log(receiveData);
        }
    })

})();

// データ登録
function send() {
    let param = document.form.param.value;

    // 登録データがからの時アラート
    if (param.length == 0) {
        alert('登録したいデータを入力しなきゃダメだぞ！！！');
        return false;
    } else {
        receiveData[dataCount] = param;
        dataCount++;
    
        createRegList(param);
    
        return false;
    }
}
