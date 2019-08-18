import React, { Component } from 'react';
// import { connect } from "react-redux";
//import { callingFullProgram } from "../../redux/Actions";
import API from '../api/API';

import Header from '../components/Header';

class WorkoutPreview extends Component {
  state = {
    workouts: [],
  };
  componentDidMount() {
    this.pullWorkoutPreview();
    //  console.log(`did mount`);
  }
  pullWorkoutPreview = () => {
    API.programByDayAndWeek(1, 1)

      .then(res => this.setState({ workouts: res.data }))
      .catch(err => console.log(err));
  };

  componentWillUnmount() {
    this.setState({ workouts: [] });
    console.log('componentWillUnmount');
  }

  render() {
    //console.log(`state: ${JSON.stringify(this.state, null, 2)}`);
    //  console.log(`props: ${JSON.stringify(this.props, null, 2)}`);
    return (
      <div className="workoutPreview">
        <Header />

        {// mapping thru first object
        this.state.workouts.map(all => (
          <div key={all._id} className="section">
            <h1>Day 1 - Quads and Hamstrings</h1>

            {// mapping thru array of exercises
            all.workouts.map((data, index) => (
              <div key={index} className="subSection">
                <h2>{data.exercisename}</h2>
                <div className="workout">
                  {
                    // <p>Muscle focus: {data.bodypart}</p>  <p>{data.totalsets} totalsets</p>
                  }
                  <div className="col-1">
                    {// if no warm up then not showing
                    !data.warmupsets ? (
                      <div />
                    ) : (
                      <div>
                        <h3>Warm-up</h3>
                        <p>
                          <span>Sets:</span> {data.warmupsets} x{' '}
                          {data.warmupreps}
                        </p>

                        <p>
                          <span>How-to:</span> {data.warmupdesc}
                        </p>
                      </div>
                    )}
                    <h3>Strategy</h3>
                    <p>
                      <span>Sets:</span> {data.regularsets} x {data.regularreps}
                    </p>

                    <p>
                      <span>How-to:</span> {data.regulardesc}
                    </p>
                  </div>
                  <div className="col-2">
                    <img
                      src="https://via.placeholder.com/200x200"
                      alt="dummy"
                    />
                    <img
                      src="https://via.placeholder.com/200x200"
                      alt="dummy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   fullProgram: state.fullProgram
// });

//export default connect(mapStateToProps)(WorkoutPreview);
export default WorkoutPreview;
