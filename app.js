function calculate() {
    const dayInput = Number(document.querySelector("#day").value)
    const monthInput = Number(document.querySelector("#month").value)
    const yearInput = Number(document.querySelector("#year").value)


    const firstDate = new Date(yearInput, monthInput, dayInput);


    const secondDate = new Date(2023, 8, 15);


    const timeDiff = secondDate - firstDate;

    const years = Math.floor(timeDiff / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor((timeDiff % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
    const days = Math.floor((timeDiff % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    outputDay = document.querySelector(".output-day")
    outputMonth = document.querySelector(".output-month")
    outputYear = document.querySelector(".output-year")

    outputDay.textContent = days
    outputMonth.textContent = months
    outputYear.textContent = years

}
