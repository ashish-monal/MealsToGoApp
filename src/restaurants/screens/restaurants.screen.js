import React from 'react';
import { Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native';
import { ResturantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import { Spacer } from '../../components/spacer/spacer.componet';
import { SafeArea } from '../../components/utility/safe-area.component';

const SearchContainer = styled.View`
padding:${(props) => props.theme.space[3]};;
`;

const RestaurentList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export const ResturantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurentList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }, { name: 6 }, { name: 7 }, { name: 8 }, { name: 9 }, { name: 10 }, { name: 11 }, { name: 12 }, { name: 13 }, { name: 14 }, { name: 15 }, { name: 16 }, { name: 17 }, { name: 18 }, { name: 19 }, { name: 20 }, { name: 21 }
      ]}
      renderItem={() =>
      (
        <Spacer position="bottom" size="large">
          <ResturantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
