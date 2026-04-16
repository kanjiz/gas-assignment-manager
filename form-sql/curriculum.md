# SQL教材カリキュラム

## 第2章：ひとつのテーブルを扱う

### その1：データを取り出す

1. 第1問：テーブル `Customers` の `Address` 列を取り出しなさい。
2. 第2問：テーブル `Products` の `ProductName` 列を取り出しなさい。
3. 第3問：テーブル `Products` の `Price` 列を取り出しなさい。
4. 第4問：テーブル `Employees` の `EmployeeName` 列を取り出しなさい。
5. 第5問：テーブル `Employees` の `Email` 列を取り出しなさい。

### その2：複数の列を指定する

1. 第1問：テーブル `Customers` の `CustomerName` 列、`Address` 列を取り出しなさい。
2. 第2問：テーブル `Products` の `ProductID` 列、`ProductName` 列、`Price` 列を取り出しなさい。
3. 第3問：テーブル `Employees` の `EmployeeName` 列、`Email` 列、`Height` 列を取り出しなさい。
4. 第4問：テーブル `Customers` の `CustomerCode` 列、`CustomerName` 列、`CustomerCode` 列を取り出しなさい。
5. 第5問：テーブル `Products` の `ProductCode` 列、`Price` 列、`ProductName` 列、`ProductCode` 列を取り出しなさい。

### その3：列に別名をつける

1. 第1問：テーブル `Employees` の `EmployeeName` を「社員名」という別名で取り出しなさい。
2. 第2問：テーブル `Customers` の `CustomerCode` を「顧客コード」、`CustomerName` を「顧客名」という別名で取り出しなさい。
3. 第3問：テーブル `Products` の `ProductCode` を「商品コード」、`ProductName` を「商品名」、`Price` を「価格」という別名で取り出しなさい。
4. 第4問：テーブル `Customers` の `CustomerName` を「顧客名」、「得意先名」という別名で取り出しなさい。
5. 第5問：テーブル `Employees` の `EmployeeName` を「社員名」、`Email` を「メールアドレス」、「連絡先」という別名で取り出しなさい。

### その4：列の値に対して演算を行う

1. 第1問：テーブル `Salary` で、`Amount` の15%を求め、「給与の15％」（%は全角にすること）という別名で取り出しなさい。
2. 第2問：テーブル `Employees` で、`Height` の半分を求めなさい。別名は「身長の半分」とする。
3. 第3問：テーブル `Employees` で、`Weight` の3倍から50を引いたものを求めなさい。別名は「体重の3倍引く50」とする。
4. 第4問：テーブル `Products` で、`Price` に100を加え、その30%を求めなさい。別名は「（価格＋100）の30％」（カッコや＋や％は全角）とする。
5. 第5問：テーブル `Sales` で、`Quantity` に200を加え、3で割ったものを求めなさい。別名は「（数量＋200）÷3」（カッコや＋や÷は全角）とする。

### その5：列同士で演算を行う

1. 第1問：テーブル `Employees` で、`Height` の3倍から `Weight` の2.5倍を引いたものを求めなさい。別名は結果とします。
2. 第2問：テーブル `Employees` で、`HireFiscalYear` を `Weight` で割って `Height` に加えたものを求めなさい。別名は結果とします。
3. 第3問：テーブル `Sales` で、`Quantity` に `CustomerID`、`ProductID`、`EmployeeID` の積を加えたものを求めなさい。別名は結果とします。
4. 第4問：テーブル `Products` で、`Price` から `ProductCode`、`CategoryID` の積を引いたものを求めなさい。別名は結果とします。
5. 第5問：テーブル `Customers` で、`CustomerID` に `CustomerClassID` の3乗を加えたものを求めなさい。別名は結果とします。

### その6：文字列の連結を行う

1. 第1問：テーブル `Employees` の `EmployeeName` の後に「'さん'」を連結して「社員名」という別名をつけなさい。
2. 第2問：テーブル `Employees` の `Email` の前に「'E-MAIL:'」を連結して、「メールアドレス」という別名をつけなさい。
3. 第3問：テーブル `Employees` の `EmployeeName` の後に「'さんの'」を連結、`Email` の前に「'E-MAIL:'」を連結して、その2つをさらに連結し「連絡先」という別名をつけなさい。
4. 第4問：テーブル `Customers` の `CustomerName`、`Address` を用いて「○○様のお住まいは△△」を組み立て、「お得意様連絡先」と別名をつけなさい。
5. 第5問：テーブル `Employees` の `EmployeeName`、`BloodType` を用いて「社員○○さんの血液型は△△型」を組み立て、「社員血液型」と別名をつけなさい。

### その7：集合関数を使う

1. 第1問：テーブル `Customers` の顧客数を求めて、「お得意様数」と別名をつけなさい。
2. 第2問：テーブル `Employees` の `Weight` 合計を求め、「社員体重合計」と別名をつけなさい。
3. 第3問：テーブル `Products` の `Price` の最大値を求め、「最高額価格」と別名をつけなさい。
4. 第4問：テーブル `Employees` の `Weight` の最小値を求め、「最軽量体重」と別名をつけなさい。
5. 第5問：テーブル `Employees` の `Height`、`Weight` の平均値を求め、それぞれ「平均身長」、「平均体重」と別名をつけなさい。

### その8：ある条件でレコードを絞り込む (1)

1. 第1問：テーブル `Products` から `Price` が2,500以上の `ProductName` を取り出しなさい。
2. 第2問：テーブル `Employees` から `Weight` が70以上の `EmployeeName`、`Weight` を取り出しなさい。
3. 第3問：テーブル `Employees` から `Height` が160以上180以下の `EmployeeName`、`Height` を取り出しなさい。
4. 第4問：テーブル `Sales` から `SaleDate` が 2007年6月1日以降の `SaleID` を取り出しなさい。`SaleDate` の表記は「2007-06-01」となっています。
5. 第5問：テーブル `Employees` から `Height` が170以上、かつ `Weight` が60以上の `EmployeeName`、`Height`、`Weight` を取り出しなさい。

### その9：ある条件でレコードを絞り込む (2)

1. 第1問：テーブル `Customers` から `CustomerName` に「株式会社」を含む `CustomerName` を「会社名」という別名で取り出しなさい。
2. 第2問：テーブル `Employees` から `EmployeeName` に「ー」を含むレコードの `Height` の平均を求め、「平均身長」という別名をつけなさい。
3. 第3問：テーブル `Customers` から `CustomerName` に「株式会社」を含まないレコードの件数を求め、「顧客数」という別名をつけなさい。
4. 第4問：テーブル `Employees` から `EmployeeName` に「リ」を含み、かつ身長が160以下の `EmployeeName`、`Height` を取り出しなさい。
5. 第5問：テーブル `Customers` から `CustomerName` に「株式会社」を含まず、かつ `Address` に「江戸川区」を含むレコードを取り出しなさい。

### その10：列の値に条件を設定する

1. 第1問：テーブル `Employees` を身長によって160未満を「A」、160以上170未満を「B」、170以上180未満を「C」、180以上を「D」にランク分けし、`EmployeeName`（「社員名」という別名をつける）と「ランク」を表示しなさい。
2. 第2問：テーブル `Salary` を `Amount` によって150,000未満を「D」、150,000以上300,000未満を「C」、300,000以上500,000未満を「B」、500,000以上を「A」にランク分けし、`SalaryID`、ランクを表示しなさい。
3. 第3問：テーブル `Employees` を体重によって60未満を「A」、60以上70未満を「B」、70以上80未満を「C」、80以上を「D」にランク分けし、`EmployeeName`（「社員名」という別名をつける）とランクを表示しなさい。
4. 第4問：テーブル `Sales` を `Quantity` によって、10以上を「A」、10未満を「B」にランク分けし、`SaleID`（「販売ID」という別名をつける）、ランクを表示しなさい。
5. 第5問：テーブル `Employees` を身長によって160未満を「A」、160以上170未満を「B」、170以上180未満を「C」、180以上を「D」にランク分けし、`EmployeeName`（「社員名」と別名をつける）、`Height`（「身長」と別名をつける）とランクを表示しなさい。

### その11：グループ単位で集計する

1. 第1問：テーブル `Sales` を `CustomerID` でグループ化し、`CustomerID` ごとの件数（別名は「件数」とする）を求めなさい。
2. 第2問：テーブル `Salary` を `EmployeeID` でグループ化し、`EmployeeID` ごとの `Amount` 合計を求めなさい。
3. 第3問：テーブル `Sales` を `CustomerID`、`ProductID` でグループ化し、`CustomerID`、`ProductID` ごとの `Quantity` 合計を求めなさい。
4. 第4問：テーブル `Employees` を `BloodType`（「血液型」と別名をつける）でグループ化し、`Height`、`Weight` の平均値（それぞれ別名は「平均身長」、「平均体重」とする）を求めなさい。
5. 第5問：テーブル `Salary` を `EmployeeID`（別名は「社員ID」）でグループ化し、レコード数（別名は「支給回数」）、`Amount` の平均値（別名は「平均支給額」）を求めなさい。

### その12：グループ単位で集計した結果を絞り込む (1)

1. 第1問：テーブル `Salary` からレコード数が12未満の `EmployeeID` とレコード数を取り出しなさい。
2. 第2問：テーブル `Customers` を `PrefecturalID` でグループ化し、複数レコードを持つ `PrefecturalID` を表示しなさい。
3. 第3問：テーブル `Sales` を `ProductID` でグループ化し、レコードを10以上、50以下持つ `ProductID` とそのレコード数を表示しなさい。
4. 第4問：テーブル `Employees` を `BloodType` でグループ化したとき、10件以上持つ `BloodType`（別名は「血液型」）、データ数（別名は「データ件数」）を表示しなさい。
5. 第5問：テーブル `Sales` を `ProductID` でグループ化したとき、`Quantity` の合計が100以上かつ200以下の `ProductID`（別名は「商品ID」）、`Quantity` 合計（別名は「数量合計」）を表示しなさい。

### その13：グループ単位で集計した結果を絞り込む (2)

1. 第1問：テーブル `Customers` を `PrefecturalID` でグループ化したとき、`PrefecturalID` が10以上で複数の顧客を持つ `PrefecturalID`、レコード数を表示しなさい。
2. 第2問：テーブル `Salary` からレコード数が12以上、`EmployeeID` が20以上の `EmployeeID` とレコード数を取り出しなさい。
3. 第3問：テーブル `Sales` を `ProductID` でグループ化し、レコードを30以上持ち、かつ `ProductID` が20以上30以下の `ProductID` とそのレコード数を表示しなさい。
4. 第4問：テーブル `Employees` を `BloodType` でグループ化したとき、`Height` が165以上の社員データを5件以上持つ `BloodType`（別名は「血液型」）、データ数（別名は「データ件数」）を表示しなさい。
5. 第5問：テーブル `Sales` を `ProductID` でグループ化したとき、`SaleDate` が2007-06-01以降で `Quantity` の合計が200以上の `ProductID`（別名は「商品ID」）、`Quantity` 合計（別名は「数量合計」）を表示しなさい。

### その14：クロス集計を行う

1. 第1問：テーブル `Employees` を `HireFiscalYear`（入社年度）でグループ化したとき、`Height`（身長）を4つの範囲（160cm以下、170cm以下、180cm以下、180cm超）に分けて、それぞれの人数を表示しなさい。
2. 第2問：テーブル `Products` を `CategoryID`（商品カテゴリID）でグループ化したとき、`Price`（単価）を4つの範囲（100円未満、400円未満、1000円未満、1000円以上）に分けて、それぞれの商品数を表示しなさい。
3. 第3問：テーブル `Sales` を `CustomerID`（顧客ID）でグループ化したとき、`SaleDate`（販売日）の月を9月・10月・11月の3つに区分けして、それぞれの合計販売個数を表示しなさい。抽出条件として販売日の年は2006年のみとします。
4. 第4問：テーブル `Customers` を `PrefecturalID`（都道府県ID）でグループ化したとき、`CustomerClassID`（顧客クラス）を法人（ID=1）と個人（ID=2）に区分けして、それぞれの顧客数を表示しなさい。
5. 第5問：テーブル `Employees` を `HireFiscalYear`（入社年度）でグループ化したとき、`Weight`（体重）を4つの範囲（50kg以下、60kg以下、80kg以下、80kg超）に分けて、それぞれの人数を表示しなさい。

### その15：並び替えを行う

1. 第1問：テーブル `Employees` を `BirthDay` で昇順に並べ、`EmployeeID`、`EmployeeName`、`BirthDay` を表示しなさい。
2. 第2問：テーブル `Sales` を `CustomerID`、`ProductID` で昇順、`SaleDate` 降順に並べ、`SaleID`、`Quantity`、`CustomerID`、`ProductID`、`SaleDate` を表示しなさい。
3. 第3問：テーブル `Products` の `Price` が1,000以下のデータを `CategoryID` でグループ化し、レコード数が5未満のデータを `CategoryID` で昇順に並べ、`CategoryID`、レコード数（別名は「商品数」）を表示しなさい。
4. 第4問：テーブル `Salary` を `EmployeeID`（別名は「社員ID」）でグループ化、`Amount` を合計し、`Amount` 合計（別名は「給与合計」）が多い順に並べて表示しなさい。
5. 第5問：テーブル `BelongTo` で現在所属している Employee（`EndDate` が NULL）をカウントし、レコードの多い順に `DepartmentID`（別名は「部署ID」）、レコード数を表示しなさい。

### その16：重複を排除する

1. 第1問：テーブル `Employees` から重複を除いて `HireFiscalYear` を求めなさい。
2. 第2問：テーブル `Sales` から重複を除いて `CustomerID`、`ProductID` を求めなさい。
3. 第3問：テーブル `Customers` から重複を除いて、`CustomerClassID`、`PrefecturalID` を求めなさい。
4. 第4問：テーブル `Sales` から重複を除いて `CustomerID`、`ProductID`、`EmployeeID` を求めなさい。
5. 第5問：テーブル `Products` から重複を除いて `Price`、`CategoryID` を求めなさい。

## 第3章：複数のテーブルを扱う

### その1：副問い合わせを使う

1. 第1問：テーブル `Employees` から各 `EmployeeID` について、`Salary` の `Amount` の最高が300,000以上のデータを取り出し、`EmployeeID`、`EmployeeName` を表示しなさい。
2. 第2問：テーブル `Sales` の `Quantity` が100以上のレコードを取り出し、`SaleID`、`Quantity`、`CustomerID`、`CustomerName` を表示しなさい。
3. 第3問：テーブル `Products` から `Sales` で `Quantity` の合計が100以上のレコードを取り出し、`ProductID`、`ProductName` を表示しなさい。
4. 第4問：第1問で `Amount` の最高額（別名は「最高給与額」）も表示するよう変更しなさい。
5. 第5問：第2問で商品名も表示するよう変更しなさい。

### その2：複数テーブルの結合を行う(1)

1. 第1問：テーブル `Salary` と `Employees` を結合して `EmployeeName`、`PayDate`、`Amount` を `EmployeeID` 昇順で表示しなさい。
2. 第2問：テーブル `Sales`、`Customers`、`Employees`、`Products` を結合して、`Sales.Quantity` が200以上のデータについて `Quantity`、`CustomerName`、`ProductName`、`EmployeeName` を表示しなさい。
3. 第3問：テーブル `Sales` と `Products` を結合し、`Sales` を `ProductID` でグループ化、`Quantity` の合計が300以上のデータについて `Quantity` 合計、`ProductID`、`ProductName` を表示しなさい（JOINを使用すること）。
4. 第4問：第2問をJOINを用いずに書きなさい。
5. 第5問：テーブル `Customers`、`Prefecturals`、`CustomerClasses` を WHERE句を使って結合し、`PrefecturalID` 昇順で並べ、`CustomerName`、`PrefecturalName`、`CustomerClassName` を表示しなさい。

### その3：複数テーブルの結合を行う(2)

1. 第1問：テーブル `Sales`、`Products`、`Categories` を連結し、`Sales` を `CategoryID` でグループ化、`CategoryID`、`CategoryName`、`Quantity` の合計を表示しなさい。
2. 第2問：テーブル `Sales`、`Customers`、`Prefecturals` を結合し、`PrefecturalID` でグループ化、`Quantity` の合計、`PrefecturalID`、`PrefecturalName` を表示しなさい。
3. 第3問：テーブル `Sales`、`Customers`、`CustomerClasses` を結合し、`CustomerClassID` でグループ化、`Quantity` の最大値、`CustomerClassID`、`CustomerClassName` を表示しなさい。
4. 第4問：第2問をJOINを用いずに書きなさい。
5. 第5問：第3問をJOINを用いずに書きなさい。

### その4：外部結合を使う

1. 第1問：テーブル `Customers`、`Sales` を外部結合して `CustomerID` ごとの `Quantity` 合計を求めて `CustomerName` と合計を表示しなさい。ただし `Sales` データが存在しない `CustomerID` の合計は0を表示しなさい。
2. 第2問：テーブル `Employees`、`Sales` を外部結合し、`EmployeeID` ごとの `Sales` レコード数を求めて `EmployeeID`、社員名と販売件数を表示しなさい。ただし、`Sales` データが存在しない場合は0を表示しなさい。
3. 第3問：テーブル `Prefecturals`、`Customers` を外部結合し、`PrefecturalID` ごとの `Customers` レコード数を求め、`PrefecturalName` とレコード数を表示しなさい。ただし `Customers` データが存在しない場合は0を表示しなさい。
4. 第4問：テーブル `Employees`、`Sales` を使った副問い合わせを外部結合し、`EmployeeID` ごとの販売件数を求めなさい。
5. 第5問：テーブル `Employees`、`Salary` から Employee ごとの '2007-02-25' 支給の `Amount` を求めて、`EmployeeName`、`Amount`（別名は「支給額」）を表示しなさい。`Amount` データが存在しない場合は0を表示しなさい。

### その5：自己結合を使う

1. 第1問：同じカテゴリーの商品同士を組み合わせて、商品名をそれぞれ表示しなさい。
2. 第2問：同じ都道府県の顧客同士で、かつ同じ `CustomerClassID` を持つ顧客同士を組み合わせて、顧客名をそれぞれ表示しなさい。
3. 第3問：従業員同士で、かつ年齢が自分よりも年上（つまり自分よりも `BirthDay` の値が小さい）人との組み合わせを表示しなさい。
4. 第4問：カテゴリー同士を組み合わせて、カテゴリー名をそれぞれ表示しなさい（別名は「カテゴリー1」「カテゴリー2」）。
5. 第5問：第2問に対して、`PrefecturalID` が 13 以外のものだけに絞り込んでください。

### その6：相関副問い合わせを使う

1. 第1問：テーブル `Sales` で `ProductID` ごとの `Quantity` の最大値を求め、`ProductID`、`ProductName`、最大 `Quantity` を `ProductID` 昇順で表示しなさい。
2. 第2問：テーブル `Products` から、テーブル `Sales` にある `ProductID` とその `ProductName` を表示しなさい。
3. 第3問：テーブル `Products` から、テーブル `Sales` にない `ProductID` とその `ProductName` を表示しなさい。
4. 第4問：第1問をJOINを使って書きなさい。
5. 第5問：テーブル `Sales` で、`ProductID` ごとの `Quantity` の平均値と最大値を求め、最大値÷10が平均値以上の `ProductID` と `ProductName` を `ProductID` 順に表示しなさい。

### その7：UNION ALL を使う

1. 第1問：テーブル `Departments` と `Categories` を UNION ALLで1つにまとめなさい（列名は ID、名前とする）。
2. 第2問：テーブル `Departments` と `Categories` をテーブル名を付してUNION ALLで1つにまとめ、テーブル名、IDの昇順に並べなさい。
3. 第3問：テーブル `Departments`、`CustomerClasses`、`Categories`、`Prefecturals` を UNION ALLで1つにまとめなさい。
4. 第4問：第3問の各テーブルにテーブル名を付してUNION ALLで1つにまとめ、テーブル名、IDの昇順に並べなさい。
5. 第5問：テーブル `Sales` の中から、個人顧客で `Quantity` が10以上のデータと、法人顧客で `Quantity` が100以上のデータをUNION ALLで1つにまとめなさい。

### その8：UNION を使う

1. 第1問：テーブル `Customers` と `Employees` を UNIONで1つにまとめ、それぞれのID順に表示しなさい。
2. 第2問：テーブル `Employees` の `EmployeeID` と `EmployeeName` を表示させたものをUNIONで1つにまとめ、`EmployeeID` 順に表示しなさい。
3. 第3問：テーブル `Products` と `Sales` の `ProductID` を UNIONで1つにまとめ、`ProductID` 順に表示しなさい。
4. 第4問：テーブル `Sales` の中から、指定された3つの期間（2006年10月〜12月、2007年1月〜3月、2007年4月〜6月）で `Quantity` が10以上のデータをUNIONでまとめなさい。
5. 第5問：テーブル `Sales` の中から、個人顧客で `Quantity` が10以上の場合と、法人顧客で `Quantity` が100以上の場合をUNIONで1つにまとめなさい。

### その9：INTERSECTを使う

1. 第1問：テーブル `Customers` と `Employees` を INTERSECTで1つにまとめ、それぞれのID順に表示しなさい。
2. 第2問：テーブル `Employees` の `EmployeeID` と `EmployeeName` を表示させたものを INTERSECTで1つにまとめ、`EmployeeID` 順に表示しなさい。
3. 第3問：テーブル `Products` と `Sales` の `ProductID` をINTERSECTで1つにまとめ、`ProductID` 順に表示しなさい。
4. 第4問：テーブル `Sales` の中から、指定された3つの期間すべてにおいて `Quantity` が10以上のデータを INTERSECTで1つにまとめなさい。
5. 第5問：テーブル `Sales` の中から、個人顧客で `Quantity` が10以上の場合と、法人顧客で `Quantity` が100以上の場合を INTERSECTで1つにまとめなさい。

### その10：EXCEPTを使う

1. 第1問：テーブル `Customers` と `Employees` を EXCEPTで1つにまとめ、それぞれのID順に表示しなさい。
2. 第2問：テーブル `Employees` の `EmployeeID` と `EmployeeName` を表示させたものをEXCEPTで1つにまとめ、`EmployeeID` 順に表示しなさい。
3. 第3問：テーブル `Products` と `Sales` の `ProductID` をEXCEPTで1つにまとめ、`ProductID` 順に表示しなさい。
4. 第4問：法人（`Quantity` 100以上）の商品ID集合から、個人（`Quantity` 10以上）の商品ID集合を差し引いた残りを表示しなさい。
5. 第5問：第4問とは逆に、個人（`Quantity` 10以上）の商品ID集合から、法人（`Quantity` 100以上）の商品ID集合を差し引いた残りを表示しなさい。

## 第4章：追加・更新・削除

### その1：レコードを1件追加する

1. 第1問：テーブル `Employees` に、指定された従業員データ（EmployeeID: 31、EmployeeName: モクモクなど）を追加しなさい。
2. 第2問：第1問で追加した「モクモク」を、2007-09-01付けで営業に配属するデータを `BelongTo` に追加しなさい。
3. 第3問：テーブル `Sales` に、指定された販売データ（SaleID: 1006、ProductID: 40など）を追加しなさい。
4. 第4問：テーブル `Salary` に、指定された給与データ（SalaryID: 354、Amount: 100,000など）を1件追加しなさい。
5. 第5問：テーブル `Customers` に、指定された顧客データ（CustomerID: 31、CustomerName: 有限会社 貉商会など）を1件追加しなさい。

### その2：副問い合わせを使って追加する

1. 第1問：入社年度（HireFiscalYear）が1993以前の従業員に、2007-10-01付けで特別報奨金各20000を `Salary` テーブルに追加しなさい。
2. 第2問：入社年度が1988以前の従業員を `Customers` に追加しなさい。
3. 第3問：テーブル `Sales` に対して、テーブル `Employees` でBloodType = 'O' のEmployeeIDを用いて、指定の内容でデータを追加しなさい。
4. 第4問：テーブル `Sales` に対して、テーブル `Customers` でPrefecturalID = 8 のCustomerIDを用いて、指定の内容でデータを追加しなさい。
5. 第5問：テーブル `Sales` に対して、テーブル `Products` でCategoryID = 5 のProductIDを用いて、指定の内容でデータを追加しなさい。

### その3：レコードを更新する

1. 第1問：テーブル `Customers` の `CustomerCode` を、現在の値に1000加えたものに変更しなさい。
2. 第2問：テーブル `Employees` の `Email` を、***@nekoyasudo から ***@nekoyasudo.co.jp に変更しなさい。
3. 第3問：テーブル `Employees` の `Height` を+2、`Weight` を-5しなさい。
4. 第4問：テーブル `Departments` の `DepartmentName` の末尾に「部」を付けなさい。
5. 第5問：テーブル `Customers` の `CustomerName` に、CustomerClassID = 1の場合「御中」、2の場合「様」を追加しなさい。

### その4：特定のレコードを更新する

1. 第1問：テーブル `Employees`、EmployeeID = 10 の `Height` を+5しなさい。
2. 第2問：テーブル `Salary`、EmployeeID = 5、PayDate = '2007-03-25' の `Amount` を+20,000しなさい。
3. 第3問：テーブル `Employees`、BloodType = 'AB' の `Height` を-2、`Weight` を+3しなさい。
4. 第4問：テーブル `Sales`、CustomerID = 10、ProductID = 5、SaleDate が 2007-05-31以降のデータの `Quantity` を+10しなさい。
5. 第5問：テーブル `Products` で、CategoryID = 7の場合、現在の `Price` が2000以上の場合は20%値下げ、1000以上の場合は10%値下げに変更しなさい。

### その5：更新条件に副問い合わせを使う

1. 第1問：一度も売上のない商品を3%値下げしなさい。
2. 第2問：売上件数が10件に満たない EmployeeID の 2007-10-01 支給予定の報奨金金額を5%減額しなさい。
3. 第3問：売上件数が50件以上の EmployeeID の 2007-10-01 支給予定の報奨金金額を10%増額しなさい。
4. 第4問：2007年8月25日までに一度も売上のない従業員の 2007年8月25日支払分給与を10%値下げしなさい。
5. 第5問：2007年8月25日までに CustomerClassID = 1 の顧客に対して売上のある従業員の 2007年8月25日支払分給与を10%値上げしなさい。

### その6：他のテーブルの値を使って更新する

1. 第1問：顧客テーブルの住所の前に、対応する都道府県の都道府県名を連結しなさい。
2. 第2問：各従業員ごとに、各人の売上総額の3%を支払日が2007年8月25日の給料に加算しなさい。
3. 第3問：`Products` テーブルの `Price` を、対応するProductIDを持つ `Sales` の売上金額（数量×単価）の平均に置き換えなさい。
4. 第4問：`Products` テーブルの `ProductName` の各文字列の後ろに、対応するCategoryIDを持つ `Categories` の `CategoryName` をカッコ付きで連結しなさい。
5. 第5問：販売個数の累計が500個以上の商品について、`Products` テーブルの `ProductName` を「'n個も売れてるヒット商品！ ' || ProductName」に修正しなさい。

### その7：レコードを削除する

1. 第1問：テーブル `BelongTo` のレコードをすべて削除しなさい。
2. 第2問：テーブル `Customers` のレコードをすべて削除しなさい。
3. 第3問：テーブル `Sales` のレコードをすべて削除しなさい。
4. 第4問：テーブル `Products` のレコードをすべて削除しなさい。
5. 第5問：テーブル `Employees` のレコードをすべて削除しなさい。

### その8：特定のレコードを削除する

1. 第1問：テーブル `Sales` から SaleID = 1006 のデータを削除しなさい。
2. 第2問：テーブル `Salary` から EmployeeID = 10、PayDate = '2007-10-01' のデータを削除しなさい。
3. 第3問：テーブル `Customers` から CustomerID が 10,000 以上のデータを削除しなさい。
4. 第4問：テーブル `Products` から CategoryID = 1 のデータを削除しなさい。
5. 第5問：テーブル `Customers` から CustomerClassID = 2 かつ PrefecturalID が 3, 5, 7, 13 いずれかのデータを削除しなさい。

### その9：削除条件に副問い合わせを使う

1. 第1問：テーブル `Salary` から `Sales` にデータのない EmployeeID を持つデータを削除しなさい。
2. 第2問：テーブル `Products` から `Sales` での Quantity 合計が20未満のデータを削除しなさい。
3. 第3問：テーブル `Customers` から売上実績のないデータを削除しなさい。
4. 第4問：テーブル `Employees` から売上実績5件以下のデータを削除しなさい。
5. 第5問：テーブル `Sales` から EmployeeID が現在人事（DepartmentID = 3）に所属するデータを削除しなさい。

## 第5章：応用問題

### その1：SQLをSELECT文で作成する

1. SELECT文を用いて、都道府県テーブルのINSERT文を自動生成しなさい。

### その2：月別販売額一覧の作成

1. 月別の販売額合計一覧を作成しなさい。

### その3：社員別・月別販売額一覧の作成

1. 社員別・月別の販売額合計一覧を作成しなさい（販売なし社員も含む）。

### その4：商品別・月別販売額一覧の作成

1. 特定カテゴリかつ合計金額条件を満たす商品別・月別販売額一覧を作成しなさい。

### その5：顧客別・商品別販売額一覧の作成

1. 顧客別・商品別の販売額合計一覧を作成しなさい。

### その6：都道府県別・商品別販売額一覧の作成

1. 都道府県別・商品別の販売額合計一覧を作成しなさい。

### その7：部門別・月別平均給与一覧の作成

1. 2007年の部門別・月別の平均給与一覧を作成しなさい。

### その8：月別・カテゴリ別販売額一覧の作成

1. カテゴリ1〜10を横に並べた、月別・カテゴリ別販売額のクロス集計一覧を作成しなさい。

### その9：商品別3ヶ月販売推移表の作成

1. 2007年6月〜8月の商品別販売額推移と、前月比増減を記号（↑→↓）で表示しなさい。

### その10：顧客コードの再編

1. 顧客コードを特定のルール（クラスID、県ID、顧客IDの組み合わせ）で一括再編しなさい。
