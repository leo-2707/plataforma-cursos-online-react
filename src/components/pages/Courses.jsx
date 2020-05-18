import React, { useEffect } from 'react';
import Banner from '../organisms/Banner';
import Card from '../organisms/Card';

// Redux
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getAllCourses } from '../../redux/actionCreators';

const Courses = (props) => {
  useEffect(() => {
    store.dispatch(getAllCourses());
  }, []);

  return (
    <>
      <Banner title={'Courses'} subtitle={'Master the technology'} color={'primary'} />
      {props.courses && (
        <main className='ed-grid m-grid-2 lg-grid-5 row-gap-2 l-block s-cols-8 lg-cols-10 s-x-2 lg-x-1'>
          {props.courses.map((item) => (
            <Card path='courses' key={item.id} id={item.id} image={item.image} name={item.name} />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  courses: state.courseReducer.courses,
});

export default connect(mapStateToProps, {})(Courses);
