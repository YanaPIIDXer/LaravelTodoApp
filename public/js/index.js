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
        // TODO:何かしらアニメーションを付けたい
        $('<tr id="item_' + data["id"] + '"></tr>').appendTo("#todo_list");
        const $record = $("#item_" + data["id"]);
        $("<td>" + data["title"] + "</td>").appendTo($record);
        $("<td>" + data["body"] + "</td>").appendTo($record);
        $("<td>" + data["date"] + "</td>").appendTo($record);
        $('<input type="button" onclick=delete_item(' + data["id"] + '); value="削除" />').appendTo($record);

        // フォームをリセット
        // 配列の0番目を指定しないと動かないらしい
        // 参考：http://uppeal.com/geek/entry/1298
        $("#add_form")[0].reset();
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
