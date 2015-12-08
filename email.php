// Code for sending e-mail
 
 
  <?php
  		$name = $_POST['name'];
  		$email = $_POST['email'];
  		$message = $_POST['message'];
 
    		$email_subject = "New Form submission";
 
    		$email_body = "$name sent you a message concerning the Purpose and Identity Processes Lab.\n".
                            "$message".
 
  		$headers = "From: $email \r\n";

  		mail("rmt225@gmail.com",$email_subject,$email_body,$headers);
  		
  	?>
