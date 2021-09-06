function sendEmail() {

	var name = $('#name').val();
	var tel = $('#tel').val();
	var email = $('#email').val();
	var message = $('#message').val();
	var form = 'name: ' + name + '<br>tel: ' + tel + '<br>email: ' + email + '<br>message: ' + message;
}
	Email.send({
		Host: "smtp.gmail.com",
		Username: "ivanovichdmytro@gmail.com",
		Password: "",
		To: 'dreamdream@gmail.com',
		From: "protsiukprits95@gmail.com",
		Subject: "New Mail On Contact Form From" + name,
		Body: Body,
	}).then(
		message => {
					
			if (message == 'OK') {
				alert('Your mail has been send. Thank you for connecting.');
			}
			else {
				console.error(message);
				alert('There is error at sending message. ')
			}
		}
	);