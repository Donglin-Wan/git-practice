import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { getListings } from '../../actions/products';
import Spinner from '../../common/SpinnerGraphic';

import {
  PageWrapper,
  FilterWrapper,
  ElectricityBtn,
  Badge,
  LocationFilter,
  LocationInfo,
  LocationIcon,
  FilterIcon,
  FilterBtn,
  InfoIcon,
  Hint,
  CardSection,
  WariningMsg,
} from './Elements';
import ListingCard from './components/ListingCard';

const ListingPage = ({ getListings, products: { listing, loading } }) => {
  useEffect(() => {
    getListings();
  }, []);
  const [listingData, setListingData] = useState([...listing]);
  const [SelectedOption, setSelectedOption] = useState('select');
  const SelectedRef = useRef(SelectedOption);
  const setMonthlyData = () => {
    let monthlyData = listing.filter((item) => {
      return item.billingOptions === 'Monthly';
    });
    setListingData([...monthlyData]);
  };

  const setQuarterlyData = () => {
    let QuarterlyData = listing.filter((item) => {
      return item.billingOptions === 'Quarterly';
    });
    setListingData([...QuarterlyData]);
  };

  const completedData = () => {
    setListingData([...listing]);
  };

  const handleSelection = (selectValue) => {
    console.log(selectValue);
    if (selectValue === 'monthly') {
      setMonthlyData();
    } else if (selectValue === 'quarterly') {
      setQuarterlyData();
    } else {
      completedData();
    }
  };

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
    SelectedRef.current = event.target.value;
    handleSelection(SelectedRef.current);
  };
  return (
    <PageWrapper>
      <FilterWrapper>
        <ElectricityBtn>
          Electricity <Badge>{listingData.length}</Badge>
        </ElectricityBtn>
        <LocationFilter>
          <LocationInfo>
            <LocationIcon />
            2000, NSW
          </LocationInfo>
          <FilterBtn value={SelectedOption} onChange={handleSelect}>
            <option selected>
              <FilterIcon />
              Filter
            </option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quaterly</option>
          </FilterBtn>
        </LocationFilter>
      </FilterWrapper>
      <Hint>
        <InfoIcon /> Initial Recommendations are based on an average medium
        usage as determined by relavant energy regulation hover next to the
        estimated cost box for more information. For a more accurated
        comparision relevant to your circumstances, please use the Bill Details
        tab on the results page to enter your most recent energy bill details.
      </Hint>

      {loading ? (
        <Spinner />
      ) : (
        <CardSection>
          {listingData.length > 0 ? (
            listingData.map((listing) => (
              <ListingCard key={listing._id} listing={listing} />
            ))
          ) : (
            <WariningMsg>No matched products</WariningMsg>
          )}
        </CardSection>
      )}
    </PageWrapper>
  );
};

ListingPage.propTypes = {
  getListings: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getListings })(ListingPage);
