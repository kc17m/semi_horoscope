let output = document.getElementById("output");
let input = document.getElementById("txt");

function show() {
    console.log("test");
    let month = input.value.toLowerCase().trim();
    console.log(month);

    switch (month) {
        case "mar":
            output.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_aries.png" alt="Aries"><h2>Your horoscope is Aries</h2><br><p>Today your patience might be tested when one or more of your projects gets put on hold by someone… </p>`
            break;
        case "apr":
            output.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_taurus.png" alt="Taurus"><h2>Your horoscope is Taurus</h2><br><p>Your intense energy makes you a great candidate for a leadership position right now, so if you are…</p>`
            break;
        case "may":
            output.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_gemini.png" alt="Gemini"><h2>Your horoscope is Gemini</h2><br><p>If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…</p>`
            break;
        case "jun":
            output.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_cancer.png" alt="Cancer"><h2>Your horoscope is Cancer</h2><br><p>Too many different elements in your life are overlapping with each other right now—and it's your…</p>`
            break;
        case "jul":
            output.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_leo.png" alt="Leo"><h2>Your horoscope is Leo</h2><br><p>The issues you'll be dealing with today are very complicated ones—you will have to navigate your…</p>`
            break;
        case "aug":
            output.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_virgo.png" alt="Virgo"><h2>Your horoscope is Virgo</h2><br><p>You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…</p>`
            break;
        case "sep":
            output.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_libra.png" alt="Libra"><h2>Your horoscope is Libra</h2><br><p>Pick a cultural event that's coming up and get some tickets for it today.</p>`
            break;
        case "oct":
            output.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_scorpio.png" alt="Scorpio"><h2>Your horoscope is Scorpio</h2><br><p>Someone will challenge a belief that you've held for a very long time today—and they will say an…</p>`
            break;
        case "nov":
            output.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_sagittarius.png" alt="Sagittarius"><h2>Your horoscope is Sagittarius</h2><br><p>Someone in your life needs to step up and take on more responsibility—and you need to tell them to....</p>`
            break;
        case "dec":
            output.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_capricorn.png" alt="Capricorn"><h2>Your horoscope is Capricorn</h2><br><p>Breaking the rules is not always a bad thing—especially if the rules limit your creativity.</p>`
            break;
        case "jan":
            output.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_aquarius.png" alt="Aquitarius"><h2>Your horoscope is Aquitarius</h2><br><p>Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great… </p>`
            break;
        case "feb":
            output.innerHTML = `<img src="https://www.horoscopedates.com/img/icon_pisces.png" alt="Pisces"><h2>Your horoscope is Pisces</h2><br><p>Communication is very important today—written, spoken, and even nonverbal body language will all… </p>`
            break;

        default:
            output.innerHTML = `<p>A month is needed. Please use the following format: Jan, Feb, Mar, ...<p>`
    }
}
