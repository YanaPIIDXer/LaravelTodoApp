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
        
        <form action="add" id="add_form" method="POST">
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
            <tbody>
                @foreach($items as $item)
                    <div id="item_{{ $item->id }}">
                        <tr>
                            <td>{{ $item->title }}</td>
                            <td>{{ $item->body }}</td>
                            <td>{{ $item->date }}</td>
                            <td>
                                <form action="/delete" id="item_{{ $item->id }}" method="POST">
                                    <input type="hidden" name="id" value={{ $item->id }} />
                                    <input type="button" onclick="delete_item({{ $item->id }});" value="削除" />
                                </form>
                            </td>
                        </tr>
                    </div>
                @endforeach
            </tbody>
        </table>
    </body>
</html>