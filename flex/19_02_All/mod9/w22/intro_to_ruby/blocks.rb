dogs = ["Odie", "Lassie", "Dioji"]

dogs.each do |dog|
    puts dog
end

# my_function = lambda {|dog| puts "Hello #{dog}"} 


# dogs.each { |dog| 
#     my_function dog
# }

do_thing = lambda { |dog| puts dog } #lambda keyword
# do_thing = -> { |dog| puts dog } #lambda literal

dogs.each &do_thing

say_something = -> { puts "I'm giving up on you" }

def my_method &block
    block.call
end

my_method &say_something

def my_yield_method
    yield 4, 2
end

my_yield_method { |num, num2| puts "#{num} #{num2}"}