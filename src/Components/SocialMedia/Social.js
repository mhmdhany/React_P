import axios from 'axios'
import React from 'react'
import {SocialSection,Scial,Icon,SocialDesc,Span,SpanInfo} from './style.js'

class Social extends React.Component {

    state = {
        social: []
    }

    componentDidMount() {
        axios.get('js/data.json')
        .then(res => 
            { this.setState({ social : res.data.social }) 
        })
    }
    render() {
        const {social} = this.state;
        const socialList = social.map(item => {
            return (
            <Scial item={item.id} key={item.id}>
            <Icon className={item.icon}></Icon>
            <SocialDesc>
                <Span>{item.title}</Span>
                <SpanInfo>{item.body}</SpanInfo>
            </SocialDesc>
            </Scial>
            )
        })
    return (
          <SocialSection>
              {socialList}
        </SocialSection>
    )
 }
}

export default Social
