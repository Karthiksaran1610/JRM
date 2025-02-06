import { useState, useEffect } from "react";
import { Box, Button, Flex, Input, Text, Spinner } from "@chakra-ui/react";
import Draggable from "react-draggable";

type Message = {
  text: string;
  sender: "You" | "JRM Chatbot";
  timestamp: string;
  options?: string[];
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({ name: "", phone: "" });
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
  };

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatbotMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatbotMessages", JSON.stringify(messages));
  }, [messages]);

  const openChatbot = () => {
    setIsChatOpen(true);
    if (messages.length === 0) {
      setTimeout(() => {
        setMessages([
          { text: "👋 Hi! Welcome to JRM Construction.", sender: "JRM Chatbot", timestamp: getCurrentTime() },
          { text: "How can I assist you?", sender: "JRM Chatbot", timestamp: getCurrentTime(), options: ["Residential Construction", "Commercial Construction", "Architecture", "Renovation", "Interior"] }
        ]);
      }, 500);
    }
  };

  const handleOptionClick = (option: string) => {
    const userMessage: Message = { text: option, sender: "You", timestamp: getCurrentTime() };
    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);
    setTimeout(() => {
      const descriptions: { [key: string]: string } = {
        "Residential Construction": "🏡 We provide high-quality residential construction services, ensuring safe and beautiful homes.",
        "Commercial Construction": "🏢 Our commercial construction focuses on efficiency, durability, and modern design.",
        "Architecture": "📐 We offer expert architectural designs tailored to your needs.",
        "Renovation": "🔨 Need a makeover? We handle home and office renovations with top-quality craftsmanship.",
        "Interior": "🎨 Our interior design services transform spaces into stylish and functional environments."
      };

      const botResponse: Message = { text: descriptions[option] || "Please select a valid option.", sender: "JRM Chatbot", timestamp: getCurrentTime() };
      setMessages((prev) => [...prev, botResponse]);

      setStep(1);
      setIsTyping(false);

      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "May I have your name? 😊", sender: "JRM Chatbot", timestamp: getCurrentTime() }]);
        setStep(2);
      }, 1000);
    }, 1000);
  };

  const sendMessage = () => {
    if (message.trim() === "") return;

    const userMessage: Message = { text: message, sender: "You", timestamp: getCurrentTime() };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    setIsTyping(true);
    setTimeout(() => {
      let botResponse: Message;
      if (step === 2) {
        setUserData({ ...userData, name: message });
        botResponse = { text: "Great! Can I have your phone number? 📞", sender: "JRM Chatbot", timestamp: getCurrentTime() };
        setStep(3);
      } else if (step === 3) {
        setUserData({ ...userData, phone: message });
        botResponse = { text: `Thank you, ${userData.name}! ✅ Our team will contact you soon at ${message}.`, sender: "JRM Chatbot", timestamp: getCurrentTime() };
        setStep(4);
      } else {
        botResponse = { text: "I'm not sure about that. Please select an option.", sender: "JRM Chatbot", timestamp: getCurrentTime() };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  // Handle Enter key press
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <Draggable>
      <Box position="fixed" bottom="20px" right="20px">
        {!isChatOpen ? (
          <Button colorScheme="blue" onClick={openChatbot}>💬 Chat with us</Button>
        ) : (
          <Box width={{ base: "90%", sm: "80%", md: "350px", lg: "400px" }} maxW="400px" bg="gray.100" p={4} boxShadow="lg" borderRadius="lg" height="550px">
            <Flex justifyContent="space-between" mb={2}>
              <Text fontSize="lg" fontWeight="bold">JRM C</Text>
              <Button size="xs" onClick={() => setIsChatOpen(false)}>✖</Button>
            </Flex>

            {/* Chat Messages */}
            <Flex direction="column" h="75%" overflowY="auto" p={2} bg="white" borderRadius="lg" boxShadow="sm">
              {messages.map((msg, index) => (
                <Flex key={index} justify={msg.sender === "You" ? "flex-end" : "flex-start"} mb={2}>
                  <Box
                    bg={msg.sender === "You" ? "blue.500" : "gray.200"}
                    color={msg.sender === "You" ? "white" : "black"}
                    p={3}
                    borderRadius="20px"
                    maxW="75%"
                    fontSize="sm"
                    boxShadow="md"
                  >
                    <Text>{msg.text}</Text>
                    <Text fontSize="xs" color="gray.500" mt={1} textAlign="right">{msg.timestamp}</Text>
                    {msg.options && (
                      <Flex mt={2} gap={2} wrap="wrap">
                        {msg.options.map((option, i) => (
                          <Button key={i} size="sm" colorScheme="blue" variant="outline" onClick={() => handleOptionClick(option)}>
                            {option}
                          </Button>
                        ))}
                      </Flex>
                    )}
                  </Box>
                </Flex>
              ))}

              {/* Typing Animation */}
              {isTyping && (
                <Flex justify="flex-start" mb={2}>
                  <Box bg="gray.200" color="black" p={3} borderRadius="20px" maxW="75%" fontSize="sm" boxShadow="md">
                    <Spinner size="xs" mr={2} /> Typing...
                  </Box>
                </Flex>
              )}
            </Flex>

            {/* Message Input */}
            <Flex mt={2}>
              <Input
                placeholder="Type here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress} // Listen for Enter key
                borderRadius="full"
                size="sm"
                flex="1"
              />
              <Button colorScheme="blue" onClick={sendMessage} size="sm" ml={2}>
                ➤
              </Button>
            </Flex>
          </Box>
        )}
      </Box>
    </Draggable>
  );
};

export default Chatbot;
