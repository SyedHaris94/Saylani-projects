import React, {Component} from 'react'
import {Footer, FooterTab, Button, Text} from 'react-native-base'


export default class Footer extends Component{
    render(){
        return(
            <Footer>
                <FooterTab>
                    <Button>
                        <Text>Patient Tracking App</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}