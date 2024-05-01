
const container = document.querySelector('.aboutInfo');
const aboutRendering = ()=>{
    const about = document.createElement('div');
    about.classList.add('container')
    about.innerHTML = `
    <div class="Box1">
    <div class="Image"> 
        <img style="border-radius:90px" src="WhatsApp Image 2024-04-03 at 20.43.53_0f31d0c9.jpg"  width="300px" height="380px">   
    </div><br>
    <p>Phone number: +2767 316 8160<br>
       Email: amogtsie@gmail.com<br>
       915 Sovereign, Johanesburg, South Africa<br>
    </p> 
    <br>
    <br>
    <hr>
    <p>
        <h2 style="color: white;">Skills:</h2>
        <br>
            
                Time Management<br>
                Composing Emails<br>
                Good Communication<br>
                Problem Solving<br>
                Team WorK<br>
                Multitasking<br>
                HTML & CSS<br>
                Computer Skills<br> 
                working with GitHub <br>
            <br>
            <hr>
            <h2 style="color: white;">Language:</h2>
            <br>
            
            English (Fluently)<br>
            SeTswana (Home Language)

    </p>
</div>
<div class="Box2">
    <h1>Amogelang Tsie</h1>
    <P>
      <h2 style="color: black; margin-bottom: 30px;">Eductional Achievements:</h2>
     <ul style="margin: 10px;">
        <li>RCL</li>
        <li>Top 10 in grade 12</li>
        <li>Half colors in Rugby</li>
        <li>Valedictorian</li>
     </ul>
    </P>
    <p>
        <h2 style="color: black; margin: 30px;">Personal Data:</h2>
        <ul style="margin: 10px; font-size: larger;">
            <li>Date of birth: 28/03/05</li>
            <li>Place of Birth: Pretoria</li>
            <li>Age: 19</li>
            <li>Satus: Single</li>
            <li>Unemployed</li>
            
        </ul>
    </p>
    <p>
        <h2 style="color: black; margin: 30px;">Volunteer Work:</h2>
        <ul style="margin: 10px;">
            <li>Serve in Media Team at Church</li>
        </ul>
    </p>
</div>
    `
    container.appendChild(about);
}
aboutRendering();