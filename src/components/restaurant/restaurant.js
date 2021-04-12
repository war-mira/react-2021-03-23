<<<<<<< HEAD
import React, { useMemo, useState } from 'react';
=======
import React, { useState } from 'react';
import { connect } from 'react-redux';
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
<<<<<<< HEAD

const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
=======
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
  const [activeTab, setActiveTab] = useState('menu');

  const tabs = [
    { id: 'menu', title: 'Menu' },
    { id: 'reviews', title: 'Reviews' },
  ];

  const content = {
    menu: <Menu menu={menu} key={id} />,
    reviews: <Reviews reviews={reviews} restaurantId={id} />,
  }[activeTab];

  const tabs = [
    { id: 'menu', title: 'Menu' },
    { id: 'reviews', title: 'Reviews' },
  ];

  const content = {
    menu: <Menu menu={menu} key={restaurant.id} />,
    reviews: <Reviews reviews={reviews} />,
  }[activeTab];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {content}
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  averageRating: PropTypes.number,
};

const mapStateToProps = (state, props) => ({
  restaurant: restaurantSelector(state, props),
  averageRating: averageRatingSelector(state, props),
});

export default connect(mapStateToProps)(Restaurant);
