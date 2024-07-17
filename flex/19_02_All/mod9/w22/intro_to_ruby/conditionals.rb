# if statements use roughly the same syntax
if 7 < 5 
    puts "it's less"
elsif 5 > 3 
    puts "it's more"
else
    puts "no calculation"
end
name = "David"

puts "it's less" if 7 < 5
puts "something" unless name


unless name
    puts "something"
end

puts name == "David" ? "something" : "something else"

# case x
# when true
#     #do something
# else

# end