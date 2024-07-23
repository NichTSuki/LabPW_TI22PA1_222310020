<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <title>Profile</title>
</head>
<body>
    <div class="container mt-5">
        <table class="table table-bordered">
            <thead>
                <tr style="text-align: center">
                    <th>Course</th>
                    <th>Type</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                @foreach($data as $row)
                    <tr>
                        <td>{{ $row['Course'] }}</td>
                        <td>{{ $row['Type'] }}</td>
                        <td style="text-align: center">
                            @for ($i = 5; $i >= 1; $i--)
                                @if ($i <= $row['Rate'])
                                    ★
                                @else
                                    ☆
                                @endif
                            @endfor
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>
</html>
