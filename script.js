// stocker le formulaire 
let form = document.querySelector("form"); 

// console.log(form);


// ajouter un evenement 

form.addEventListener("submit",(event)=>{

    // bloquer la page
    event.preventDefault();


    // recuperer les info
    let firstName = document.querySelector("#first-name").value;
    let lastName = document.querySelector("#last-name").value; 


    // verifier si le prenom ou le nom ou le message est vide 
    if(firstName == "" || lastName == "" ){

        console.log('error');
    
        // afficher le message d'erreur 
        let errorMessage = document.querySelector("#error-message");
        errorMessage.style.display = "block"; 
    }
    else {
        //cree une div
        let commentaire = document.createElement('div');
        commentaire.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500')
        document.querySelector('#comment-list').appendChild(commentaire)

        let commentaireContent = document.createElement('div');
        commentaireContent.classList.add('flex-1', 'py-10', 'border-t', 'border-gray-200')
        commentaire.insertBefore(commentaireContent, commentaire.firstChild);

        let commentairePrenom = document.createElement('h3');
        commentairePrenom.classList.add('font-medium', 'text-gray-900')
        commentairePrenom.innerText = document.querySelector('#first-name').value + ', ' + document.querySelector('#last-name').value
        commentaireContent.insertBefore(commentairePrenom, commentaireContent.firstChild);

        let commentaireStyle = document.createElement('div');
        commentaireStyle.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500')
        commentaireContent.insertBefore(commentaireStyle, commentaireContent.secondChild);

        let commentairePara = document.createElement('p');
        commentairePara.innerText = document.querySelector('#message').value 
        commentaireStyle.insertBefore(commentairePara, commentaireStyle.firstChild);


        // vider
        document.querySelector('#first-name').value = ''
        document.querySelector('#last-name').value = ''
        document.querySelector('#message').value = ''


    }
})