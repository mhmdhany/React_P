import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Bar, BarTitle, Parent, ParentSpan, Perc, Profiled, ProfileItem, ProfileList, ProfileSectopn, Skills, SkillsDesc, Span, Title, TitleSpan } from './style'

function Profile() {

    const [ skills , setSkills] = useState([])
    useEffect( () => {
        axios.get('js/data.json').then( res => {setSkills(res.data.skills)} )
    } , [])

    const skillsList = skills.map( skill => {
        return (
            <Bar key={skill.id}>
            <BarTitle>{skill.title}</BarTitle>
            <Perc>{skill.precentage}%</Perc>
            <Parent>
                <ParentSpan></ParentSpan>
            </Parent>
        </Bar>
        )
    })

    return (
        <ProfileSectopn>
        <div class="container">
            <Profiled>
                <Title><TitleSpan>My </TitleSpan>Profile</Title>
                <ProfileList>
                    <ProfileItem>
                        <Span>Name</Span>
                        Hamza Nabil
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Birthday</Span>
                        21/1/1996
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Address</Span>
                        Ain shams
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Phone</Span>
                        4444 5555 6666
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Email</Span>
                        hamza@hamza.com
                    </ProfileItem>
                    <ProfileItem class="profile-item">
                        <Span>Website</Span>
                        <Span web="web">www.google.com</Span>
                    </ProfileItem>
                </ProfileList>
            </Profiled>
            
            <Skills>
                <Title class="skills-title">Some <Span>skills</Span></Title>
                <SkillsDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillsDesc>

                {skillsList}

            </Skills>
            
        </div>
    </ProfileSectopn>
    
    )
}

export default Profile
