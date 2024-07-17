user = {
    "username" => "johns",
    "password" => "1234",
    "logged_in" => false
}

puts user

puts user["logged_in"]

user = {
    :username => "adal",
    :password => "5678",
    :logged_in => true
}

puts user[:logged_in]
puts user["logged_in"]

user = {
    username: "bob",
    password: "password",
    logged_in: true
}

puts user[:logged_in]

my_key = : + "password"
user[my_key]
puts user[my_key.to_sym]

