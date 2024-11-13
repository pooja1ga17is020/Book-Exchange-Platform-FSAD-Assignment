import { Box, Heading, Text, Stack } from "@chakra-ui/react";

function About() {
  return (
    <Box p={8} maxW="3xl" mx="auto" borderWidth={1} borderRadius="lg" boxShadow="lg" bg="white">
      <Heading as="h1" size="xl" textAlign="center" mb={6} color="teal.500">
        About Book Exchange Platform
      </Heading>
      <Text fontSize="lg" mb={4} color="gray.700">
        The Book Exchange Platform is a community-driven application designed to facilitate the addition of new books, updating the book information and deleting the books and also allows for searching the books based on title or author or genre. With the help of filtering criteria, users can filter books based on availability status of the books and genre.
      </Text>
      <Stack spacing={4}>
        <Box>
          <Heading as="h2" size="md" color="teal.600">
            Key Features
          </Heading>
          <Stack mt={2} spacing={2}>
            <Box>
              <Heading as="h3" size="sm" color="gray.600">User Authentication</Heading>
              <Text fontSize="md" color="gray.600">
                Secure registration and login ensure user data privacy, with encrypted passwords and a password recovery system. Users can manage their accounts, ensuring personalized interaction with the platform.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm" color="gray.600">Book Listing</Heading>
              <Text fontSize="md" color="gray.600">
                Users can create listings of books. Listings include essential details like title, author, genre, condition, and availability status, making it easy for others to find and view the information about the book.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm" color="gray.600">Search and Discovery</Heading>
              <Text fontSize="md" color="gray.600">
                A powerful search and filtering system allows users to find books based on criteria such as title, author and genre. Users can also filter by availability status and genre, helping them discover books that suit their preferences.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm" color="gray.600">User Activites</Heading>
              <Text fontSize="md" color="gray.600">
                Users have the priviledge to add a book, update the book information and delete the book according to their needs. Also, users can search the books based on title, author or genre and filter the search results based on availability status and genre.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Text fontSize="md" mt={6} color="gray.700">
        The Book Exchange Platform makes it easy, accessible, and enjoyable for readers to explore new books, add books , update the books and delete the books, search books and filter the search results at their convenience.
      </Text>
    </Box>
  );
}

export default About;











// import React from 'react'

// const About = () => {
//   return (
//     <div>about-com</div>
//   )
// }

// export default About