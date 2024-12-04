// Load SweetAlert library
function loadSweetAlert() {
    const script = document.createElement('script');
    script.src = '/scripts/intern/sweetalert2.all.min.js';
    document.head.appendChild(script);
}
loadSweetAlert();

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
        if (!decrypted) {
            Swal.fire({
                icon: 'error',
                title: 'Decryption Failed!',
                text: 'Please check your encryption key or input text.',
                background: '#243b55',
                color: '#ffffff'
            });
        }
    } catch {
        Swal.fire({
            icon: 'error',
            title: 'Decryption Error',
            text: 'Invalid decryption attempt. Try again!',
            background: '#243b55',
            color: '#ffffff'
        });
    }
}

// Copy to Clipboard using SweetAlert for feedback
function copyToClipboard() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");

    Swal.fire({
        icon: 'success',
        title: 'Copied!',
        text: 'Text successfully copied to clipboard.',
        background: '#243b55',
        color: '#ffffff',
        timer: 1500,
        showConfirmButton: false
    });
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
