const parseAccountNumberPipe = (accountNumber) => {
    return accountNumber.replace(/-/g, '');
}
export { parseAccountNumberPipe };