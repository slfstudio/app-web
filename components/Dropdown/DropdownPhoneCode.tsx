import { DropdownProps } from './types';
import DropdownBase from './DropdownBase';
import { useEffect, useRef, useState } from 'react';
import { getAreaCode } from '@/api/websersives';

function DropdownPhoneCode({ ...props }: DropdownProps) {
  const [areaCode, setAreaCode] = useState([]);
  const preventReload = useRef(false);
  const fetchAreaCode = async () => {
    try {
      const { data } = await getAreaCode();
      setAreaCode(
        data.ladaCountries.map((item: { PhoneCode: number; Country: string; Iso2: string }) => ({
          value: item.PhoneCode,
          label: `+${item.PhoneCode}`,
          icon: item.Iso2,
        })),
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!preventReload.current) {
      fetchAreaCode();
      preventReload.current = true;
    }
  }, []);
  return <DropdownBase {...props} data={areaCode} />;
}

export default DropdownPhoneCode;
