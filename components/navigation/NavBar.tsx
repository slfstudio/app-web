import { View, TouchableOpacity } from 'react-native';
import {  usePathname } from 'expo-router';
import Text from '@/components/Text'
import { Icon } from '../Icon';
const NavBar = () => {
  const pathname = usePathname();
  const currentRoute = pathname.split('/')[1] || 'Home';

  const navItems = [
    { name: 'Home', route: 'Home' },
    { name: 'Services', route: 'Services' },
    { name: 'About', route: 'About' },
    { name: 'Contact', route: 'Contact' },
  ];
console.log("route",pathname)
  return (
    <View className="flex-row items-center justify-between px-5 py-4">
      <View className="mr-5">
       <Icon name='ExpatWeb' size={30}/>
      </View>
      
      <View className="flex-row gap-5">
        {navItems.map((item) => (
          <TouchableOpacity
            key={item.route}
            className={`py-1.5 px-2.5  ${
              currentRoute === item.route ? 'border-b-2 border-primary' : '' 
            }`}
          >
            <Text className="text-base font-medium">{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default NavBar;
