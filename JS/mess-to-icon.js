$(document).ready(function(){

var originTextArea = $('#origin-text');
var resultTextArea = $('#converted-text');
var copyBtn = document.querySelector('#copy-result');
var transBtn = document.querySelector('#transTypeBtn');
var transType = "txt2icn";
function doConversion() {
	var originText = originTextArea.val();
	if (transType == 'txt2icn'){
	 	originText = originText.toLowerCase();
   		originText = originText.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|a/g, "😀");
    	originText = originText.replace(/b/g, "😃");
   	    originText = originText.replace(/c/g, "😁");
    	originText = originText.replace(/đ|d/g, "😅");
   		originText = originText.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|e/g, "🥰");
  	    originText = originText.replace(/f/g, "🤣");
   	    originText = originText.replace(/g/g, "🥲");
    	originText = originText.replace(/h/g, "☺️");
        originText = originText.replace(/ì|í|ị|ỉ|ĩ|i/g, "😊");
        // There's no letter "j", I don't understand why
        originText = originText.replace(/k/g, "😇");
        originText = originText.replace(/l/g, "😉");
        originText = originText.replace(/m/g, "😒");
        originText = originText.replace(/n/g, "😞");
        originText = originText.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|o/g, "😙");
        originText = originText.replace(/p/g, "😟");
        originText = originText.replace(/q/g, "😕");
        originText = originText.replace(/r/g, "🙂");
        originText = originText.replace(/s/g, "🙃");
        originText = originText.replace(/t/g, "☹️");
        originText = originText.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|u/g, "😡");
        originText = originText.replace(/v/g, "😍");
        originText = originText.replace(/x/g, "😩");
        originText = originText.replace(/ỳ|ý|ỵ|ỷ|ỹ|y/g, "😭");
    	originText = originText.replace(/w/g, "😳");
    	originText = originText.replace(/z/g, "😠");
    	originText = originText.replace(/ /g, "."); // Replace space with dot

        // Some system encode Vietnamese combining accent as individual utf-8 characters
        originText = originText.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
        originText = originText.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư		   
}
else if (transType == 'icn2txt'){
		originText = originText.toLowerCase();
   		originText = originText.replace(/😀/g, "a");
    	originText = originText.replace(/😃/g, "b");
   	    originText = originText.replace(/😁/g, "c");
    	originText = originText.replace(/😅/g, "d");
   		originText = originText.replace(/🥰/g, "e");
  	    originText = originText.replace(/🤣/g, "f");
   	    originText = originText.replace(/🥲/g, "g");
    	originText = originText.replace(/☺️/g, "h");
        originText = originText.replace(/😊/g, "i");
        // There's no letter "j", I don't understand why
        originText = originText.replace(/😇/g, "k");
        originText = originText.replace(/😉/g, "l");
        originText = originText.replace(/😒/g, "m");
        originText = originText.replace(/😞/g, "n");
        originText = originText.replace(/😙/g, "o");
        originText = originText.replace(/😟/g, "p");
        originText = originText.replace(/😕/g, "q");
        originText = originText.replace(/🙂/g, "r");
        originText = originText.replace(/🙃/g, "s");
        originText = originText.replace(/☹️/g, "t");
        originText = originText.replace(/😡/g, "u");
        originText = originText.replace(/😍/g, "v");
        originText = originText.replace(/😩/g, "x");
        originText = originText.replace(/😭/g, "y");
    	originText = originText.replace(/😳/g, "w");
    	originText = originText.replace(/😠/g, "z");
      originText = originText.replace(/\./g,' '); // Replace dot with space
};
	resultTextArea.val(originText);
}

copyBtn.addEventListener('click', function(event) {
	resultTextArea.select();
	try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		console.log('Copying text command was ' + msg);
	} catch (err) {
		console.log('Oops, unable to copy');
	}
});

transBtn.addEventListener('click', function(event) {
	if (transType == 'icn2txt'){
		transType = 'txt2icn';
		document.getElementById('typeConvert').innerHTML = 'Nhập đoạn văn bản cần chuyển đổi: (Loại dịch: Tin nhắn ---> icon)';
	} else if (transType == 'txt2icn'){
		transType = 'icn2txt'
		document.getElementById('typeConvert').innerHTML = 'Nhập đoạn văn bản cần chuyển đổi: (Loại dịch: Icon ---> tin nhắn)';
	}
    doConversion();
});
originTextArea.bind('input propertychange', function() {
	doConversion();
});
});
