class Car
    # attr_reader :year
    # attr_writer :year
    attr_accessor :year
    def initialize color, year, model
        @color = color
        @year = year
        @model = model
    end
end

my_car = Car.new "red", 2007, "Matrix"

# puts my_car.inspect

puts my_car.year
my_car.year = 2008
puts my_car.year

class Car
    def initialize (color, year, model)
      @color = color
      @year = year
      @model = model
    end
    def color # attr_reader
      @color
    end
    def color=(value) #attr_writer
      @color = value
    end
   end