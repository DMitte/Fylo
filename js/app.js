$(document).ready(function () {
    $('#registro').validate({
        /*reglas para la validacion*/
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        /*mensajes personalizados para al validacion*/
        messages :{
            email: {
                email : 'Pleace enter a valid email address'
            }
        }
    });
});