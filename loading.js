let username;
document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("MyText").value;

    const progress = document.getElementById("progressLine");
    const output = document.getElementById("NumberInput");

    // Reset animasi bar
    progress.classList.remove("animate");
    void progress.offsetWidth;
    progress.classList.add("animate");

    // Teks berubah-ubah
    const loadingMessages = [
        "ANALYZING HEART PATTERN.....",
        "CONNECTNG W/ UR HOTSPOT......",
        "MY PING IS JUMPING😣💢❗",
        "DISCONECTED...💩🤬",
        "ONLINE BACK..",
        "CALCULATE 1847589^&^8&&^*&---&***!@(!@*(*@(!20021-12--1201-0200903998329##$$$@%@&@&!@@*028018209180😖😤😩⁉⁉ POSSIBLE CHANCE.....",
        
    ];

    let index = 0;
    output.textContent = loadingMessages[index];

    const interval = setInterval(() => {
        index++;
        if (index < loadingMessages.length) {
            output.textContent = loadingMessages[index];
        }
    }, 1300); // Ubah teks tiap 1.3 detik

    // Setelah 10 detik (sesuai durasi animasi), tampilkan hasil tebakan
    setTimeout(() => {
        clearInterval(interval);
        output.textContent = `BANG!!! GOT U , UR NUMBER IS ${username} 😲🤯🤯💘💥.lopyu kayy syg bye..`;
    }, 10000);
};
