import axios from 'axios'
import React, { Component } from 'react'
import {WorkSection , WorkTitle , Span , WorkPart , Icon , PartTitle , Line , PartDesc} from './style.js'

class Work extends Component {

    state = {
        works: []
    }
    componentDidMount () {
        axios.get('js/data.json').then(res => {this.setState({works: res.data.works}) })
    }

    render() {

        const {works} =  this.state;
        const workList = works.map( (item) => {
            return (
                <WorkPart first={item.id} key={item.id}>
                    <Icon className={item.icon_name}></Icon>
                    <PartTitle>{item.title}</PartTitle>
                    <Line />
                    <PartDesc>
                        {item.body}
                    </PartDesc>
            </WorkPart>
            )
        })

        return (
            <WorkSection>
             <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {workList}
            </div>
        </WorkSection>
        )
    }

}

export default Work
