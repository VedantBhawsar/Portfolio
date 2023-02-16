

const publicKey = '3SEcp_yNEpasKZgR6';
const serviceID = 'service_6iju8mb'
const templateID = 'template_8ciuzog'
const x = '';

function sendEmail() {
    var templateParams = {
        from_name: document.getElementById('name').value,
        to_name: 'Dev. Vedant',
        email: document.getElementById('email').value,
        message: document.getElementById('massage').value
    };
    try {
        emailjs.send(serviceID, templateID, templateParams, publicKey).then(() => {
            alert("Email Send")
            document.getElementById('name').value = x
            document.getElementById('email').value = x
            document.getElementById('massage').value = x
        }
        )
    } catch (error) {
        alert('Try Again!')
        console.log(error)
    }
}