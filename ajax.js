function getUsers(e){
    e.preventDefault();
    var username = document.getElementById('username').value;
    if(!username || username == ' '){
        username  = 'RichardBongani'
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4  && xhttp.status == 200){
            var user = JSON.parse(xhttp.responseText);
            document.getElementById('profile').innerHTML = 
            `<div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${users.avatar_url}" class="card-img" alt="Profile image">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Username:${users.name}</h5>
                  <h6 class="card-title">Email: ${users.email}</h6>
                  <p class="card-text">${users.bio}</p>
                  <p class="card-text"><small class="text-muted">Last updated: ${users.updated_at} </small></p>
                  <a class="btn btn-outline-secondary" href="${users.html_url}" target="_blank"> Check out Profile </a>
                </div>
              </div>
            </div>
          </div>`;
        }
    }
    xhttp.open('GET', 'https://api.github.com/users/RichardBongani'+ username, true);
    xhttp.send();
}

document.getElementById('my-form').addEventListener('submit', 'getUsers', false);