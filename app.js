const container = document.querySelector(".container"),
qrInput = container.querySelector(".form input")
generateBtn = container.querySelector(".form button");
qrImg = container.querySelector(".qr-code img");


generateBtn.addEventListener("click",()=>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText="Generating QR code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    console.log(qrValue);
    qrImg.addEventListener("load", ()=>{
        container.classList.add("active");
        generateBtn.innerText = "Generate QR code"
    });
   
});



qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        container.classList.remove("active");
    }
});

