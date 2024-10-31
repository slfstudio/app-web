import { View, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Text from '@/components/Text'
import { Icon } from '../Icon';
const NavBar = () => {
  const route = useRoute();
  const currentRoute = route.name;

  const navItems = [
    { name: 'Home', route: 'Home' },
    { name: 'Services', route: 'Services' },
    { name: 'About', route: 'About' },
    { name: 'Contact', route: 'Contact' },
  ];
console.log("route",currentRoute)
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
