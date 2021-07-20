// 追加
function add_item() {
    var _token = $("#add_form [name=_token]").val();
    var title = $("#add_form [name=title]").val();
    var body = $("#add_form [name=body]").val();
    var date = $("#add_form [name=date]").val();
}

// 消去
function delete_item(id) {
    var form_id = "#delete_form_" + id;
    var _token = $(form_id + " [name=_token]").val();
}
