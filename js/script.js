$(document).ready(function() {
    console.log("ready");
       
    /**Input */
    let input = $("input[type=text]")

    /**génère un nombre aléatoire */

    let randomNumber = Math.floor(Math.random() * 10) 


    /**Ajouter la class animated et bouceInUp (animate.css => link) */
    input.addClass("animated bounceInUp")

    /**Au bout d'1 sec enlevé les class */
    setTimeout(function() {
        input.removeClass("animated bounceInUp")
    }, 1000)

    /**Si le from est submit... */

    $("#formUser").on("submit", function(e) {
        e.preventDefault();

        /**Valeur rentrée dans l'input */
        let userValue = parseInt(input.val())

        /**Quand userValue est différent de randomNumber il perd  */
        if(randomNumber !== userValue) {

            /**Remettre la valeur vide */
            input.val("")

            /**Ajouter la class error (css), animated et bounce (animate.css => link) */
            input.addClass("error animated bounce")

            /**Au bout d'1 sec enlevé les class */
            setTimeout(function() {
                input.removeClass("error animated bounce")
            }, 1000)

            console.log("Loose")
        }

        /**Quand userValue est différent de randomNumber il Gagne  */
        if(randomNumber === userValue) {
            console.log("Win")

            /**Cercle */
            let circle = $(".fa-circle-check")

            /**enlever le input */
            input.remove()

            /**Afficher le cercle */
            circle.show()

            /**Ajouter la class animated et jackInTheBox (animate.css => link) */
            circle.addClass("animated jackInTheBox")
        }
        $(".fa-circle-check").on("click", function() {
            location.reload()
        })
    })
});