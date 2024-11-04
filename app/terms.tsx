import Background from '@/components/Background';
import Bullets from '@/components/Bullets';
import Input from '@/components/Input';
import Spacing from '@/components/Spacing';
import Text from '@/components/Text';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

export default function Terms() {
  const { t } = useTranslation();
  const bulletsOne = [
    'To identify the holder for the fulfillment of obligations contained in our service provision contract.',
    'To act as an intermediary in the insurance contract of your interest.',
    'To provide quotes and intermediary services for the products you have requested or contracted.',
    'For the evaluation of your insurance application and risk selection, processing your claims payments, and for the administration, maintenance, and renewal of your insurance policy, as well as for the prevention of fraud and illegal operations.',
  ];

  const bulletsTwo = [
    'To notify you about new services or products related to those already contracted.',
    'To inform you of changes in those services; to conduct studies and programs necessary to determine consumption habits, and to conduct periodic evaluations of our products and services to improve their quality.',
    'Marketing or advertising. •Commercial prospecting.',
  ];
  const bulletsThree = [
    'To notify you about new services or products related to those already contracted or acquired.',
    'To communicate changes to the same; to carry out studies and programs necessary to determine consumption habits.',
    'To conduct periodic evaluations of our products and services to improve their quality.',
    'Marketing or advertising.',
    'Commercial prospecting.',
  ];
  const bulletsFour = ['Identification data', 'Contact details', 'Physical characteristics'];
  const bulletsFive = ['Physical health status, past, present, or future.', 'Financial and/or asset data.'];
  const bulletsSix = [
    'When the transfer of information is conducted with third parties to comply with the services or obligations agreed upon with the holder.',
    'When required by law, or for the administration of justice.',
    'When the holder expressly consents to it.',
  ];
  const bulletsSeven = [
    'Name of the data holder and address, email, or another method to communicate the response to your request.',
    'Documents proving your identity or official identification, or a document accrediting representation of the holder.',
    'A clear and precise description of the information for which access, rectification, objection, or cancellation is requested, as applicable.',
    'In rectification requests, attach documentation supporting your request.',
    'Any other element or document that facilitates the location of personal data.',
  ];
  const bulletsEight = ["Via email: contacto@bajatuseguro.com"];
  const bulletsNine = [
    "Acting as an intermediary in the insurance contract of your interest.",
"Identification of the holder.",
"Providing quotes and intermediary services.",
  ];
  const bulletsTen = [
    "When the personal data is no longer necessary for the purpose it was originally collected/processed.",
"When the individual withdraws their consent.",
"When the individual objects to the processing, and there is no other legal basis for the relevant processing activity.",
"When the personal data was processed unlawfully.",
"When the personal data must be erased to comply with a legal obligation.",
  ];
  const bulletsEleven = ["Identification data",
    "Contact data",
    "Data related to physical characteristics."];
  const bulletsTwelve = [
    "Current, past, or future physical health conditions.",
"Financial and/or asset data.",
  ];
  const bulletsThei = [
    "When the transfer of information to third parties is necessary to fulfill services or agreements with the holder.",
"When required by law or for the administration of justice.",
"When the holder expressly consents to such sharing.",
  ];
  const bulletsFourteen = [
    "The name of the data holder and their address, email, or other means of communication for the response.",
"Documents proving your identity or legal representation.",
"A clear description of the data for which you request access, rectification, opposition, or cancellation.",
"In rectification cases, include supporting documentation.",
"Any other element or document that helps locate your personal data."
  ]
  return (
    <Background>
      <View className="flex1 p-[60px]">
        <Text variant="Body-Medium-SemiBold" className="text-pink-light">
          {t('info.terms_and_conditions')}
        </Text>
        <Spacing />
        <View className="w-full h-[2px] bg-stroke my-md" />
        <Spacing />
        <View className="flex-1 flex-row ">
          <View className="w-[25%] border border-dark7 p-[40px] rounded">
            <Input placeholder={t('info.search')} />
            <Spacing />
            <Text variant="Body-Large-Bold" className="text-dark">
              {t('label.content')}
            </Text>
            <Spacing />
            <View className="w-full h-[2px] bg-stroke my-md" />
            <Spacing />
            <View>
              <Text variant="Body-Large-SemiBold" className="text-pink-light">
                {t('info.privacy_policy')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.for_what_purposes_will_we_use_your_personal_data')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.what_personal_data_will_we_use_for_these_purposes')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.with_whom_do_we_share_your_personal_information_and_for_what_purposes')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.how_can_you_access_rectify_or_cancel_your_personal_data_or_object_to_its_use')}
              </Text>
            </View>
            <Spacing />
            <View className="w-full h-[2px] bg-stroke my-md" />
            <Spacing />
            <View>
              <Text variant="Body-Large-SemiBold" className="text-pink-light">
                {t('info.mechanisms_for_exercising_arco_rights_and_revocation_of_consent')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.how_can_you_limit_the_use_or_disclosure_of_your_personal_information')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.use_of_tracking_technologies_on_our_website')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.how_can_you_learn_about_changes_to_this_privacy_notice')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.your_consent_for_the_processing_of_your_personal_data')}
              </Text>
            </View>
            <Spacing />
            <View className="w-full h-[2px] bg-stroke my-md" />
            <Spacing />
            <Text variant="Body-Large-SemiBold" className="text-pink-light">
              {t('info.terms_and_conditions')}
            </Text>
            <Spacing />
            <View className="w-full h-[2px] bg-stroke my-md" />
            <Spacing />
            <View>
              <Text variant="Body-Large-SemiBold" className="text-pink-light">
                {t('info.data_deletion_policies')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.purpose')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.rights')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.when_does_the_right_to_erasure_apply')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.how_can_data_be_deleted')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.who_do_we_share_your_personal_information_with_and_for_what_purposes')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.how_can_you_access_rectify_or_cancel_your_personal_data_or_oppose_its_use')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.mechanisms_for_exercising_arco_rights_and_consent_revocation')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.how_can_you_limit_the_use_or_disclosure_of_your_personal_information')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.use_of_tracking_technologies_on_our_website')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.how_can_you_learn_about_changes_to_this_privacy_notice')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {t('info.your_consent_for_the_processing_of_your_personal_data')}
              </Text>
              <Spacing />
            </View>
          </View>
          <View className="flex-1 px-[20px]">
            <View>
              <Text variant="Body-Large-SemiBold" className="text-pink-light">
                {t('info.privacy_policy')}
              </Text>
              <Spacing size="L" />
              <Text>
                SACAMO TECHNOLOGIES SAPI DE CV,BAJATUSEGURO.COM, INSURANCE AGENT, S.A. DE C.V., and BTS SERVICIO
                INTERNACIONAL, S.A. DE C.V., commercially known as bajatuseguro.com, with an address at Sócrates 128,
                Col. Polanco, C.P. 11550, Mexico City, CDMX, and the internet portal www.bajatuseguro.com, are
                responsible for collecting your personal data, its use, and its protection. In this regard, we inform
                you of the following:
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Bold" className="text-dark">
                {t('info.for_what_purposes_will_we_use_your_personal_data')}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                The personal data we collect from you will be used for the following purposes, which are necessary for
                the service you request (Primary Purposes):
              </Text>
              {bulletsOne.map((item, index) => (
                <Bullets key={index} label={item} />
              ))}
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                Additionally, we will use your personal information for the following secondary purposes, which are not
                necessary for the requested service but allow us to provide you with better service:
              </Text>

              {bulletsTwo.map((item, index) => (
                <Bullets key={index} label={item} />
              ))}
              <Spacing size="L" />
              <Text variant="Body-Medium-Regular" className="text-dark">
                If you do not wish for your personal data to be used for these secondary purposes, please indicate so
                below, or send us an email at contacto@bajatuseguro.com:
              </Text>
              <Spacing size="XL" />
              <Text variant="Body-Medium-Regular" className="text-dark">
                I do not consent to the use of my personal data for the following purposes:
              </Text>
              {bulletsThree.map((item, index) => (
                <Bullets key={index} label={item} />
              ))}
              <Spacing size="XL" />
              <Text variant="Body-Medium-Regular" className="text-dark">
                Refusal to use your personal data for these purposes will not be a reason for us to deny the services
                and products you request or contract with us.
              </Text>
              <Spacing size="XL" />
              <Text variant="Body-Medium-Bold" className="text-dark">
                What personal data will we use for these purposes?
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                {' '}
                To carry out the purposes described in this privacy notice, we will use the following personal data:
              </Text>
              {bulletsFour.map((item, index) => (
                <Bullets key={index} label={item} />
              ))}
              <Spacing size="XL" />
              <Text variant="Body-Medium-Regular" className="text-dark">
                In addition to the personal data mentioned above, for the purposes stated in this privacy notice, we
                will use the following personal data, considered sensitive, which require special protection and your
                consent:
              </Text>
              {bulletsFive.map((item, index) => (
                <Bullets key={index} label={item} />
              ))}
              <Spacing size="XL" />
              <Text variant="Body-Medium-Bold" className="text-dark">
                With whom do we share your personal information, and for what purposes?
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                The holder's personal information cannot be transferred to third parties. However, it is authorized to
                be shared in the following cases:
              </Text>
              {bulletsSix.map((item, index) => (
                <Bullets key={index} label={item} />
              ))}
              <Spacing size="XL" />
              <Text variant="Body-Medium-Regular" className="text-dark">
                We inform you that your personal data is shared within the country with companies in the insurance
                sector, particularly with insurers, financial institutions, and service companies operating for the
                Bajatuseguro.com platform, for pre-contract insurance quotations based on your request.
              </Text>
              <Spacing size="XXL" />
              <Text variant="Body-Medium-Bold" className="text-dark">
                How can you access, rectify, or cancel your personal data, or object to its use?
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                You have the right to know what personal data we have about you, how we use it, and the conditions of
                its use (Access). Likewise, it is your right to request the correction of your personal information if
                it is outdated, inaccurate, or incomplete (Rectification); to request its deletion from our records or
                databases if you consider it is not being properly used (Cancellation); as well as to oppose the use of
                your personal data for specific purposes (Objection). These rights are known as ARCO rights.
              </Text>
            </View>
            <Spacing size="XXL" />
            <View>
              <Text variant="Body-Large-SemiBold" className="text-pink-light">
                Mechanisms for exercising ARCO rights and revocation of consent
              </Text>
              <Spacing size="XL" />
              <Text variant="Body-Medium-Regular" className="text-dark">
                To exercise your ARCO rights in accordance with the law, you must direct your request to our Personal
                Data Protection Department at Sócrates 128, Col. Polanco, C.P. 11550, Mexico City, CDMX, or via email at
                contacto@bajatuseguro.com, which we ask you to confirm by phone to guarantee correct reception and
                response in accordance with the law. The procedure is as follows:
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                Submit a written request to the aforementioned address or send the request via email, containing the
                following:
              </Text>
              {bulletsSeven.map((item, index) => (
                <Bullets key={index} label={item} />
              ))}
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                The responsible staff of the Personal Data Protection Department will respond within a maximum of 20
                days, and if applicable under the law, the response will be implemented within 15 days following the
                date of notification.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Bold" className="text-dark">
                How can you limit the use or disclosure of your personal information?
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                To limit the use and disclosure of your personal information, we offer the following methods:
              </Text>
              {bulletsEight.map((item, index) => (
                <Bullets key={index} label={item} />
              ))}
              <Spacing size="L" />
              <Text variant="Body-Medium-Bold" className="text-dark">
                Use of tracking technologies on our website
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                We inform you that our website www.bajatuseguro.com uses cookies, web beacons, and other technologies to
                monitor your behavior as an internet user and to provide you with better service and user experience.
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                The personal data collected through these tracking technologies are used for the following purposes:
              </Text>
              {bulletsNine.map((item, index) => (
                <Bullets key={index} label={item} />
              ))}
              <Spacing size="L" />
              <Text variant="Body-Medium-Bold" className="text-dark">
                How can you learn about changes to this privacy notice?
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                This privacy notice may undergo modifications, changes, or updates derived from new legal requirements;
                our own needs for the products or services we offer; our privacy practices; changes in our business
                model, or other reasons. We are committed to keeping you informed about changes to this privacy notice
                through the website: www.bajatuseguro.com/aviso-privacidad.
              </Text>
              <Spacing size="L" />
              <Text variant="Body-Medium-Bold" className="text-dark">
                Your consent for the processing of your personal data.
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                If this privacy notice is not provided to you directly or personally, you have five business days to
                oppose the processing and transfer of your data for the indicated secondary purposes.
              </Text>
            </View>
            <Spacing size="XXL" />
            <View>
              <Text variant="Body-Large-SemiBold" className="text-pink-light">
                Terms and Conditions
              </Text>
              <Spacing size="XXL" />
              <Text variant="Body-Medium-Regular" className="text-dark">
                1 General Terms SACAMO Technologies, SAPI de CV, Baja tu Seguro Agente de Seguros, S.A. de C.V., and BTS
                Servicio Internacional, S.A. de C.V., along with their subsidiaries and affiliates - hereinafter
                collectively referred to as "Bajatuseguro.com" - require that all visitors, hereinafter referred to as
                "User", to their site(s) adhere to the following rules and conditions, as well as any other service
                contracts, as applicable, required by Bajatuseguro.com for specific services or products, hereinafter
                referred to as "Service or Insurance Contracts". By accessing the site, the User expresses their
                acceptance and agreement with these terms and conditions, as amended, as well as with any modifications
                made by Bajatuseguro.com from time to time.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                Due to the open nature of the Internet and the Site, it is necessary to constantly change and modify the
                content, structure, and services offered. By accessing the Site, the User understands and accepts that
                "Bajatuseguro.com" may at any time make such modifications without prior notice. Therefore, the User
                accepts that it is their responsibility to periodically review this "Legal Notice", which is accessible
                at the bottom of each page of the Site. "Bajatuseguro.com" does not guarantee that the Products,
                Materials, or Services available through this Site are legal, appropriate, or available for use outside
                of the United Mexican States, and accessing them from locations where they or their content are illegal
                or prohibited is not permitted. Any User who chooses to access this Site from other locations does so on
                their own initiative and is responsible for compliance with local laws. This Legal Notice, along with
                its periodic modifications, once incorporated into the site, together with the Service Contract signed
                by the User, constitute the general rules of use of the site, hereinafter referred to as the "Site
                Rules". "Bajatuseguro.com" informs you that although it makes its best efforts in good faith to ensure
                the quality and content provided through the site, the content accessible through the Internet and links
                (web pages, etc.) cannot and will not be monitored, evaluated, or controlled by "Bajatuseguro.com". Such
                content and available addresses are constantly changing, and as of now, the User releases
                "Bajatuseguro.com" from any and all liability, whether civil, criminal, administrative, or from any
                damages (economic or moral), harm, or any other liability arising from the use of the Services and the
                information available through it.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                2 Services, Materials, and Products "Bajatuseguro.com" may provide or make available to the User various
                financial, banking, insurance, and informational services, including an email account, hereinafter
                referred to as the "Services", as well as other Materials and Products and related information available
                through the site or by links to other Internet sites, whether directly or indirectly from various
                third-party providers outside of "Bajatuseguro.com", hereinafter referred to as "Third-Party Sites".
                However, "Baja tu Seguro" cannot guarantee the service, Products, or Materials. The User understands and
                accepts that there may be delays, omissions, or inaccuracies in any Product, Material, or Service, which
                in no way can be considered the responsibility of "Bajatuseguro.com".
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                3 Liability "Bajatuseguro.com" is not responsible for, nor does it control in advance, approve, or
                endorse the services, information, data, files, products, and any type of material available on linked
                sites from Internet pages. Therefore, the User should exercise caution when evaluating and using the
                services, information, data, files, products, and any type of material available on linked sites.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                "Bajatuseguro.com" does not guarantee nor assumes any liability for damages of any kind that may be
                caused by: (i) the operation, availability, accessibility, or continuity of linked sites; (ii) the
                maintenance of services, information, data, files, products, and any type of material available on
                linked sites; (iii) the obligations and offers present on linked sites. Additionally, the User
                acknowledges and accepts that they are solely responsible for their use of the Internet and electronic
                and telecommunication means in general. Consequently, the User expressly releases "Bajatuseguro.com" and
                its officers and directors from any civil or criminal liability arising from the use of such
                communication means. "Bajatuseguro.com" will not be liable in any case to the User or third parties for
                damages related to the use or inability to use the Supernet services or the site, whether these arise
                from or are unrelated to the failure to follow the User's instructions, when such failure is due to a
                fortuitous event, force majeure, computing system failures, communication system interruptions, or any
                similar event beyond the control of "Bajatuseguro.com".
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                4 Warranty Limitation The User agrees that "Bajatuseguro.com" will not be liable for the accuracy or
                timeliness of services or products, or for the foreseeability, timeliness, content, or correct
                sequencing of materials, or for any decision or action taken by the user relying on the products,
                materials, or service. The services and all products and materials are provided "as is".
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                There is no guarantee that any service, products, materials, and other content available on or through
                this site, or the "Bajatuseguro.com" computer system, will meet the User's specific purposes or needs.
                There are no implied warranties of merchantability or fitness for a particular purpose or accuracy of
                the computer content, and no other warranty of any kind, express or implied, with respect to the
                products, materials, or services, or any other aspect of the services (including but not limited to
                access to information and execution order), even if "Bajatuseguro.com" has been informed or is otherwise
                aware of the possibility of such damages, including, without limitation, liability associated with any
                computer code that may infect the User's computer equipment or related software.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                5 Changes to the Site Rules "Bajatuseguro.com" reserves the right to revise the Legal Notice at any time
                and make modifications to adapt it to legislative, jurisprudential, or market practice developments.
                Additionally, the User will be deemed aware of and bound by changes to the Legal Notice when they access
                the site and use any material, product, or service.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                Such use or access by the User will constitute acceptance and agreement to the changes in the Legal
                Notice, regardless of the provisions of the Service Contract.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                6 Trademarks and Intellectual Property The trademarks that appear on these pages are the property of
                "Bajatuseguro.com". All trademarks not belonging to these entities are understood to be the property of
                third parties, as indicated. Copyright in the images, texts, screens, and Internet sites that appear or
                are related to this site are the property of "Bajatuseguro.com", as indicated. Information and material
                from the sites may be copied for personal or educational use, provided that each copy includes a
                copyright notice, registered trademarks, or reserved rights when reproduction is performed. However, the
                information and material from the sites may not be copied, displayed, distributed, printed, licensed,
                modified, published, reused, sold, transmitted, used to create derivative works, or used for public or
                commercial purposes, except in compliance with the terms and conditions displayed on the site and with
                the written consent of "Bajatuseguro.com". The acts of reproduction, transmission, retransmission,
                dissemination, sale, distribution, publication, or transmission of such content will not transfer
                ownership of any software or material on this site to the User of the Supernet services.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                7 Cookies "Bajatuseguro.com" reserves the right to create a cookie file or other similar file on the
                User's computer, which will store information related to the use of the site and will allow the
                provision of Supernet-related services in a more convenient manner for the User. We recommend reviewing
                our Privacy Notice for this site.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                8 Authorization for Page Links Through this site, the User may access links to other sites.
                "Bajatuseguro.com" makes its best efforts to ensure that the content of such sites complies with the
                standards established for this page. Links, their addresses, and contents may constantly change, and
                "Bajatuseguro.com" will not be responsible for the availability or operation of the content of these
                sites.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                This page and the links to other sites may not be subject to links or third-party site connections
                without prior written authorization from "Bajatuseguro.com".
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                9 Authorization to Use Information By using this page, the User authorizes "Bajatuseguro.com" to use the
                personal information freely provided by the User for the purposes set forth in the Privacy Notice of
                this site.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                10 Information Purpose The financial and other information displayed on this site should not be
                understood as intended to advise Users, nor is "Bajatuseguro.com" responsible for issuing such
                information. Therefore, the User is warned that delays, inaccuracies, or omissions may exist in the
                information contained therein, and it should not be considered an offer or recommendation for the User
                to engage in specific transactions. "Bajatuseguro.com" does not guarantee the accuracy or completeness
                of the information provided through the Supernet services. If the User is interested, they may request
                the necessary advice for product intermediation from "Bajatuseguro.com" at the offices indicated in the
                privacy notice section of this site. The content of this site page is subject to change without prior
                notice.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                11 Law and Jurisdiction By using the Internet pages of "Bajatuseguro.com", the User expressly agrees to
                submit to the jurisdiction of the courts of Mexico City, Federal District, United Mexican States, in
                case of any dispute, as well as to the applicable laws in that location, expressly waiving any other
                jurisdiction that may correspond by reason of their nationality
              </Text>
            </View>
            <Spacing size="XXL" />
            <View>
              <Text variant="Body-Large-SemiBold" className="text-pink-light">
                Data Deletion Policies
              </Text>
              <Spacing size="XL" />
              <Text variant="Body-Medium-Regular" className="text-dark">
                {' '}
                SACAMO TECNOLOGIES SAPI DE CV, BAJATUSEGURO.COM, INSURANCE AGENT, S.A. DE C.V. AND BTS SERVICIO
                INTERNACIONAL, S.A. DE C.V., collectively known bajatuseguro.com, located at Sócrates 128, Col. Polanco,
                C.P. 11550, Mexico City, CDMX, and the website www.bajatuseguro.com, are responsible for collecting your
                personal data, its use, and protection. In this regard, we inform you the following:
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Bold" className="text-dark">
                1. Purpose
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                This document establishes our policy for responding to data deletion requests under data protection law.
                It explains the rights of the data subject regarding data deletion and the responsibilities of
                Bajatuseguro.com in addressing such requests.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Bold" className="text-dark">
                2. Rights
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                An individual has the right to request the deletion of their data. This right allows individuals to
                request the removal of their personal data when there is no valid reason for its continued processing,
                no relationship with Bajatuseguro.com, or simply because they no longer wish for Bajatuseguro.com to
                retain it.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Bold" className="text-dark">
                3. When Does the Right to Erasure Apply?
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                Under data protection law, individuals have the right to have personal data erased and to prevent
                processing under specific circumstances:
              </Text>
              {bulletsTen.map((item, index) => (
                <Bullets key={index} label={item} />
              ))}
              <Spacing />
              <Text variant="Body-Medium-Bold" className="text-dark">
                4. How Can Data Be Deleted?
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                Upon the request of the data subject, a request for data deletion must be sent
                to contacto@bajatuseguro.com. We are committed to deleting the data from our database within one month
                (30 calendar days) and will confirm the deletion. Whenever possible, we will attempt to complete the
                request before the deadline. What Personal Data Will We Use for These Purposes? To fulfill the purposes
                described in this privacy notice, we will use the following personal data:
              </Text>
              {bulletsEleven.map((item, index) => (
                <Bullets key={index} label={item} />
              ))}
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                Additionally, for the purposes outlined in this privacy notice, we will use the following personal data
                considered sensitive and requiring special protection and your consent:
              </Text>
              <Spacing />
              <Spacing />
              {bulletsTwelve.map((item, index) => (
                <Bullets key={index} label={item} />
              ))}
              <Text variant="Body-Medium-Bold" className="text-dark">
                Who Do We Share Your Personal Information With, and for What Purposes?
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                The holder's personal information cannot be transferred to third parties. However, sharing is permitted
                in the following cases:
              </Text>
              {bulletsThei.map((item, index) => (
                <Bullets key={index} label={item} />
              ))}
              <Text variant="Body-Medium-Regular" className="text-dark">
                We inform you that your personal data is shared within the country with insurance companies,
                particularly insurers, financial institutions, and service companies operating on the Bajatuseguro.com
                platform for quoting prior to purchasing insurance, per your request.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Bold" className="text-dark">
                How Can You Access, Rectify, or Cancel Your Personal Data or Oppose Its Use?
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                You have the right to know what personal data we hold about you, how we use it, and the conditions under
                which we process it (Access). It is also your right to request the correction of your personal
                information if it is outdated, inaccurate, or incomplete (Rectification); to have it deleted from our
                records or databases when you believe it is not being properly used (Cancellation); and to oppose the
                use of your personal data for specific purposes (Opposition). These rights are known as ARCO rights.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Bold" className="text-dark">
                Mechanisms for Exercising ARCO Rights and Consent Revocation
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                To exercise your ARCO rights in accordance with the law, you must direct your request to our Personal
                Data Protection Department, located at Sócrates 128, Col. Polanco, C.P. 11550, Mexico City, CDMX, or
                contact us by phone at 01(55) 800-439-2252, or via email at contacto@bajatuseguro.com. Please confirm
                your request by phone to ensure it is properly received and processed in accordance with the law.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                The written request should include:
              </Text>
              {bulletsFourteen.map((item, index) => (
                <Bullets key={index} label={item} />
              ))}
              <Spacing />
              <Text variant="Body-Medium-Regular" className="text-dark">
                The responsible personnel of the Personal Data Protection Department will respond within 20 days, and if
                applicable under the law, the request will be fulfilled within 15 days of notification.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Bold" className="text-dark">
                How Can You Limit the Use or Disclosure of Your Personal Information?
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                To limit the use and disclosure of your personal information, you may send an email to
                contacto@bajatuseguro.com.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Bold" className="text-dark">
                Use of Tracking Technologies on Our Website
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                We inform you that our website www.bajatuseguro.com uses cookies, web beacons, and other technologies
                that allow us to monitor your behavior as an internet user and provide a better service and experience
                when navigating our site.
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                Cookies are data files stored on the hard drive of a user's computer or electronic communication device
                while browsing a specific website. They allow an exchange of state between the site and the user's
                browser. The state information may reveal session identification, authentication, user preferences, or
                other data stored by the browser. The next time you access our site, we may use the information stored
                in the cookie to facilitate your use of our website.
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Bold" className="text-dark">
                How Can You Learn About Changes to This Privacy Notice?
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                This privacy notice may be modified due to legal requirements, changes in our products or services, or
                for other reasons. We are committed to informing you of any changes through our website at
                www.bajatuseguro.com/aviso-privacidad.{' '}
              </Text>
              <Spacing />
              <Text variant="Body-Medium-Bold" className="text-dark">
                Your Consent for the Processing of Your Personal Data
              </Text>
              <Text variant="Body-Medium-Regular" className="text-dark">
                If this privacy notice is not provided to you directly or personally, you have five business days to
                oppose the processing and transfer of your data for secondary purposes, using the means outlined in this
                notice. It will be understood that the holder tacitly consents to the processing of their personal
                information under the terms outlined in this Privacy Notice if no opposition is expressed within the
                specified timeframe. For more information, you can send an email to contacto@bajatuseguro.com.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
}
