/**
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'

import Login from './src/components/Login'
import { APP_TITLE } from './src/shared/constants'

class dezibelApp extends Component {
  render () {
    return (
      <Navigator
        renderScene={route => <Login route={route} />}
        initialRoute={{ title: APP_TITLE, index: 0 }}
      />
    )
  }
}

AppRegistry.registerComponent('dezibelApp', () => dezibelApp)
