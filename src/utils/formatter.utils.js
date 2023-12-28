export const formatter = {
    money: (v) => {
        v = v.replace(/\D/g, "")
        v = v.replace(/(\d)(\d{2})$/, "$1,$2")
        v = v.replace(/(?=(\d{3})+(\D))\B/g, ".");

        return v;
    }
}