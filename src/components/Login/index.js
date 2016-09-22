// @flow

import React, {PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import theme from '../../theme'
import LoginForm from './LoginForm'
import FacebookBtn from './FacebookBtn'

const Login = ({route}) => {
  return (
    <View style={s.root}>
      <View>
        <Text style={[s.title, s.whiteText, s.centeredText]}>
          {route.title}
        </Text>
      </View>
      <View>
        <FacebookBtn />
      </View>
      <Text style={s.centeredText}>or</Text>
      <View>
        <LoginForm />
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.brandColor
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  centeredText: { textAlign: 'center' },
  whiteText: { color: theme.colors.white }
})

Login.propTypes = {
  route: PropTypes.object.isRequired
}

module.exports = Login
