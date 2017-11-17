//Import librarire for making components
import React from 'react';
import { Text, View} from 'react-native';

// make a components

const Header = (props) => {
  const { textStyle1, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle1}>{props.children}</Text>
    </View>
  );
};

//https://css-tricks.com/snippets/css/a-guide-to-flexbox/

const styles = {
  viewStyle: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  textStyle1: {
    fontSize: 20,
    // paddingTop:20
  }
};

//make the componet available to other parts of App
export default Header;
