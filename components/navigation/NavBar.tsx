import { View, TouchableOpacity } from 'react-native';
import { Link, usePathname } from 'expo-router';
import Text from '@/components/Text';
import { Icon } from '../Icon';
const NavBar = () => {
  const pathname = usePathname();
  const currentRoute = pathname.split('/')[1] || 'Home';

  const navItems = [
    { name: 'Home', route: '/' },
    { name: 'Services', route: '/Services' },
    { name: 'About', route: '/About' },
    { name: 'Contact', route: '/Contact' },
  ];

  return (
    <View className="flex-row items-center justify-between px-5 py-4">
      <Link href="/">
        <View className="mr-5">
          <Icon name="ExpatWeb" size={30} />
        </View>
      </Link>
      <View className="flex-row gap-5">
        {navItems.map((item) => (
          <Link href={item.route as `/${string}`}>
            <TouchableOpacity
              key={item.route}
              className={`py-1.5 px-2.5  ${currentRoute === item.name ? 'border-b-2 border-pinkLight' : ''}`}
            >
              <Text className="text-base font-medium">{item.name}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
};

export default NavBar;
