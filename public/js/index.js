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
        if (!data["result"]) {
            alert("Error.");
            return;
        }
        // フォームをリセット
        // 配列の0番目を指定しないと動かないらしい
        // 参考：http://uppeal.com/geek/entry/1298
        $("#add_form")[0].reset();

        $('<tr id="item_' + data["id"] + '"></tr>').appendTo("#todo_list");
        const $record = $("#item_" + data["id"]);
        const $d1 = $("<td>" + data["title"] + "</td>").appendTo($record).fadeTo(0, 0);
        const $d2 = $("<td>" + data["body"] + "</td>").appendTo($record).fadeTo(0, 0);
        const $d3 = $("<td>" + data["date"] + "</td>").appendTo($record).fadeTo(0, 0);
        const $d4 = $('<input type="button" onclick=delete_item(' + data["id"] + '); value="削除" />').appendTo($record).fadeTo(0, 0);
        const anim_speed = 300;
        $d1.fadeTo(anim_speed, 1, () => $d2.fadeTo(anim_speed, 1, () => $d3.fadeTo(anim_speed, 1, () => $d4.fadeTo(anim_speed, 1))));
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
        var $record = $("#item_" + data["id"]);
        $record.fadeOut("slow", () => $record.remove());
    })
}
