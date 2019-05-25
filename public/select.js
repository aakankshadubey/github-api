$(() => {
    $('.pick').click((event) => {
        console.log(event.target.id)
        let id = event.target.id
        $('#selectedList').append(`<li>${id}</li>`)


    })
})