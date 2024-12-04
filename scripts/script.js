// Caesar Cipher Encryption
function caesarEncrypt() {
    let text = document.getElementById("inputText").value;
    let shift = parseInt(document.getElementById("key").value) || 3;
    let result = text.replace(/[a-zA-Z]/g, c =>
        String.fromCharCode(
            ((c.charCodeAt(0) + shift - (c < 'a' ? 65 : 97)) % 26) + (c < 'a' ? 65 : 97)
        )
    );
    document.getElementById("outputText").value = result;
}

// Caesar Cipher Decryption
function caesarDecrypt() {
    let text = document.getElementById("inputText").value;
    let shift = parseInt(document.getElementById("key").value) || 3;
    let result = text.replace(/[a-zA-Z]/g, c =>
        String.fromCharCode(
            ((c.charCodeAt(0) - shift - (c < 'a' ? 65 : 97) + 26) % 26) + (c < 'a' ? 65 : 97)
        )
    );
    document.getElementById("outputText").value = result;
}

// AES Encryption
function aesEncrypt() {
    let text = document.getElementById("inputText").value;
    let key = document.getElementById("key").value || 'default_key';
    let encrypted = CryptoJS.AES.encrypt(text, key).toString();
    document.getElementById("outputText").value = encrypted;
}

// AES Decryption
function aesDecrypt() {
    let text = document.getElementById("inputText").value;
    let key = document.getElementById("key").value || 'default_key';
    try {
        let decrypted = CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
        document.getElementById("outputText").value = decrypted || "Decryption failed!";
    } catch {
        document.getElementById("outputText").value = "Decryption failed!";
    }
}

// Copy to Clipboard
function copyToClipboard() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Text copied to clipboard!");
}

// Drag-and-Drop Handlers
function dragOverHandler(event) {
    event.preventDefault();
}

function dropHandler(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    document.getElementById("inputText").value = data;
}
