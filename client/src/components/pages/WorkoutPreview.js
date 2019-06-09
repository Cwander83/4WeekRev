import React, { Component } from "react";
// import { connect } from "react-redux";
//import { callingFullProgram } from "../../redux/Actions";
import API from "../../api/API";

import NavBox from "../NavBox";

class WorkoutPreview extends Component {
  state = {
    workouts: []
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

  render() {
    console.log(`state: ${JSON.stringify(this.state, null, 2)}`);
    //  console.log(`props: ${JSON.stringify(this.props, null, 2)}`);
    return (
      <div className="workoutPreview">
        <NavBox />
        <h1>Welcome to WorkoutPreview Page</h1>
        {// mapping thru first object
        this.state.workouts.map(all => (
          <div key={all._id} className="section">
            {// mapping thru array of exercises
            all.workouts.map(data => (
              <div key={data._id} className="subSection">
                <h2>{data.exercisename}</h2>
                <p>Muscle focus: {data.bodypart}</p>
                <p>Total sets: {data.totalsets}</p>
                <p>
                  # of Warmup sets: {data.warmupsets}
                  {data.warmupreps} reps
                </p>
                <p />
                <p>
                  # of sets: {data.regularsets} x {data.regularreps} reps
                </p>

                <p>How-to: {data.regulardesc}</p>
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
