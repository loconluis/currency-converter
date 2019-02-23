import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'QTZ';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '780';

class Home extends React.Component {
  handlePressCurrency = () => {
    console.log('press Currency');
  };

  handlePressQuote = () => {
    console.log('press Quote');
  };

  handleTextChange = (text) => {
    console.log('text', text);
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuote}
          value={TEMP_QUOTE_PRICE}
          editable={false}
          keyboardType="numeric"
        />
      </Container>
    );
  }
}

export default Home;
