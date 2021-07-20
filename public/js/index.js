var _token = null;
window.onload = () => {
    _token = $("#token_form [name=_token]").val();
}

// 追加
function add_item() {
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
    $.ajax("delete", {
        type: "post",
        data: {
            _token: _token,
            id: id
        }
    }).done((data) => {
        // TODO:何かしらアニメーションを付けたい
        $("#item_" + data["id"]).remove();
    })
}
