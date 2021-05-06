import React from 'react'
import {AboutSection , AboutInfo , Title , TitleSpan , InfoDirection , InfoDesc , Anchor} from './style.js'

function About() {
    return (
        <AboutSection>
        <div class="container">
            <AboutInfo>
                <Title><TitleSpan>This is</TitleSpan> Me</Title>
                <InfoDirection>Creative Director</InfoDirection>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
            </AboutInfo>
        </div>
    </AboutSection>
    )
}

export default About
