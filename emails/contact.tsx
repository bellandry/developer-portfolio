import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container>
            <Section>
              <Heading className="text-2xl font-bold text-gray-900">
                New Contact Form Submission
              </Heading>
              <Text className="text-gray-700">
                You received a new message from your portfolio website:
              </Text>
              <Hr />
              <Text className="text-gray-700">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="text-gray-700">
                <strong>Email:</strong> {email}
              </Text>
              <Text className="text-gray-700">
                <strong>Message:</strong>
              </Text>
              <Text className="text-gray-700 whitespace-pre-wrap">{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
