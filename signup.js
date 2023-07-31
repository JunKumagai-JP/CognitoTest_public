// ユーザープールの設定
const poolData = {
    UserPoolId : 'ap-northeast-1_52409aVZ8',
    ClientId : '3i03u57ccd65ipocm3qf5g3ps1'
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
 
var attributeList = [];
 
/**
 * 画面読み込み時の処理
 */
$(document).ready(function() {
		
	// Amazon Cognito 認証情報プロバイダーの初期化
	AWSCognito.config.region = 'ap-northeast-1'; // リージョン
	AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials({
	    IdentityPoolId: 'ap-northeast-1:9e331007-976a-488e-8dbb-24c33016e66a'
	});
		    
	// 「Create Account」ボタン押下時
	$("#createAccount").click(function(event) {
	    signUp();
	});
});
 
/**
 * サインアップ処理。
 */
var signUp = function() {
			
	var userID = $("#email").val();
	var name = $("#name").val();
	var nickname = $("#nickame").val();
	var password = $("#password").val();
			
	// 何か1つでも未入力の項目がある場合、処理終了
    if (!userID | !name | !nickname | !password) { 
    	return false; 
    }
		    
    // ユーザ属性リストの生成
	var dataNickName = {
		Name : "nickname",
		Value : nickname
	}
	var attribute_nickname = new AmazonCognitoIdentity.CognitoUserAttribute(dataNickame);
			
    attributeList.push(attribute_nickname);
			
    // サインアップ処理
    userPool.signUp(userID, password, attributeList, null, function(err, result){
	    if (err) {
	    	alert(err);
			return;
	    } else {
	      	// サインアップ成功の場合、アクティベーション画面に遷移する
	    }
    });
}