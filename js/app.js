'use strict';

function timeout(message, time = 0) {
   return new Promise(done => {
       setTimeout(() => done(message), time * 1000);
   });
}

function rand(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function randomMessage() {
   const message = [
       'Привет',
       'Как дела?',
       'Куда пропал?',
       'Давно не виделись'
   ][rand(0, 3)];
   return timeout(message, 1);
}

async function chat() {
   const message = await randomMessage();

   let mes = message;

   str = "<div>" + mes + "</div>";
   $('#chat').append(str);
}


let str = '';

$(document).ready(() => {


	let mes;
	let browserShouldGo ; 


	$('textarea').focus(() => {
        if($('textarea').val('Plesae enter your message')){
            $('textarea').val('');
        }
    });



    $('#sendMessage').click(() => {
        let text = $('textarea').val();

        if(!text){
            $('textarea').val('Plesae enter your message');
            return ;
        }
	

        mes = new message(text);
        $('textarea').val('');

        showMes();

        if (mes.text === 'Good bye, browser!') {
        	$('#chat').append('Good bye, my friend, I will miss you!');
        	$('#mainForm').css('display', 'none');
        	return ;
        }

        browserShouldGo = Math.floor(Math.random() * 4) + 1;
        console.log(browserShouldGo);

        if(browserShouldGo === 4) {
        	$('#chat').append('Sorry, my friend, I have to leave you!');
        	$('#mainForm').css('display', 'none');
        	return ;
        }

        chat();

    });


	function showMes() {
		str = "<div>" + mes.showText() + "</div>";
	    $('#chat').append(str);
	}

});


