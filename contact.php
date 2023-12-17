<?php
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

$msg = "";

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['send'])) {
        $name = htmlspecialchars($_POST["user_name"]);
        $email = htmlspecialchars($_POST["user_email"]);
        $phone = htmlspecialchars($_POST["user_phone"]);
        $message = htmlspecialchars($_POST["user_msg"]);

        if (!validateEmail($email)) {
            $msg = "Invalid email address. Please provide a valid email.";
        } else {
            $to = "xyz.123@mail.com"; // Replace with your email address
            $subject = "Form Submission";
            $headers = "From: $email";

            $email_content = "Name: $name\n";
            $email_content .= "Email: $email\n";
            $email_content .= "Phone: $phone\n\n";
            $email_content .= "Message:\n$message";

            if (mail($to, $subject, $email_content, $headers)) {
                $msg = "Sent Successfully! Thank you, $name. We will contact you shortly!";
                // Optional: Redirect to a thank-you page
                header("Location: thank-you.php");
                exit();
            } else {
                $msg = "Something went wrong! Please try again later.";
            }
        }
    } elseif (isset($_POST['clear'])) {
        $_POST = array();
        $msg = "Form is cleared";
    }
}
?>


