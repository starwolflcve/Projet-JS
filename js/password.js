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
  
    return { score, strength, length, hasUpper, hasDigit, hasSymbol, inBlacklist };
  }
  