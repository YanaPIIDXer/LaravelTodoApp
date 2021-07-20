<html>
    <head>
        <title>TODO App</Title>
        <meta charset="utf8" />

        <link href="css/bootstrap/bootstrap.css" rel="stylesheet" />
        <script src="js/bootstrap/jquery.min.js"></script>

        <script src="js/index.js"></script>
    </head>

    <body class="text-center">
        <h1>TODO App</h1>
        <hr />
        <form id="token_form">
            {{ csrf_field() }}
        </form>
        
        <form id="add_form">
            タイトル：<input type="text" name="title" /><br />
            本文：<input type="text" name="body" /><br />
            日付：<input type="date" name="date" /><br />
            <input type="button" onclick="add_item();" value="追加" /><br />
        </form>
        <br />

        <table border="1" class="table">
            <thead>
                <tr><th>タイトル</th><th>本文</th><th>日付</th></tr>
            </thead>
            <tbody id="todo_list">
                @foreach($items as $item)
                    <tr id="item_{{ $item->id }}">
                        <td>{{ $item->title }}</td>
                        <td>{{ $item->body }}</td>
                        <td>{{ $item->date }}</td>
                        <td>
                            <input type="button" onclick="delete_item({{ $item->id }});" value="削除" />
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </body>
</html>