import { useState } from "react";
import { Container, Input, Button, VStack, HStack, Checkbox, IconButton, Heading, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="xl">Todo App</Heading>
        <HStack w="100%">
          <Input
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button onClick={addTodo} colorScheme="teal">Add</Button>
        </HStack>
        <VStack w="100%" spacing={3} align="stretch">
          {todos.length === 0 ? (
            <Text>No todos yet. Add a new todo to get started!</Text>
          ) : (
            todos.map((todo, index) => (
              <HStack key={index} spacing={4}>
                <Checkbox
                  isChecked={todo.completed}
                  onChange={() => toggleTodo(index)}
                />
                <Text as={todo.completed ? "s" : undefined} flex="1">
                  {todo.text}
                </Text>
                <IconButton
                  aria-label="Delete todo"
                  icon={<FaTrash />}
                  onClick={() => deleteTodo(index)}
                />
              </HStack>
            ))
          )}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;