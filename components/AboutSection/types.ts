
import { IconsType } from '../Icon/iconsList/types' ;
export enum aboutSectionVariant{
    'health',
    'car',
    'home'
};
export interface AboutSectionProps{
    variant?: keyof  typeof aboutSectionVariant;
    iconName?:keyof IconsType;
    mainTitle:string;
    title:string;
    titleTwo?:string;
    subtitle:string;
    subtitletwo?:string;
    bullet:string;
    bulletTwo?:string;
    bulletThree?:string;
    bulletFour?:string;

}