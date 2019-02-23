import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';
import color from 'color';
import styles from './styles';

const InputWithButton = (props) => {
  const { buttonText, onPress, editable = true } = props;
  const underlayColor = color(styles.$buttonBackGroundColorBase).darken(
    styles.$buttonBackGroundColorModifier,
  );

  const containerStyles = [styles.container];
  if (!editable) {
    containerStyles.push(styles.containerDisable);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;
