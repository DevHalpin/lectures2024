# for variable in array do
#     #do something with variable
# end

i = 0
loop do
    i += 1
    puts i

    #break the loop
    break if i > 5
end

puts " "

i = 0
while i < 5 do
    i += 1
    puts i
end

puts " "
i = 0
until i > 5 do
    i += 1
    puts i
end

puts " "


(5..10).each do |num|
    puts num
end

puts ""

10.times { puts "hello world" }

# array = [1,2,3]

# array.insert(2, 5)

# puts array