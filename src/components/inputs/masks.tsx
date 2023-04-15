export const cpf = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength=14;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-")
    e.currentTarget.value = value
    return e;
}

export const date = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength=10;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d{2})(\d{4})/, "$1-$2-$3")
    e.currentTarget.value = value
    return e;
}

export const cnpj = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength=18;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})/, "$1.$2.$3/$4-")
    e.currentTarget.value = value
    return e;
}

export const cep = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength=9;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{5})/, "$1-")
    e.currentTarget.value = value
    return e;
}