function Appearence(request, response) {
    function Saudar() {
        const atualTime = new Date();

        console.log(atualTime);

        if (atualTime.getHours() <= 4) {
            return "boa madrugada"
        } else if (atualTime.getHours() <= 12) {
            return "bom dia";
        } else if (atualTime.getHours() <= 18) {
            return "boa tarde";
        } else {
            return "boa noite";
        }
    }

    response.json({
        saudacao: Saudar(),
    });
}

export default Appearence;