function validateCode (code) {
    const regex = /^[123]/

    return regex.test(String(code))
}

console.log(validateCode(123));