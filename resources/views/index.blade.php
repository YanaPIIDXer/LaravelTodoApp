<html>
    <head>
        <title>TODO App</Title>
        <meta charset="utf8" />
    </head>

    <body>
        <h1>TODO App</h1>
        <hr />
        
        <form action="add" method="POST">
            {{ csrf_field() }}
            タイトル：<input type="text" name="title" /><br />
            本文：<input type="text" name="body" /><br />
            日付：<input type="date" name="date" /><br />
            <input type="submit" value="追加" /><br />
        </form>
        <br />

        <table border="1">
            <thead>
                <tr><th>タイトル</th><th>本文</th><th>日付</th></tr>
            </thead>
            <tbody>
                @foreach($items as $item)
                <tr>
                    <td>{{ $item->title }}</td>
                    <td>{{ $item->body }}</td>
                    <td>{{ $item->date }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </body>
</html>