//
//Lab2.js
//Created by Valerij Dimitriev
//
//on 2021.09.08
function validateForm ( )
{
	valid = true;

        if ( document.registration.name.value == "" && " ")
        {
                alert ( "Пожалуйста заполните поле имя.");
                valid = false;
        }
        if ( document.registration.surname.value == "" && " ")
        {
                alert ( "Пожалуйста заполните поле фамилия." );
                valid = false;
        }
        if ( document.registration.password.value == "" && " " )
        {
                alert ( "Пожалуйста заполните поле пароль." );
                valid = false;
        }
        if(document.registration.repeatPassword.value == "" && " ")
        {
            alert("Пожалуйста заполните поле повторить пароль.");
            valid = false;
        }
        if(document.registration.mail.value == "" && " ")
        {
            alert("Пожалуйста заполните поле email.");
            valid = false;
        }
        if(document.registration.sex.value == "Empty")
        {
            alert("Пожалуйста заполните поле пол.");
            valid = false;
        }
        if(document.registration.password.value != document.registration.repeatPassword.value)
        {
            alert("Несовпадение паролей. Пожалуйста повторите правильно пароль");
            valid = false;
        }
        if(document.registration.login.value == "administrator" && "admin")
        {
            alert("Имя пользователя не может быть admin или administrator");
            valid = false;
        }
        if(document.registration.login.value == document.registration.password.value)
        {
            alert("Пароль и логин не должны совпадать");
            valid = false;
        }
        return valid;
}