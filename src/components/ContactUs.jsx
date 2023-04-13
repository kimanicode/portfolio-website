import styled from "styled-components";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(formData); // Do something with the form data
    setFormData({
      name: "",
      email: "",
      message: "",
    })
    setSuccess(true)
    
  };

  return (
    <Container id="contact">
      <Form onSubmit={handleSubmit}>
        <FormTitle>Contact Me</FormTitle>
        <FormField>
          <Label>Name</Label>
          <Input type="text"
           name="name"
          value={formData.name}
          onChange={handleInputChange}
          />

        </FormField>
        <FormField>
          <Label>Email</Label>
          <Input type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
           />
        </FormField>
        <FormField>
          <Label>Message</Label>
          <TextArea 
          name="message"
          value={formData.message}
          onChange={handleInputChange}>
          
          </TextArea>

        </FormField>
        <SubmitButton>Submit</SubmitButton>
        {success && <Success>Message sent successfully </Success>}
      </Form>
      <ContactInfo>
        <ContactInfoTitle>Contact Information</ContactInfoTitle>
        <Messages>
            <p className="flex "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>
0710712393</p>
            <p  className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
Nairobi,Kenya</p>
            <p className="flex">
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
</svg>

karaba.dev@gmail.com</p>
        </Messages>
        
      </ContactInfo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 2rem;
  padding: 2rem;
  background-color: #f2f2f2;
  border-radius: 0.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Form = styled.form`
  width: 50%;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color:#F3B61F;
  @media screen and (max-width: 768px) {
   font-size:1.5rem;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color:#E98A15;
  font-weight:bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: solid 0.1px;
  border-radius: 0.25rem;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: solid 0.5px;
  border-radius: 0.25rem;
  font-size: 1rem;
  height: 200px;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005ea3;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    
  }
`;
const Success = styled.p`
  color: green;
  padding:4px;
  font-weight: bold;
`;

const ContactInfo = styled.div`
  width: 40%;
  max-width: 400px;
  display:flex;
  flex-direction: column;
  justify-content:space-betweeen;
  margin-top:12%;

  

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color:#0077cc;
  text-align:center;
  @media screen and (max-width: 768px) {
    font-size:20px;
   }
`;
const Messages = styled.div`
  background-color:#324376;
  color:white;
  width:100%;
  
  display:flex;
  justify-content:center;
  flex-direction: column;
  height:400px;
  border-radius:20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);  
  padding-left:10px;
  @media screen and (max-width: 768px) {
    height:200px;
    padding:10px;
    
    
    }
 



`;

export default ContactUs;