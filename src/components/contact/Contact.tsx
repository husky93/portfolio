import React, { useState, useCallback } from 'react';
import { useObserver } from '../../app/hooks';
import styles from '../../assets/styles/contact/Contact.module.css';

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  const { isVisible, containerRef } = useObserver(0.5);
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
      setInputValue(event.target.value);
    }, []);

  const handleTextChange: React.ChangeEventHandler<HTMLTextAreaElement> =
    useCallback((event: React.ChangeEvent<HTMLTextAreaElement>): void => {
      setTextareaValue(event.target.value);
    }, []);

  return (
    <section id="contact" aria-label="Contact" className={styles.contact}>
      <h2 className="h2">Contact</h2>
      <form>
        <label htmlFor="email-input">E-mail:</label>
        <input
          type="email"
          id="email-input"
          name="Email"
          placeholder="example@gmail.com"
          value={inputValue}
          onChange={handleInputChange}
        />
        <label htmlFor="text-input">E-mail:</label>
        <textarea
          id="text-input"
          name="Message"
          placeholder="Enter your message here..."
          value={textareaValue}
          onChange={handleTextChange}
        />
      </form>
    </section>
  );
};

export default Contact;
