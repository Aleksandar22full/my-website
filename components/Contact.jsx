import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from './ui/button';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_82u541f', 'template_1rjedic', form.current, {
        publicKey: 'uGm7V3fe9B_pthd-A',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
      <div className='flex flex-col justify-center items-center'>
        <h1 id='contact' className='text-6xl underline decoration solid decoration-blue-500 decoration-6'>Contact me</h1>
    <form ref={form} onSubmit={sendEmail} className='mt-16'>
      <label>Name</label>
      <Input type="text" name="from_name" />
      <label>Email</label>
      <Input type="email" name="from_email" />
      <label>Message</label>
      <Textarea name="message" />
      <Button type="submit" value="Send" className='mt-4 mb-4'>Send</Button>
    </form>
    </div>
  );
};
