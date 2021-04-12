<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
<<<<<<< HEAD
import { restaurantsSelector } from '../../redux/selectors';
=======
import Loader from '../loader';
import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b

const Restaurants = ({ restaurants, loading, loaded, loadRestaurants }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    restaurants[0]?.id
  );

<<<<<<< HEAD
=======
  const activeId = activeRestaurantId || restaurants[0]?.id;

  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loadRestaurants, loading, loaded]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
  const tabs = restaurants.map(({ id, name }) => ({ id, title: name }));

  return (
    <div>
<<<<<<< HEAD
      <Tabs
        tabs={tabs}
        activeId={activeRestaurantId}
        onChange={setActiveRestaurant}
      />
      <Restaurant restaurant={activeRestaurant} />
=======
      <Tabs tabs={tabs} activeId={activeId} onChange={setActiveRestaurant} />
      <Restaurant id={activeId} />
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
<<<<<<< HEAD
export default connect((state) => {
  return {
    restaurants: restaurantsSelector(state),
  };
})(Restaurants);
=======

const mapStateToProps = (state) => ({
  restaurants: restaurantsListSelector(state),
  loading: restaurantsLoadingSelector(state),
  loaded: restaurantsLoadedSelector(state),
});

export default connect(mapStateToProps, { loadRestaurants })(Restaurants);
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
