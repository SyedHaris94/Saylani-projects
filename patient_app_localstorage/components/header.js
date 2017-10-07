import React, { Component } from 'react'
import { Container, Header, Item, Input, Icon, Button, Text, View } from 'native-base';

export default class Header extends Component{
    Component(){
        this.state={
            search:''
        }
    }

    render(){
        return(
            <View>
                <Input/>
            </View>
        );
    }
} 