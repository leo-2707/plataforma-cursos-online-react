import React, { useEffect } from 'react';
import Banner from '../organisms/Banner';
import Teacher from '../organisms/Teacher';

// Redux
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getAllTeachers } from '../../redux/actionCreators';

const Teachers = (props) => {
  useEffect(() => {
    store.dispatch(getAllTeachers());
  }, []);

  return (
    <>
      <Banner title={'Ours Teachers'} subtitle={'The teachers are very nice'} color={'third'} />
      {props.teachers && (
        <main className='ed-grid m-grid-2 lg-grid-5 row-gap-2 l-block s-cols-8 lg-cols-10 s-x-2 lg-x-1'>
          {props.teachers.map((item) => (
            <Teacher key={item.id} image={item.image} name={item.name} country={item.country} />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  teachers: state.teacherReducer.teachers,
});

export default connect(mapStateToProps, {})(Teachers);
