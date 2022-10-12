import React, { lazy, useState, useCallback } from 'react';
import { useObserver } from '../../app/hooks';
import styles from '../../assets/styles/contact/Contact.module.css';

const Button = lazy(() => import('../Button'));

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  const { isVisible, containerRef } = useObserver(0.5);
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
      setInputValue(event.target.value);
      console.log(event.target.validity);
    }, []);

  const handleTextChange: React.ChangeEventHandler<HTMLTextAreaElement> =
    useCallback((event: React.ChangeEvent<HTMLTextAreaElement>): void => {
      setTextareaValue(event.target.value);
      console.log(event.target.validity);
    }, []);

  return (
    <section id="contact" aria-label="Contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Want to get in contact?</h2>
        <p className={styles.email}>sroka.maciej93@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;
