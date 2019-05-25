$(() => {
    let list = $('#list')

    $('#submit').click(() => {
        $.post('/sendUsername', {
            userName: $('#userName').val()
        }, (data) => {
            let repoList = JSON.parse(data)
            console.log(repoList)

            for (let repo of repoList) {
                list.append($(`<li>
                <div id = "${repo.name}">
                id : ${repo.id}
                <br>
                Repository Name : ${repo.name}
                <br>
                Forks : ${repo.forks_count}
                <br>
                Repository Url : ${repo.html_url} 
                <br>
                Language : ${repo.language}  
                <br>
                <button class = "pick" id = "${repo.name}">PICK</button>
                
                </div> 
                <br>
                <br>
                </li>`))
                $('#selectedList').html(`<h1>Selected Repositories</h1>`)

            }
            $('#script').html(`
           <script src = "./select.js">        
           </script>
           `)

        })




    })


})
