document.getElementById("calculate").addEventListener("click", function () {
    const birthday = new Date(document.getElementById("birthday").value);
    const today = new Date();

    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").textContent =
        `العمر: ${years} سنة و ${months} شهر و ${days} يوم`;
});
