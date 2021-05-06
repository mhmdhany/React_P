import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import { ContactSection, Form, FormInput, InputEmail, InputExp, InputText, Submit, TextArea, Title, TitleSpan } from './style'

function Contact() {
    return (
        <Fragment>
            <ContactSection>
            <div class="container">
                <Title><TitleSpan>Drop </TitleSpan>Me A line</Title>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputExp type="text" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message" />
                    <Submit type="submit" value="Send Message" />
                </Form>
            </div>
            </ContactSection>
            <Footer />
        </Fragment>
    )
}

export default Contact
