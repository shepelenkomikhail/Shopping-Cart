const CURR_FORMATER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency"
})

export default function FormatCurrency(n: number) {
    return CURR_FORMATER.format(n);
}