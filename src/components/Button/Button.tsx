import React, {FC} from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './Button.style';

type ButtonProps = {
  icon?: string;
  iconPosition?: 'left' | 'right';
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
};

const Button: FC<ButtonProps> = ({
  buttonStyle,
  buttonTextStyle,
  icon,
  iconPosition = 'right',
  disabled = false,
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={disabled}
      style={[
        styles.container,
        !!icon && styles.containerWithIcon,
        iconPosition === 'left' && styles.containerIconLeft,
        buttonStyle,
        disabled && styles.containerDisabled,
      ]}
      onPress={onPress}>
      <Text
        style={[styles.text, buttonTextStyle, disabled && styles.textDisabled]}>
        {children}
      </Text>

      {icon && (
        <Icon
          name={icon}
          size={15}
          style={[
            styles.icon,
            iconPosition === 'left' && styles.iconLeft,
            disabled && styles.iconDisabled,
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;
