$.ajax({
    url: '/database',
    dataType: 'JSON',
    success: function (data) {
        tableElement = $('<table/>')
        console.log(data[0])
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                $(tableElement).append(
                    $(
                        `<tr>
                            <td>${data[i].id}</td>
                            <td>${data[i].first_name}</td>
                            <td>${data[i].last_name}</td>
                            <td>${data[i].email}</td>
                        </tr>`
                    )
                )
            }
        }
        $('.wrap').append(tableElement)
    },
    error: function () {
        alert('An error occurred')
    },
})
