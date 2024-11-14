import { scaleFont } from '@/utils/scaleSizes';
import colors from './colors';

const typography = {
  default: {
    fontFamily: 'inter-regular',
    fontSize: scaleFont(14),
  },
  'Heading-H1': {
    fontFamily: 'inter-bold',
    fontSize: scaleFont(60),
  },
  'Heading-H2': {
    fontFamily: 'inter-bold',
    fontSize: scaleFont(48),
  },
  'Heading-H3': {
    fontFamily: 'inter-bold',
    fontSize: scaleFont(40),
  },
  'Heading-H4': {
    fontFamily: 'inter-bold',
    fontSize: scaleFont(30),
  },
  'Heading-H5': {
    fontFamily: 'inter-semi-bold',
    fontSize: scaleFont(28),
  },
  'Heading-H6': {
    fontFamily: 'inter-semi-bold',
    fontSize: scaleFont(24),
  },
  'Body-Large-Regular': {
    fontFamily: 'inter-regular',
    fontSize: scaleFont(18),
  },
  'Body-Large-Medium': {
    fontFamily: 'inter-medium',
    fontSize: scaleFont(18),
  },
  'Body-Large-SemiBold': {
    fontFamily: 'inter-semi-bold',
    fontSize: scaleFont(18),
  },
  'Body-Large-Bold': {
    fontFamily: 'inter-bold',
    fontSize: scaleFont(18),
  },
  'Body-Medium-Regular': {
    fontFamily: 'inter-regular',
    fontSize: scaleFont(16),
  },
  'Body-Medium-Medium': {
    fontFamily: 'inter-medium',
    fontSize: scaleFont(16),
  },
  'Body-Medium-SemiBold': {
    fontFamily: 'inter-semi-bold',
    fontSize: scaleFont(16),
  },
  'Body-Medium-Bold': {
    fontFamily: 'inter-bold',
    fontSize: scaleFont(16),
  },
  'Body-Small-Regular': {
    fontFamily: 'inter-regular',
    fontSize: scaleFont(14),
  },
  'Body-Small-Medium': {
    fontFamily: 'inter-medium',
    fontSize: scaleFont(14),
  },
  'Body-Extra-Small-Regular': {
    fontFamily: 'inter-regular',
    fontSize: scaleFont(12),
  },
  'Body-Extra-Small-Medium': {
    fontFamily: 'inter-medium',
    fontSize: scaleFont(12),
  },
};

export default typography;
