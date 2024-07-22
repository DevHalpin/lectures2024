-- Get a list of all author names who have written a book in the last 5 years
-- SELECT authors.name, year
-- FROM authors JOIN books ON authors.id = books.author_id
-- WHERE year >= 2014;

-- Get the amount of books written between 2010-2020
-- SELECT COUNT(books.id)
-- FROM books
-- WHERE year > 2009;

-- Get a list of all the authors names who have 
-- written at least one book in 2003
-- SELECT authors.name
-- FROM authors JOIN books ON authors.id = books.author_id
-- WHERE year = 2003;

-- Get the author who has written the 3rd most books
-- SELECT authors.name, COUNT(books.id)
-- FROM books JOIN authors ON authors.id = books.author_id
-- GROUP BY authors.name
-- ORDER BY COUNT(books.id) DESC
-- LIMIT 1 OFFSET 2;

-- Get the bottom 5 authors names by amount of books written
SELECT authors.name, COUNT(books.id)
FROM books JOIN authors ON authors.id = books.author_id
GROUP BY authors.name
ORDER BY COUNT(books.id) 
LIMIT 5;