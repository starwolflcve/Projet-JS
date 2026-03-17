const passwordBlacklist = ["password", "princess", "123456", "sunshine", "princess1", "abc123", "jordan23", "blessed1", "Password1", "password1", "jasmine1", "blink182", "sunshine1", "happy123", "butterfly", "whatever", "Princess1", "tinkerbell", "michael1", "bubbles", "shopping", "purple", "brooklyn", "tigger", "michelle", "ladybug", "iloveyou", "freedom", "Forever21", "diamond", "babygirl", "1qaz2wsx", "william1", "Welcome1", "passw0rd", "money123", "Anthony1", "football", "qwerty", "jessica1", "iloveyou1", "freedom1", "destiny1", "chocolate", "brianna1", "Blessed1", "baseball", "anthony1", "abcd1234", "zachary1" ];

function analyzePassword(password) {
    let score = 0;
    let length = password.length;
    if (length > 8) score += (length - 8) * 2;
  
    let hasUpper = false, hasDigit = false, hasSymbol = false;
    for (const char of password) {
      if (char >= 'A' && char <= 'Z') hasUpper = true;
      if (char >= '0' && char <= '9') hasDigit = true;
      if ((char < '0' || (char > '9' && char < 'A') || (char > 'Z' && char < 'a') || char > 'z')) hasSymbol = true;
    }
    if (hasUpper) score += 15;
    if (hasDigit) score += 15;
    if (hasSymbol) score += 20;
  
    const lowerPwd = password.toLowerCase();
    const inBlacklist = passwordBlacklist.some(pwd => pwd === lowerPwd);
    if (!inBlacklist) score += 20;
  
    const strength = score < 50 ? 'rouge' : score < 75 ? 'orange' : 'vert';
    const entropy = calculateEntropy(password, true, hasUpper, hasDigit, hasSymbol);
    return { score, strength, length, hasUpper, hasDigit, hasSymbol, inBlacklist, entropy };
}

function calculateEntropy(password, hasLower=true, hasUpper, hasDigit, hasSymbol) {
    let charsetSize = 0;
    if (hasLower) charsetSize += 26;  // a-z
    if (hasUpper) charsetSize += 26;  // A-Z  
    if (hasDigit) charsetSize += 10;  // 0-9
    if (hasSymbol) charsetSize += 32; // !@#$ etc. 
  
    const log2 = Math.log2(charsetSize);
    return Math.round(password.length * log2);
}
  
  