// 追加
function add_item() {
    const _token = $("#add_form [name=_token]").val();
    const title = $("#add_form [name=title]").val();
    const body = $("#add_form [name=body]").val();
    const date = $("#add_form [name=date]").val();
    $.ajax("add", {
        type: "post",
        data: {
            _token: _token,
            title: title,
            body: body,
            date: date
        }
    }).done((data) => {
        console.log(data);
    });
}

// 消去
function delete_item(id) {
    const form_id = "#delete_form_" + id;
    const _token = $(form_id + " [name=_token]").val();
    $.ajax("delete", {
        type: "post",
        data: {
            _token: _token,
            id: id
        }
    }).done((data) => {
        console.log(data);
    })
}
