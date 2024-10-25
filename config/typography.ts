import { scaleFont } from '@/utils/scaleSizes';
import colors from './colors';

const typography = {
  default: {
    fontFamily: 'inter-regular',
    fontSize: scaleFont(14),
    color: colors['primary-text'],
  },
  'Heading-H1': {
    fontFamily: 'inter-bold',
    fontSize: scaleFont(60),
    color: colors['primary-text'],
  },
  'Heading-H2': {
    fontFamily: 'inter-bold',
    fontSize: scaleFont(48),
    color: colors['primary-text'],
  },
  'Heading-H3': {
    fontFamily: 'inter-bold',
    fontSize: scaleFont(40),
    color: colors['primary-text'],
  },
  'Heading-H4': {
    fontFamily: 'inter-bold',
    fontSize: scaleFont(30),
    color: colors['primary-text'],
  },
  'Heading-H5': {
    fontFamily: 'inter-semi-bold',
    fontSize: scaleFont(28),
    color: colors['primary-text'],
  },
  'Heading-H6': {
    fontFamily: 'inter-semi-bold',
    fontSize: scaleFont(24),
    color: colors['primary-text'],
  },
  'Body-Large-Regular': {
    fontFamily: 'inter-regular',
    fontSize: scaleFont(18),
    color: colors['primary-text'],
  },
  'Body-Large-Medium': {
    fontFamily: 'inter-medium',
    fontSize: scaleFont(18),
    color: colors['primary-text'],
  },
  'Body-Large-SemiBold': {
    fontFamily: 'inter-semi-bold',
    fontSize: scaleFont(18),
    color: colors['primary-text'],
  },
  'Body-Large-Bold': {
    fontFamily: 'inter-bold',
    fontSize: scaleFont(18),
    color: colors['primary-text'],
  },
  'Body-Medium-Regular': {
    fontFamily: 'inter-regular',
    fontSize: scaleFont(16),
    color: colors['primary-text'],
  },
  'Body-Medium-Medium': {
    fontFamily: 'inter-medium',
    fontSize: scaleFont(16),
    color: colors['primary-text'],
  },
  'Body-Medium-SemiBold': {
    fontFamily: 'inter-semi-bold',
    fontSize: scaleFont(16),
    color: colors['primary-text'],
  },
  'Body-Medium-Bold': {
    fontFamily: 'inter-bold',
    fontSize: scaleFont(16),
    color: colors['primary-text'],
  },
  'Body-Small-Regular': {
    fontFamily: 'inter-regular',
    fontSize: scaleFont(14),
    color: colors['primary-text'],
  },
  'Body-Small-Medium': {
    fontFamily: 'inter-medium',
    fontSize: scaleFont(14),
    color: colors['primary-text'],
  },
  'Body-Extra-Small-Regular': {
    fontFamily: 'inter-regular',
    fontSize: scaleFont(12),
    color: colors['primary-text'],
  },
  'Body-Extra-Small-Medium': {
    fontFamily: 'inter-medium',
    fontSize: scaleFont(12),
    color: colors['primary-text'],
  },
};

export default typography;
