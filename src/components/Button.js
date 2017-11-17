import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

//
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
  //親から渡されたfunctionを実行する
    <TouchableHighlight onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableHighlight>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    //文字の太さ
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    // flex1 全てに広げる
    flex: 1,
    // ref:https://css-tricks.com/almanac/properties/a/align-self/
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
