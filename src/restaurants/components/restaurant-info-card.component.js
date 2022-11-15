import React from 'react';
import { Text, Image, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import star from "../../../assets/star";
import open from "../../../assets/open";
import { Spacer } from '../../components/spacer/spacer.componet';

import {
  RestaurentCard,
  RestaurentCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.style"

export const ResturantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurent',
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      'https://th.bing.com/th/id/OIP.MlZXr9dd8Om34xx-wydaQQHaE9?pid=ImgDet&rs=1',
    ],
    address = '100,Some random Road',
    isOpenNow = true,
    rating = 4,
    isCloasedTemporarily = true,
  } = restaurant;


  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurentCard elevation={5}>
      <RestaurentCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isCloasedTemporarily && (
              <Text variant="error">CLOSED TEMPORARLY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurentCard>
  );
};
