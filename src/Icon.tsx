import { PropsWithChildren } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

type Props =PropsWithChildren<{
    name:string;
}>
const icon = ({name}:Props) => {
switch (name) {
  
        case 'circle':
            return <Icon name="circle-thin" size={38} color="#F7CD2E" />
            break;
        case 'cross':
            return <Icon name="times" size={38} color="#38CC77" />
            break;
      
        default:
          return <Icon name="pencil" size={38} color="#0D0D0D" />
    }
}
export default icon
const styles = StyleSheet.create({})