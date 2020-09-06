$('#submit').on('click', function () {
    const input = $('#input').val()
    $.ajax({
        method: 'GET',
        url: `/priceCheck/${input}`,
        success: function (data) {
            $('#result').append(data)
        }

    })
})

$('#sub-buy').on('click', function () {
    const input = $('#buy').val()
    $.ajax({
        method: 'GET',
        url: `/buy/${input}`,
        success: function (data) {
            $('#result').append(data)
        }
    })
})

let money = 300
const moneyAttr = `money : ${money}`
$('#result').append(`<p>${moneyAttr}</p>`)