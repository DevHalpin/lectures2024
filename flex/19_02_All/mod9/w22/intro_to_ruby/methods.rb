def say_hello name = "James", age = 24
    puts "Hello #{name}, #{age} nice to meet you"
end

say_hello "Bob", 24
say_hello("David", 25)
say_hello()

def full_name first_name, last_name
    if first_name == "David"
        return "He is cool"
    else
        first_name + " " + last_name
    end
end
puts full_name "David", "Lovelace"

def change_it val
    val = 5
    puts val
end
num = 10
puts num
change_it num
puts num