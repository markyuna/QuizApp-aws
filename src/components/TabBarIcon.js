import { FontAwesome5  } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <FontAwesome5
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color="#7B2AF1"
      // color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
  );
}