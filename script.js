/*定数変数
============================================================================*/
//素数リスト
const primeNum = [3,5,7,11];
//開始ボタン
const gameStart = document.querySelector('.start');
//正答
let Answer = 0;
//ヒントボタン
const hint = document.querySelector('.hint');
//ヒント回数Count
let hintNum = 0;
//奇数偶数表示
const addeven = document.querySelector('.addeven_content');
//端数表示
const div = document.querySelectorAll('.division_content');
//解答ボタン
const reply = document.querySelector('.reply');
//ユーザー側解答
let replyValue = document.querySelector('#input_number');
//retryボタン
const conti = document.querySelector('.continue');
//ゲーム結果表示
let gameResult = document.querySelector('.game_result');
/*Class
============================================================================*/
//正答を素数で割るクラス
class AnswerCutter {
    constructor(cut){
        this.cut=cut;
    }
    AddEven(){
        let ae = Answer % this.cut;
        if (ae === 0){
            return `<strong>偶数</strong>`;
        }else{
            return `<strong>奇数</strong>`;
        }
    };
    Cutter(){
        let cu = Answer % this.cut;
        if (cu === 0){
            return `<strong>Yes</strong>`
        }else{
            return `<strong>No</strong>`;
        }
    };
};

//reset関数
const reset =()=>{
    Answer = 0;
    hintNum = 0;
    addeven.innerHTML = `<span class="addeven_content"></span>`
    for (let i=0;i<4;i++){
            div[i].innerHTML = `<span class="division_content"></span>`
    }
};
const resetAll =()=>{
    reset();
    gameResult.textContent='';
    replyValue.value='';
};

/*開始プログラム
========================================================================================*/

//ゲームスタート、問題生成、奇数偶数判定
gameStart.addEventListener('click',()=>{
    //reset
    reset();
    //問題正解生成
    Answer = Math.ceil(Math.random() * 100);
    //奇数偶数判定
    let two = new AnswerCutter(2);
    addeven.innerHTML = two.AddEven();
});


/*ヒントプログラム
========================================================================================*/

//ヒント生成３、５、７、１１
hint.addEventListener('click',()=>{
    switch(hintNum){
        //3
        case 0:
            let three = new AnswerCutter(3);
            div[hintNum].innerHTML = three.Cutter();
            break;
        //5
        case 1:
            let five = new AnswerCutter(5);
            div[hintNum].innerHTML = five.Cutter();
            break;
        //7
        case 2:
            let seven = new AnswerCutter(7);
            div[hintNum].innerHTML = seven.Cutter();
            break;
        //11
        case 3:
            let eleven = new AnswerCutter(11);
            div[hintNum].innerHTML = eleven.Cutter();
            break;
    };
    //ヒント回数増加
    hintNum += 1;
});

/*正答プログラム
========================================================================================*/

//答え合わせ機構
reply.addEventListener('click',()=>{
    replyValue = document.querySelector('#input_number');
    gameResult = document.querySelector('.game_result');
    if (replyValue.value === Answer){
        gameResult.innerHTML=`正解：${Answer}`;
    }else{
        gameResult.innerHTML=`不正解：${Answer}`;
    };
});


//リトライ(reset)
conti.addEventListener('click',()=>{
    resetAll();
 
});