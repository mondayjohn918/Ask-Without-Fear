// 1. The link people will receive when they click "Invite a Friend"
const inviteLink = "https://chat.whatsapp.com/FJDSyY0NUvr9MmeB1jWEQE";


// 2. Find the elements
const copyButton = document.getElementById("copy-link");
const copyMessage = document.getElementById("copy-message");


// 3. When the button is clicked, copy the invite link
copyButton.addEventListener("click", async function () {

    try {
        await navigator.clipboard.writeText(inviteLink);
        copyMessage.textContent = "Invite link copied. Send it to a friend!";
    } catch (error) {
        copyMessage.textContent = "Could not copy automatically. Please copy this link: " + inviteLink;
    }

    copyMessage.hidden = false;
});