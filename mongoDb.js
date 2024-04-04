//untuk menambah collection di mongoDb
db.createCollection("customers");
db.createCollection("user");
db.createCollection("password");

//untuk mencari nama collection
db.getCollectionNames();

//untuk mencari data collection
db./*<nama collection>*/ user.find();

//insert data
db.user.insertOne({
  _id: "abror",
  user: "moh.abroril huda",
});
//untuk banyak data
db.customers.insertMany([
  {
    _id: 1,
    name: "bil",
    umur: 24,
  },
  {
    _id: 2,
    name: "loli",
    umur: 45,
  },
]);

db.password.insertOne({
  _id: new ObjectId(),
  password: new NumberLong("8000"),
  cadangan: [
    {
      cd_id: 1,
      pw: "1234",
    },
    {
      cd_id: 2,
      pw: "456",
    },
  ],
});

//query data & mencari data
//SELECT * FROM WHERE user = "moh.abroril huda"
db.user.find({
  user: "moh.abroril huda",
});

//SELECT * FROM WHERE _id = 1
db.customers.find({
  _id: 1,
});

//SELECT * FROM WHERE cadangan.cd_id = 1
db.password.find({
  "cadangan.cd_id": 1,
});

//Comparison operator
/*
MONGODB | TANDA | PENJELASAN SINGKAT
$eq   =>|   ==  |(membandingkan dengan value)
$gt   =>|   >   |(lebih besar dari value)
$gte  =>|   >=  |(lebih besar sama dengan value)
$it   =>|   <   |(lebih kecil dari value)
$ite  =>|   =<  |(lebih kecil sama dengan value)

MEMBANDINGKAN DATA Array
         Penjelasan Singkat
$in   => membandingkan value dengan value yang ada di            array;
$nin  => membandingkan value tidak ada dalam value yang          ada di Array;
$ne   => membandingkan value tidak sama dengan value lain

*/
//sytax Comparison operato
db.user.find({
  user: {
    //ubah sesuai dengan comporiso operator di atas
    $operatornya: "value",
  },
});

//Logical operator
/*
AND + OR + NOR + NOT
        penjelasan singkat
$and => mengembalikan documen jika semua kondisi benar
$or  => mengembalikan documen jika salah satu kondisi ada       yang benar
$nor => mengembalikan documen yang gagal di semua kondidi
$not => mengembalikan documen yang tidak sesuai kondisi

*/
//sytax logical operator
// untuk tiga logical sedangkan not beda lagi sytax nya ada di bawah
db.customers.find({
  // $and $or $nor
  $operator: [
    {
      //query
    },
    {
      //query
    },
  ],
});

//not
add.customers.find({
  id: {
    $not: {
      //query
    },
  },
});
