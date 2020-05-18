import React, { useEffect } from 'react';
import Banner from '../organisms/Banner';
import Card from '../organisms/Card';

// Redux
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getAllSpecialities } from '../../redux/actionCreators';

const Specialities = (props) => {
  useEffect(() => {
    store.dispatch(getAllSpecialities());
  }, []);

  return (
    <>
      <Banner title={'Specialities'} subtitle={'Your perfect study plan'} color={'second'} />
      {props.specialities && (
        <main className='ed-grid lg-grid-4 row-gap l-big-section'>
          {props.specialities.map((item) => (
            <Card path='specialities' key={item.id} id={item.id} image={item.image} name={item.name} />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  specialities: state.specialityReducer.specialities,
});

export default connect(mapStateToProps, {})(Specialities);
