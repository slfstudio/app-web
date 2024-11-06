
import { IconsType } from '../Icon/iconsList/types' ;
export enum aboutSectionVariant{
    'health',
    'car',
    'home'
};
export interface AboutSectionProps{
    variant?: keyof  typeof aboutSectionVariant;
    iconName?:keyof IconsType;
    mainTitle:string | any;
    title:string | any;
    titleTwo?:string | any;
    subtitle:string | any;
    subtitletwo?:string | any;
    bullet:string | any;
    bulletTwo?:string | any;
    bulletThree?:string | any;
    bulletFour?:string | any;

}