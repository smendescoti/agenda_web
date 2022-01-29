/*
    Validador simples para campos do tipo texto,
    voltado para o REACT HOOK FORM
*/
const textValidation = (value) => {

    if (value.trim().length < 6) {
        return "Por favor, informe no mínimo 6 caracteres.";
    }
    else if (value.trim().length > 150) {
        return "Por favor, informe no máximo 150 caracteres.";
    }

    return true;
}

export default textValidation;