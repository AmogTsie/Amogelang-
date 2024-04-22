function handleFormSubmit(event){
    event.preventDefault()
    //console.log(event);

    //console.log(document);
    const nameInput = document.getElementById("name")
    const surnameInput = document.getElementById("surname")
    const emailInput = document.getElementById("email")
    const messageInput = document.getElementById("message")

    //console.log(nameInput);
    const isEmailvalid = emailInput.value !== '' && emailInput.validity.valid
    console.log(isEmailvalid);

    let isMessagevalid = false;
    if(messageInput.value !== '') {
        isMessagevalid = true
    }else {
        isMessagevalid = false
    }
    
    console.log({ isMessagevalid });

    let isSurnamevalid = false;
    if(surnameInput.value !== '') {
        isSurnamevalid = true
    }else {
        isSurnamevalid = false
    }
    
    console.log({ isSurnamevalid });

    let isNamevalid = false;
    if(nameInput.value !== '') {
        isNamevalid = true
    }else {
        isNamevalid = false
    }
    
    console.log({ isNamevalid });


    const isFormvalid = isEmailvalid && isMessagevalid 

    if(isFormvalid) {

        const formData = new FormData(event.target)
        console.log("formData");
        fetch('https://formspree.io/f/xbjnqooo',
           {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept' : 'application/json'

                }
            }
        )
        .then( response => response.json())
        .then( data => {
            console.log(data);
            if(data.ok) {
                alert("Email successfully sent!!")
            }
        })

        console.log('code is running');
    

    } else {
        alert("Form is invalid")
        
    }

}