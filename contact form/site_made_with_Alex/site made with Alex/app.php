<?php 

use PHPMailer\PHPMailer\PHPMailer;

if(isset($_POST['nume']) && isset($_POST['email'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['mesaj'];
    $telefon = $_POST['telefon'];


    require_once PHPMailer/PHPMailer.php;
    require_once PHPMailer/SMTP.php;
    require_once PHPMailer/Exception.php;


    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "emailtauaici@gmail.com";
    $mail->Password = "Parola ta de la email";
    $mail->Port = 465;
    $mail->SMTPSecure = "ssl";

    $mail->isHTML(true);
    $mail->setForm($email,$name);
    $mail->addAddress("emailtu ai aicea");
    $mail->Subject = ("$email ($subject)");
  
}

?>
