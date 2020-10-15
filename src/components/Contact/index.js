import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import emailjs from 'emailjs-com';
import { ArrowForward, ArrowRight, FormButton, FormContainer, FormH1, FormP, FormSendMessage } from './ContactElements'
// import {Button} from '../ButtonElements'
// import { ArrowForward, ArrowRight } from '../HeroSection/HeroElements';


const schema = yup.object().shape({
    name: yup.string().required('This field is required !'),
    email: yup.string().email('Not valid email adress !').required('This field is required !'),
    subject: yup.string().required('This field is required !'),
    message: yup.string().required('This field is required !'),

  });


function Contact() {

  const [hover, setHover] = useState(false)

  const onHover = () => {
      setHover(!hover);
  }

    const [disabled, setDisabled]= useState(false);
    const {register,handleSubmit, errors,reset} = useForm({
        resolver: yupResolver(schema)
      });


    const [result, setResult] = useState(null);
  
     const sendEmail = (e) => {
      // e.preventDefault();
      console.log(e);
       emailjs.send('gmail', 'template_fvq0jjv', e, 'user_FTGqaDNTbGCd3Hl51jxTK')
        .then((result) => {
            console.log(result.text);
            setResult(result.text)
        }, (error) => {
            console.log(error.text);
            setResult(error.text)
        });
        reset();
        setDisabled(true);
    }


    return (
        <>

        <FormContainer className='contact' onSubmit={handleSubmit(sendEmail)}>

        <FormH1>Contact Me</FormH1>
        <TextField
            name="name"
          className="outlined-required"
          label="Full Name"
          placeholder="Full Name"
          variant="outlined"
          inputRef={register}
          style={{
            width: "50%"
          }}
        />
        <FormP className="error">{errors.name?.message}</FormP>
        <TextField
        name="email"
          className="outlined-required"
          label="Email"
          placeholder="Email"
          variant="outlined"
          inputRef={register}
          style={{
            width: "50%"
          }}
        />
        <FormP className="error">{errors.email?.message}</FormP>
        <TextField
        name="subject"
          className="outlined-required"
          label="Subject"
          placeholder="Subject"
          variant="outlined"
          inputRef={register}
          style={{
            width: "50%"
          }}
        />
        <FormP className="error">{errors.subject?.message}</FormP>
        <TextField
        name="message"
          multiline 
          rowsMax={4}
          className="outlined-required"
          label="Message"
          placeholder="Write your message"
          variant="outlined"
          inputRef={register}
          style={{
            width: "50%"
          }}
        />
        <FormP className="error">{errors.message?.message}</FormP>
         <FormButton disabled={disabled} lightBg='true' big='true' type="submit" onMouseEnter={onHover} onMouseLeave={onHover}>
        Send Message {hover ? <ArrowForward/> : <ArrowRight/>}
         </FormButton>
         
         {result && (
        <FormSendMessage>
          You sent a message. Thank you for contact.
        </FormSendMessage>
      )}
         {/* <Button disabled={disabled} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' type="submit" >
                        Send Message {hover ? <ArrowForward/> : <ArrowRight/>}
        </Button> */}
        </FormContainer>

        </>
    )
}

export default Contact

