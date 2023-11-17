import * as React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';


interface TabBarIconProps {
  readonly name: React.ComponentProps<typeof FontAwesome>['name'];
  readonly color: string | undefined;
}

export default function TabBarIcon({ name, color }: Readonly<TabBarIconProps>) {
  return <FontAwesome allowAsProp={true} size={28} style={{ marginBottom: -3 }} name={name} color={color} />;
}